import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import search from '../assets/images/svg/search.svg';
import NavBarDoctor from './NavBarDoctor.jsx';
import TablePresDoctors from "./TablePresDoctors";

function PresDoctorsList() {
  const [searchText, setSearchText] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [filterText, setFilterText] = useState('');
  const [result, setResult] = useState([]);
  const { DoctorUsername, PatientUsername } = useParams();

  useEffect(() => {
    const response = axios.get(
      `http://localhost:4000/Doctor/viewAllPres/${DoctorUsername}/${PatientUsername}`,
      {
        headers: { authorization: "Bearer " + sessionStorage.getItem("token") },
      }
    )
      .then((res) => setResult(res.data))
      .catch((err) => console.log(err.request));
  }, [DoctorUsername, PatientUsername]);

  
  const onFilterValueChanged = (event) => {
    setFilterText(event.target.value);
  }
  console.log(filterText)
  let navigate = useNavigate()

  let tHead = ['Patient Username', 'Prescription Date', 'Description', 'Status', 'Update', 'Download'];

  return (
    <div>
      <NavBarDoctor username={DoctorUsername} />
      {/* <Search onChange={(e) => setSearch(e.target.value)}/> */}
      <div className="d-flex justify-content-between flex-row">
        <p className="text-capitalize fs-4 w-25">Prescriptions</p>
        <div className="d-flex flex-row w-75 justify-content-end">
          <div className="input-group w-50">
            <span
              className="input-group-text bg-white border-end-0 search"
            >
              <img src={search} alt="search" />
            </span>
            <input
              type="date"
              className="form-control border-start-0 search ps-0"
              placeholder="Search by date"
              onChange={(e) => setSearchDate(e.target.value)}
            />
          </div>
          <select name='medicalUse' onChange={onFilterValueChanged}>
            <option value='all'>All</option>
            <option value='filled'>Filled</option>
            <option value='unfilled'>Unfilled</option>
          </select>
        </div>
      </div>
      <TablePresDoctors tHead={tHead} data={result} searchText={searchText} searchDate={searchDate} filterText={filterText} />
    </div>
  );
}
export default PresDoctorsList;
