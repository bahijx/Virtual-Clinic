import Search from './Search.jsx';
import Table from './TableRequests.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import search from '../assets/images/svg/search.svg';
import filter from '../assets/images/svg/filter.svg';
import NavBar from './NavBar.jsx';
import TableAppointments from './TableAppointments.jsx';
import NavBarDoctor from './NavBarDoctor.jsx';
import TableAppointmentsRequests from './TableAppointmentsRequests.jsx';


function AppointmentsListDoctor() {
  const[searchText, setSearchText] = useState('');
  const[filterText, setFilterText] = useState('');
  const[result, setResult] = useState([]);
  const[resultReq, setResultReq] = useState([]);
  const {username} = useParams();
  const[searchDate, setSearchDate] = useState('');
  const DoctorUsername = username;
  const Username = username;


  useEffect(() => {
const response = axios.get(`http://localhost:4000/Doctor/allAppointmentsDoc/${Username}`, {
  headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
})
.then(res =>setResult(res.data)).catch(err => console.log(err))
  }, [])
  useEffect(() => {
    const response = axios.get(`http://localhost:4000/Doctor/viewRequestedAppointments/${DoctorUsername}`, {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
    .then(res =>setResultReq(res.data)).catch(err => console.log(err))
      }, [])
console.log('apps', result);
console.log('appsReqs', resultReq);

// result.map((e) => {
//   console.log(e)
// })

const onFilterValueChanged=(event)=>{
  setFilterText(event.target.value);
}
console.log(filterText)
let navigate = useNavigate()

  let tHead = ['Date', 'Doctor Username','Patient Username','Patient Name', 'Status', 'Reschedule', 'Cancel'];
  let tHeadReq = ['Date','Patient Username','Patient Name', 'Accept', 'Reject'];


  return (
    <div>
      <NavBarDoctor username={username}/>
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
        <option value='canceled'>Cancelled</option>
        <option value='rescheduled'>Rescheduled</option>
        </select>
      </div>
    </div>
      <TableAppointments tHead={tHead} data={result} searchDate={searchDate} filterText={filterText} type='doctor'/>
      <p className="text-capitalize fs-4 w-25">Appointments Requests</p>
      <TableAppointmentsRequests tHead={tHeadReq} data={resultReq}/>
    </div>
  );
}
export default AppointmentsListDoctor;
