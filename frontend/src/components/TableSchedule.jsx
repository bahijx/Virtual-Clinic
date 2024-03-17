import { useNavigate } from 'react-router-dom';

function CaseTableBody({ data, doctorUsername, patientUsername }) {
  let navigate = useNavigate()

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
        onClick={()=>navigate(`/payAppointment/${patientUsername}/${data._id}/${doctorUsername}`)}
      >
        Book
      </button>
      </div>
      </td>
}
{data.Status==='available' &&

      <td className="py-3 text-align-center">
      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={()=>navigate(`/payAppointmentFamily/${patientUsername}/${data._id}/${doctorUsername}`)}
      >
        Book For a Family Member
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

function TableSchedule({ tHead, data, doctorUsername, patientUsername }) {
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
                <CaseTableBody data={e} doctorUsername={doctorUsername} patientUsername={patientUsername}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableSchedule;
