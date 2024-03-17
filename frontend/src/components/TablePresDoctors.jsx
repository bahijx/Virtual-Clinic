import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function CaseTableBody({ data  }) {
  const navigate = useNavigate();
 // console.log("pres id", data.prescriptionID)
console.log("doctor username", data.DoctorUsername);
  console.log("pres id", data._id);
  //console.log("Data object:", data);
  // const downloadPrescription = () =>{
  //   axios.get(`http://localhost:4000/Doctor/downloadPrescriptionPDF/${data.prescriptionID}`
  //   ,{headers: { authorization: "Bearer " + sessionStorage.getItem("token")},})
  //   .then(res =>alert('Prescription downloaded')).catch(err => alert('error downloading prescription'));
  // }
  const downloadPrescription = () => {
    axios({
      url: `http://localhost:4000/Doctor/downloadPrescriptionPDF/${data.DoctorUsername}/${data._id}`,
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

  const updateLink = !data.Filled ? (
    // <span
    //   style={{ color: 'blue', cursor: 'pointer' }}
    //   onClick={() =>
    //     navigate(`/updatePrescription/${data.DoctorUsername}/${data.PatientUsername}/${data._id}`)
    //   }
    // >
    //   Update
    // </span>
          <td className="py-3 text-align-center">
          <div className="d-flex flex-row">
          <button
            className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
           onClick={()=>navigate(`/updatePrescription/${data.DoctorUsername}/${data.PatientUsername}/${data._id}/${'update'}`)}
          >
            Update
          </button>
          </div>
          </td>
  ) : (
    <span style={{ color: 'gray' }}>Update (Filled)</span>
  );


  return (
    <>
      {data.PatientUsername && <th>{data.PatientUsername}</th>}
      {data.Date && <td>{data.Date.substring(0, 10)}</td>}
      {data.Description && <td>{data.Description}</td>}
      {data.Filled && <td>Filled</td>}
      {!data.Filled && <td>Unfilled</td>}
      <td>{updateLink}</td>
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

function TablePresDoctors({ tHead, data, searchText, filterText, searchDate }) {
  return (
    <div className="case-table card mt-4">
      <table className="table table-striped m-0">
        <thead>
          <tr className="text-capitalize">
            {tHead.map((e) => (
              <th scope="col" key={e}>
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data
            .filter((e) => {
              return (
                filterText === "" ||
                  filterText.toLowerCase() === "all" ?
                  e :
                  filterText.toLowerCase() === "filled" ? e.Filled : !e.Filled
              );
            })
            .filter((e) => {
              return searchText === "" ?
                e :
                e.PatientUsername.toLowerCase().includes(searchText.toLowerCase());
            })
            .filter((e) => {
              return searchDate === "" ?
                e :
                e.Date.substring(0, 10) === searchDate;
            })
            .map((e) => (
              <tr className="text-capitalize" key={e.prescriptionID}>
                <CaseTableBody data={e} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePresDoctors;
