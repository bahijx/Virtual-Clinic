import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CaseTableBody({ data, appID, patientUsername, doctorUsername }) {
  let navigate = useNavigate();
const followUp = async  (e) => {
  e.preventDefault();
    console.log('Follow up button clicked');
    axios.post(`http://localhost:4000/Patient/requestFollowUpAppointment/${patientUsername}/${appID}/${data._id}`, "", {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
    .then(res => {
      alert('Follow Up Requested');
      navigate(`/appointmentsList/${patientUsername}`);
    })
    .catch(err => {
      // Check if the error response has data and a message
      if (err.response && err.response.data && err.response.data.error) {
        alert('Error requesting a follow up: ' + err.response.data.error);
        console.log(err);
      } else {
        // Fallback error message if the above data is not available
        alert('Error requesting a follow up');
      }
    });
  }
  

  

  return (
    <>
      
    {data.Date && <th>{data.Date.substring(0,10)}</th>}
    {data.Time && <td>{data.Time}</td>}
    {data.Status && <td>{data.Status}</td>}
    {data.Status==='available' &&
    <td className="py-3 text-align-center">
      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={followUp}
      >
        Request Follow Up
      </button>
      </div>
      </td>
}    

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

function TableRequestFollowUp({ tHead, data, appID, patientUsername, doctorUsername }) {
  console.log('basbosa hena followUp', data)

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
          {data && data
          .map((e) => (
            <tr className="text-capitalize">
                <CaseTableBody data={e} appID={appID} patientUsername={patientUsername} doctorUsername={doctorUsername}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableRequestFollowUp;
