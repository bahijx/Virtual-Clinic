import { useNavigate } from 'react-router-dom';


function CaseTableBody({ data ,onAcceptOrReject, username }) {
  let navigate = useNavigate()
  console.log("Logging ahoooo onAcceptOrReject prop in CaseTableBody:", onAcceptOrReject);

  const handleAccept = () => {
    onAcceptOrReject(data.Username, 'accept');
  };

  const handleReject = () => {
    onAcceptOrReject(data.Username, 'reject');
  };
  return (
    <>
      
    {data.Name && <th>{data.Name}</th>}
    {data.Username&&<td>{data.Username}</td>}
    {data.Email&&<td>{data.Email}</td>}
    {data.Affiliation&&<td>{data.Affiliation}</td>}
    {data.Affilation&&<td>{data.Affilation}</td>}
    {data.HourlyRate&&<td>{data.HourlyRate}</td>}
    {data.EDB&&<td>{data.EDB}</td>}

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
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={handleReject}
      >
        Reject
      </button>
      </div>
      </td>

    </>
  );
}
function TableRequests({ tHead, data, searchText, filterText ,onAcceptOrReject, username}) {
  console.log("walahy Logging onAcceptOrReject prop in TableRequests:", onAcceptOrReject);

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
            return filterText.toLowerCase() === '' || filterText.toLowerCase() === 'all'?
            e : e.MedicalUse.toLowerCase() === filterText.toLowerCase()
          })
          .filter((e) => {
            return searchText.toLowerCase() === '' ? 
            e: e.Name.toLowerCase().includes(searchText.toLowerCase())
          })
          .map((e) => (
            <tr className="text-capitalize" >
            <CaseTableBody data={e} onAcceptOrReject={onAcceptOrReject} username={username}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableRequests;
