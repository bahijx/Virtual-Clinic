import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function CaseTableBody({ data }) {
  const navigate = useNavigate();
  console.log("pres id", data._id);
  console.log("Data object:", data);


  return (
    <>
      {data.PatientUsername && <th>{data.PatientUsername}</th>}
      {data.Date && <td>{data.Date.substring(0, 10)}</td>}
      {data.Description && <td>{data.Description}</td>}
      {data.Filled && <td>Filled</td>}
      {!data.Filled && <td>Unfilled</td>}

    </>
  );
}

function TablePresGeneral({ tHead, data, searchText, filterText, searchDate }) {
  return (
    <div className="case-table card mt-4">
      <table className="table table-striped m-0">
        <thead>
          <tr className="text-capitalize">
            {tHead.map((e) => (
              <th scope="col" key={e}>
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data
            .filter((e) => {
              return (
                filterText === "" ||
                  filterText.toLowerCase() === "all" ?
                  e :
                  filterText.toLowerCase() === "filled" ? e.Filled : !e.Filled
              );
            })
            .filter((e) => {
              return searchText === "" ?
                e :
                e.PatientUsername.toLowerCase().includes(searchText.toLowerCase());
            })
            .filter((e) => {
              return searchDate === "" ?
                e :
                e.Date.substring(0, 10) === searchDate;
            })
            .map((e) => (
              <tr className="text-capitalize" key={e.prescriptionID}>
                <CaseTableBody data={e} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePresGeneral;
