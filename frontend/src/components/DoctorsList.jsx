import Search from './Search.jsx';
import Table from './TableRequests.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import search from '../assets/images/svg/search.svg';
import filter from '../assets/images/svg/filter.svg';
import NavBar from './NavBar.jsx';
import TableDoctors from './TableDoctors.jsx'


function DoctorsList() {
  const[searchText, setSearchText] = useState('');
  const[searchDate, setSearchDate] = useState('');
  const[searchTime, setSearchTime] = useState('');
  const[filterText, setFilterText] = useState('');
  const[result, setResult] = useState([]);
  const{username} = useParams();

  const[resultDateTime, setResultDateTime] = useState([])
  //    if(searchDate && searchTime){
  //    axios.get(`http://localhost:4000/Patient/findDocByAvailability/${searchDate}/${searchTime}`)
  //    .then(res =>setResultDateTime(res.data)).catch(err => console.log(err))
  //  console.log(resultDateTime)
  //    }

  useEffect(() => {
     axios.get(`http://localhost:4000/Patient/findDocByAvailability/${username}/${searchDate}/${searchTime}`, {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
     .then(res =>setResultDateTime(res.data)).catch(err => console.log(err))
   console.log("hena", resultDateTime)
  }, [searchDate, searchTime])

  useEffect(() => {
const response = axios.get(`http://localhost:4000/Patient/viewAllDoctors/${username}`,{
  headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
})
.then(res =>setResult(res.data)).catch(err => console.log(err))
  }, [])
  
console.log("all doctors", result)
result.map((e) => {
  console.log(e)
})

const onFilterValueChanged=(event)=>{
  setFilterText(event.target.value);
}
console.log(filterText)
let navigate = useNavigate()

  let tHead = ['Name', 'Email', 'Speciality', 'Session Price', 'View', 'Chat'];

  return (
    <div>
      {/* <Search onChange={(e) => setSearch(e.target.value)}/> */}
      <div className="d-flex justify-content-between flex-row">
      <p className="text-capitalize fs-4 w-25">Doctors</p>
      <div className="d-flex flex-row w-75 justify-content-end">
        <div className="input-group w-50">
          <span
            className="input-group-text bg-white border-end-0 search"
          >
            <img src={search} alt="search" />
          </span>
          <input
            type="text"
            className="form-control border-start-0 search ps-0"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <input
            type="date"
            className="form-control border-start-0 search ps-0"
            placeholder="Search Date"
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </div>
        {/* <button className="filter-btn ms-2 d-flex flex-row align-items-center">
          <img src={filter} className="me-2" alt="filter" />
          Filter
        </button> */}
        <select className="input-group-text bg-white border-end-0 search" name='time' onChange={(e) => setSearchTime(e.target.value)}>
        <option value='11'>11 a.m.</option>
        <option value='12'>12 p.m.</option>
        <option value='1'>1 p.m.</option>
        <option value='2'>2 p.m.</option>
        <option value='3'>3 p.m.</option>
        <option value='4'>4 p.m.</option>
        <option value='5'>5 p.m.</option>
        <option value='6'>6 p.m.</option>
        <option value='7'>7 p.m.</option>
        <option value='8'>8 p.m.</option>
        <option value='9'>9 p.m.</option>
        <option value='10'>10 p.m.</option>
        </select>
        <select className="input-group-text bg-white border-end-0 search" name='speciality' onChange={onFilterValueChanged}>
        <option value='all'>All</option>
        <option value='dermatology'>Dermatology</option>
        <option value='dentistry'>Dentistry</option>
        <option value='psychiatry'>Psychiatry</option>
        <option value='neurology'>Neurology</option>
        <option value='orthopedics'>Orthopedics</option>
        </select>
      </div>
    </div>
      <TableDoctors tHead={tHead} data={result} searchText={searchText} searchDate={searchDate} searchTime={searchTime} resultDateTime={resultDateTime} filterText={filterText} user={username}/>
    </div>
  );
}
export default DoctorsList;
