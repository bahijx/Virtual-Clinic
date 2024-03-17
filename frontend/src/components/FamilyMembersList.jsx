import Search from './Search.jsx';
import Table from './TableRequests.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import search from '../assets/images/svg/search.svg';
import filter from '../assets/images/svg/filter.svg';
import NavBar from './NavBar.jsx';
import TableFamilyMembers from './TableFamilyMembers.jsx'
import NavBarPatient from './NavBarPatient.jsx';
import MainBtn from './Button.jsx';

function FamilyMembersList() {
  const {username} = useParams();
  const navigate = useNavigate();
  const[result, setResult] = useState([]);
  const[resultSub, setResultSub] = useState([]);



  useEffect(() => {
const response = axios.get(`http://localhost:4000/Patient/getFamMembers/${username}`, {
  headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
})
.then(res =>setResult(res.data)).catch(err => console.log(err))
  }, [])

console.log(result)
result.map((e) => {
  console.log(e)
})


  let tHead = ['Name', 'Age', 'National ID', 'Gender', 'Relation to Patient', 'Health Package Subscription'];

  return (
    <div>
      <NavBarPatient username={username}/>
      {/* <Search onChange={(e) => setSearch(e.target.value)}/> */}
      <div className="d-flex justify-content-between flex-row">
      <p className="text-capitalize fs-4 w-25">Family Members</p>
      <div className="input-group w-25">

      <MainBtn
          txt="Add Family Member"
          style="green-btn"
          action={() => navigate(`/addFamilyMember/${username}`)}
          key="navBtn"
        />
        </div>
    </div>
      <TableFamilyMembers tHead={tHead} data={result} username={username}/>
    </div>
  );
}
export default FamilyMembersList;
