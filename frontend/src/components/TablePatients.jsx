import { useNavigate } from 'react-router-dom';


function CaseTableBody({ data, username }) {
  let navigate = useNavigate()
  console.log("username doctor:", username)
  const PatientUsername = `${data.Username}`;
  const DoctorUsername = `${username}`;

  return (
    <>

      {data.Name && <th>{data.Name}</th>}
      {data.Username && <td>{data.Username}</td>}
      {data.Email && <td>{data.Email}</td>}
      {data.DateofBirth && <td>{data.DateofBirth}</td>}


      <td className="py-3 text-align-center">
        <div className="d-flex flex-row">
          <button
            className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
            onClick={() => navigate(`/patientInfo/${username}/${data.Username}`)}
          >
            View
          </button>
        </div>
      </td>

      <td className="py-3 text-align-center">
        <div className="d-flex flex-row">
          <button
            className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
            onClick={() => navigate(`/addPrescription/${username}/${PatientUsername}`)}
          >
            Add Prescription
          </button>
        </div>
      </td>

      <td className="py-3 text-align-center">
        <div className="d-flex flex-row">
          <button
            className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
            onClick={() => navigate(`/presDoctorsList/${DoctorUsername}/${PatientUsername}`)}
          >
            View Prescriptions
          </button>
        </div>
      </td>
      <td className="py-3 text-align-center">
        <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={() => navigate(`/chatWithPatient/${PatientUsername}/${DoctorUsername}`)}
      >
        Chat
      </button>
    </div> 
    </td>
    </>
  );
}

function TablePatients({ tHead, data, searchText, filterText, username }) {
  console.log("filterr", filterText)
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
              return filterText.toLowerCase() === '' || filterText.toLowerCase() === 'all' ?
                e : e.Appointment_Status.toLowerCase() === filterText.toLowerCase()
            })
            .filter((e) => {
              return searchText.toLowerCase() === '' ?
                e : e.Name.toLowerCase().includes(searchText.toLowerCase())
            })
            .map((e) => (
              <tr className="text-capitalize">
                <CaseTableBody data={e} username={username} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePatients;
