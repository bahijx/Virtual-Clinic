import { useNavigate } from 'react-router-dom';
import moment from 'moment';


function CaseTableBody({ data }) {
  let navigate = useNavigate()

  return (
    <>
      
    {data.Date && <th>{data.Date.substring(0,10)}</th>}
    {data.Description && <td>{data.Description}</td>}
    {data.Diagnosis && <td>{data.Diagnosis}</td>}
    {data.Medication && <td>{data.Medication}</td>}

    
      

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

function TableHealthRecords({ tHead, data }) {
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

export default TableHealthRecords;
