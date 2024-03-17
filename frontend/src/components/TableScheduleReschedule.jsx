import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CaseTableBody({ data, appID, patientUsername, doctorUsername , type}) {
  let navigate = useNavigate();
  console.log('app id', appID);
  console.log('time slot', data._id);

const rescheduleAppointment = (e) =>{
  e.preventDefault();
  console.log("ana f reschedule");
  if(type==='patient'){
  axios.post(`http://localhost:4000/Patient/rescheduleAppointment/${patientUsername}/${appID}/${data._id}`
  ,"",{headers: { authorization: "Bearer " + sessionStorage.getItem("token")},})
  .then(res =>{alert('appointment rescheduled'); navigate(`/appointmentsList/${patientUsername}`)})
  .catch(err => {console.log(err); alert('error rescheduling appointment')});
  }else{
    axios.post(`http://localhost:4000/Doctor/rescheduleAppointment/${doctorUsername}/${appID}/${data._id}`
    ,"",{headers: { authorization: "Bearer " + sessionStorage.getItem("token")},})
    .then(res =>{alert('appointment rescheduled'); navigate(`/appointmentsList/${doctorUsername}`)})
    .catch(err => {console.log(err); alert('error rescheduling appointment')});
  }
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
        onClick={rescheduleAppointment}
      >
        Book
      </button>
      </div>
      </td>
}
{data.Status!=='available' && <td>Booked</td>}    

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

function TableScheduleReschedule({ tHead, data, appID, patientUsername, doctorUsername, type }) {
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
          {data && data
          .map((e) => (
            <tr className="text-capitalize">
                <CaseTableBody data={e} appID={appID} patientUsername={patientUsername} doctorUsername={doctorUsername} type={type}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableScheduleReschedule;
