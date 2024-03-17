import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CaseTableBody({ data, username }) {
  let navigate = useNavigate()
  console.log("pres id", data.prescriptionID)

  // const downloadPrescription = () =>{
  //   axios.get(`http://localhost:4000/Patient/downloadPrescriptionPDF/${username}/${data.prescriptionID}`
  //   ,{headers: { authorization: "Bearer " + sessionStorage.getItem("token")},})
  //   .then(res =>alert('Prescription downloaded')).catch(err => alert('error downloading prescription'));
  // }
  const downloadPrescription = () => {
    axios({
      url: `http://localhost:4000/Patient/downloadPrescriptionPDF/${username}/${data.prescriptionID}`,
      method: 'GET',
      responseType: 'blob', // Important
      headers: {
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'prescription.pdf'); // or any other extension
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      alert('Prescription downloaded');
    }).catch((error) => {
      console.error('Error downloading prescription', error);
      alert('error downloading prescription');
    });
  }
  
  return (
    <>

      {data.DoctorUsername && <th>{data.DoctorUsername}</th>}
      {data.Date && <td>{data.Date.substring(0, 10)}</td>}
      {data.Description && <td>{data.Description}</td>}
      {data.Filled && <td>Filled </td>}
      {!data.Filled && <td>Unfilled </td>}



      <td className="py-3 text-align-center">
        <div className="d-flex flex-row">
          <button
            className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
            onClick={() => navigate(`/prescriptionInfo/${data.PatientUsername}/${data.prescriptionID}`)}
          >
            View
          </button>
        </div>
      </td>

      <td className="py-3 text-align-center">
        <div className="d-flex flex-row">
          <button
            className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
            onClick={downloadPrescription}
          >
            Download
          </button>
        </div>
      </td>


    </>
  );
}

// function NoramlTableBody({ data }) {
//   let arr = [];
//   for (let key in data) arr.push(data[key]);

//   return (
//     <>
//       {arr.map((e) => (
//         <td>{e}</td>
//       ))}
//     </>
//   );
// }

function TablePrescriptions({ tHead, data, searchText, filterText, searchDate, username }) {
  console.log("fff", filterText.toLowerCase())
  return (
    <div className="case-table card mt-4">
      <table className="table table-striped m-0">
        <thead>
          <tr className="text-capitalize">
            {tHead.map((e) => (
              <th scope="col">{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data
            .filter((e) => {
              return filterText === '' || filterText.toLowerCase() === 'all' ?
                e : filterText.toLowerCase() === 'filled' ? e.Filled : !e.Filled
            })
            .filter((e) => {
              return searchText === '' ?
                e : e.DoctorUsername.toLowerCase().includes(searchText.toLowerCase())
            })
            .filter((e) => {
              return searchDate === '' ?
                e : e.Date.substring(0, 10) === searchDate
            })
            .map((e) => (
              <tr className="text-capitalize">
                <CaseTableBody data={e} username={username}/>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePrescriptions;
