import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CaseTableBody({ data , DoctorUsername, PatientUsername, prescriptionId}) {
  let navigate = useNavigate();

  const handleAdd = async() => {
    const postData = {Name:data.Name, dosage:1};
    try{
    const response = await axios.post(`http://localhost:4000/Doctor/AddMedicineToPrescription/${DoctorUsername}/${PatientUsername}/${prescriptionId}`, postData, {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
   // .then(res =>setResult(res)).catch(err => console.log(err))
      if (response.status === 200) {
            alert(response.data.message);
              console.log(response.data.message);
              window.location.reload(true);
          }}
          catch(error ){
            alert(`Failed to add medicine `);
            console.error('Error adding medicine:', error);
          };
  }

  return (
    <>
    <th>{data.Name}</th>
    <td className="py-3 text-align-center">
      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={handleAdd}
      >
        Add to Prescription
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

function TableMedicines({ tHead, data, DoctorUsername, PatientUsername, prescriptionId}) {
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
          .map((e) => (
            <tr className="text-capitalize">
                <CaseTableBody data={e} DoctorUsername={DoctorUsername} PatientUsername={PatientUsername} prescriptionId={prescriptionId}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableMedicines;
