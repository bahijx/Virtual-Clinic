import { useState, useEffect } from "react";
import NavBarAdministrator from "../components/NavBarAdministrator";
import { useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
import MainBtn from "../components/Button";


function RequestInfo(){
    const {username} = useParams();
    const[result, setResult] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
  const response = axios.get(`http://localhost:4000/Admin/InfosOfAPharmacistRequest/${username}`,{
    headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
  })
  .then(res =>setResult(res.data)).catch(err => console.log(err))
    }, [])

  console.log(result)

//   result.map((e) => {
//     console.log(e)
//   })

return (
    <div>
        <NavBarAdministrator/>
        <h1>Doctor Request Info</h1>
        <ul>
            <h3>Name: {result.Name}</h3>
            <h3>UserName: {result.Username}</h3>
            <h3>Email: {result.Email}</h3>
            <h3>Date of Birth: {result.DateOfBirth}</h3>
            <h3>Hourly Rate: {result.HourlyRate}</h3>
            <h3>Affiliation: {result.Affiliation}</h3>
            <h3>Educational Background: {result.EducationalBackground}</h3>
            <h3>Request Status: {result.Status}</h3>

        </ul>
        <div>
            <MainBtn
              txt="Accept request"
              style="green-btn"
              action={() => navigate(`/administratorView/${username}`)}
              key="navBtn"
            />
             <MainBtn
              txt="Reject Request"
              style="white-btn"
              action={() => navigate(`/administratorView/${username}`)}
              key="navBtn"
            />
          </div>
        </div>
)
}
export default RequestInfo;