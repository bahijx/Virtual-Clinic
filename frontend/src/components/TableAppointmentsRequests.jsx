import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { useState } from 'react';


function CaseTableBody({ data }) {
  let navigate = useNavigate();
  const DoctorUsername = data.DoctorUsername;
  const AppointmentId = data._id;

  const handleAccept = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/Doctor/acceptFollowUpRequest/${DoctorUsername}/${AppointmentId}`, "", {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token") },
    })
      .then(res => { alert('Appointment Accepted'); window.location.reload(true) }).catch(err => { console.log(err); alert('error accepting appointment') })
  }
  
  const handleReject = (e) => {
    e.preventDefault();
    const { DoctorUsername, _id } = data;
  
    axios.delete(`http://localhost:4000/Doctor/rejectFollowUpRequest/${DoctorUsername}/${_id}`, {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token") }
    })
      .then(res => {
        alert('Appointment Rejected');
        window.location.reload(true);
      })
      .catch(err => {
        console.log(err);
        alert('Error rejecting appointment');
      });
  };

  return (
    <>

      {data.Date && <th>{data.Date.substring(0, 10)}</th>}
      {data.PatientUsername && <td>{data.PatientUsername}</td>}
      {data.Name && <td>{data.Name}</td>}

      <td className="py-3 text-align-center">
        <div className="d-flex flex-row">
          <button
            className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </td>

      <td className="py-3 text-align-center">
        <div className="d-flex flex-row">
          <button
            className={`red-txt mx-2 text-capitalize border-0 bg-transparent`}
            onClick={handleReject}
          >
            Reject
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

function TableAppointmentsRequests({ tHead, data }) {
  console.log('haayaa', data)

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
                <CaseTableBody data={e} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableAppointmentsRequests;
