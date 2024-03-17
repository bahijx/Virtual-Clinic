import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function CaseTableBody({ data , user}) {
  let navigate = useNavigate();

  return (
    <>
      
    {data.Name && <th>{data.Name}</th>}
    {data.Email&&<td>{data.Email}</td>}
    {data.Speciality&&<td>{data.Speciality}</td>}
    {data.sessionPrice&&<td>{data.sessionPrice}</td>}
    
      <td className="py-3 text-align-center">
      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={()=>navigate(`/doctorInfo/${data.Username}/${user}`)}
      >
        View
      </button>
      </div>
      </td>
      <td className="py-3 text-align-center">
      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={() => navigate(`/chatWithDoctor/${user}/${data.Username}`)}
      >
        Chat
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

function TableDoctors({ tHead, data, searchText, searchDate, searchTime, resultDateTime, filterText, user }) {
console.log(resultDateTime.length)
 
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
            let exists = false
           resultDateTime.map((s) => {
           if(e.Username===s.Username) {
            exists = true
           }
          // return true
           })
           return resultDateTime.length ? exists : !(searchDate && searchTime) 
          })
          .filter((e) => {
            return filterText.toLowerCase() === '' || filterText.toLowerCase() === 'all'?
            e : e.Speciality.toLowerCase() === filterText.toLowerCase()
          })
          .filter((e) => {
            return searchText.toLowerCase() === '' ? 
            e: (e.Name.toLowerCase().includes(searchText.toLowerCase()) || e.Speciality.toLowerCase().includes(searchText.toLowerCase()))
          })
          .map((e) => (
            <tr className="text-capitalize">
                <CaseTableBody data={e} user={user}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDoctors;
