import Search from './Search.jsx';
import Table from './TableRequests.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import search from '../assets/images/svg/search.svg';
import filter from '../assets/images/svg/filter.svg';
import NavBar from './NavBar.jsx';
import TableAppointments from './TableAppointments.jsx';
import NavBarPatient from './NavBarPatient.jsx';
import TableAppointmentsFamily from './TableAppointmentsFamily.jsx';
import FollowUpButton from './FollowUp.jsx'; // Import the new Follow Up button component


function AppointmentsList() {
  const[filterText, setFilterText] = useState('');
  const[result, setResult] = useState([]);
  const[resultFamily, setResultFamily] = useState([]);

  const {username} = useParams();
  const[searchDate, setSearchDate] = useState('');


  useEffect(() => {
const response = axios.get(`http://localhost:4000/Patient/allAppointments/${username}`, {
  headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
})
.then(res =>setResult(res.data.filteredAppointments)).catch(err => console.log(err))
  }, [])
  useEffect(() => {
    const response = axios.get(`http://localhost:4000/Patient/allFamilyMemberAppointments/${username}`, {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
    .then(res =>setResultFamily(res.data.filteredAppointments)).catch(err => console.log(err))
      }, [])
console.log('hayouya', resultFamily)
result.map((e) => {
  console.log(e)
})

const onFilterValueChanged=(event)=>{
  setFilterText(event.target.value);
}
console.log("filter",filterText)
let navigate = useNavigate()
/////
  let tHead = ['Date', 'Doctor Username', 'Patient Username', 'Patient Name', 'Status', 'Reschedule', 'Cancel', 'Follow Up'];

  return (
    <div>
      <NavBarPatient username={username}/>
      {/* <Search onChange={(e) => setSearch(e.target.value)}/> */}
      <div className="d-flex justify-content-between flex-row">
      <p className="text-capitalize fs-4 w-25">Appointments</p>
      <div className="d-flex flex-row w-75 justify-content-end">
        <div className="input-group w-50">
        
        <input
            type="date"
            className="form-control border-start-0 search ps-0"
            placeholder="Filter by date"
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </div>

        
        {/* <button className="filter-btn ms-2 d-flex flex-row align-items-center">
          <img src={filter} className="me-2" alt="filter" />
          Filter
        </button> */}
        <select className="input-group-text bg-white border-end-0 search" name='appointments' onChange={onFilterValueChanged}>
        <option value='all'>All</option>
        <option value='upcoming'>Upcoming</option>
        <option value='completed'>Completed</option>
        <option value='canceled'>Canceled</option>
        <option value='rescheduled'>Rescheduled</option>
        </select>
      </div>
    </div>
      <TableAppointments tHead={tHead} data={result} searchDate={searchDate} filterText={filterText} type='patient'/>
      <h3>Family Members Appointments</h3>
      <TableAppointmentsFamily tHead={tHead} data={resultFamily} searchDate={searchDate} filterText={filterText} />

    </div>
  );
}
export default AppointmentsList;
