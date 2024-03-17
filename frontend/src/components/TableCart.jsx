import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function CaseTableBody({ data, DoctorUsername, PatientUsername, prescriptionId }) {
  let navigate = useNavigate();
  const [newQuantity, setNewQuantity] = useState(data.quantity);
  const [maxQuantity, setMaxQuantity] = useState(0);
  const [dose, setDose] = useState(0);

  const handleRemove = async(e) => {
    e.preventDefault();
    const postData = {medicineName: data.Name}
    try{
    const response = await axios.delete(`http://localhost:4000/Doctor/deleteMedecineFromPrescription/${DoctorUsername}/${PatientUsername}/${prescriptionId}/${data.Name}` , {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
   // .then(res =>setResult(res)).catch(err => console.log(err))
      if (response.status === 200) {
            alert(response.data.message);
              console.log(response.data.message);
              window.location.reload(true);
          }}
          catch(error ){
            alert(`Failed to remove item `);
            console.error('Error removing item:', error);
          };
      }
      const handleQuantityAdd = async(e) => {
        e.preventDefault();
        const postData = {newDosage: data.dosage+1}
        try{
        const response = await axios.put(`http://localhost:4000/Doctor/updateMedicineDosage/${DoctorUsername}/${prescriptionId}/${data.Name}`,postData , {
          headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
        })
       // .then(res =>setResult(res)).catch(err => console.log(err))
          if (response.status === 200) {
                alert("Updated");
                  console.log(response.data.message);
                  window.location.reload(true);
              }}
              catch(error ){
                alert(`Failed to update dosage`);
                console.error('Error removing item:', error);
              };
          }
          const handleQuantityRemove = async(e) => {
            e.preventDefault();
            const postData = {newDosage: data.dosage-1}
            try{
            const response = await axios.put(`http://localhost:4000/Doctor/updateMedicineDosage/${DoctorUsername}/${prescriptionId}/${data.Name}`,postData , {
              headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
            })
           // .then(res =>setResult(res)).catch(err => console.log(err))
              if (response.status === 200) {
                    alert("Updated");
                      console.log(response.data.message);
                      window.location.reload(true);
                  }}
                  catch(error ){
                    alert(`Failed to update dosage `);
                    console.error('Error removing item:', error);
                  };
              }

      
            
  return (
    <>
    <th>{data.Name}</th>

    <td>
    <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={handleQuantityAdd}
      >
        +
      </button>
      {data.dosage}
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={handleQuantityRemove}
      >
        -
      </button>
      </div>
      
    </td>

      <td className="py-3 text-align-center">
      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={handleRemove}
      >
        Remove
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

function TableCart({ tHead, data, DoctorUsername, PatientUsername, prescriptionId  }) {
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

export default TableCart;
