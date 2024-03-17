import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import search from "../assets/images/svg/search.svg";
import TablePatients from "./TablePatients.jsx";
import NavBarDoctor from "./NavBarDoctor.jsx";

function PatientsList() {
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");
  const [result, setResult] = useState([]);
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const response = axios
      .get(`http://localhost:4000/Doctor/MyPatients/${username}`, {
        headers: { authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((res) => {
        setResult(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [username]);
  console.log(result);
  result.map((e) => {
    console.log(e);
  });

  const onFilterValueChanged = (event) => {
    setFilterText(event.target.value);
  };
  console.log(filterText);

  let tHead = [
    "Name",
    "Username",
    "Email",
    "View",
    "Add Prescription",
    "View Prescriptions",
    "Chat"
  ];
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <NavBarDoctor username={username} />
      <div className="d-flex justify-content-between flex-row">
        <p className="text-capitalize fs-4 w-25">Patients</p>
        <div className="d-flex flex-row w-75 justify-content-end">
          <div className="input-group w-50">
            <span className="input-group-text bg-white border-end-0 search">
              <img src={search} alt="search" />
            </span>
            <input
              type="text"
              className="form-control border-start-0 search ps-0"
              placeholder="Search"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <select className="input-group-text bg-white border-end-0 search" name="upcomingAppointments" onChange={onFilterValueChanged}>
            <option value="all">All</option>
            <option value="upcoming">Upcoming</option>
            <option value="finished">Finished</option>
            <option value="running">Running</option>
            <option value="following">Following</option>
          </select>
        </div>
      </div>
      <TablePatients
        username={username}
        tHead={tHead}
        data={result}
        searchText={searchText}
        filterText={filterText}
      />
    </div>
  );
}
export default PatientsList;
