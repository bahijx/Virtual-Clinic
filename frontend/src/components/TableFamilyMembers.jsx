import { useNavigate } from 'react-router-dom';


function CaseTableBody({ data, username }) {
  let navigate = useNavigate()

  return (
    <>
      
    {data.Name && <th>{data.Name}</th>}
    {data.Age&&<td>{data.Age}</td>}
    {data.NationalID&&<td>{data.NationalID}</td>}
    {data.Gender&&<td>{data.Gender}</td>}
    {data.RelationToPatient&&<td>{data.RelationToPatient}</td>}
    <td className="py-3 text-align-center">
      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={()=>navigate(`/healthPackagesListFam/${username}/${data.NationalID}`)}
      >
        View
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

function TableFamilyMembers({ tHead, data, username}) {
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
                <CaseTableBody data={e} username={username}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableFamilyMembers;
