import NavBarPatient from "../components/NavBarPatient";
import TableHealthPackages from "./TableHealthPackages";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TableHealthPackagesFam from "./TableHealthPackagesFam";

function HealthPackagesListFam(){
    const[result, setResult] = useState([]);
    const[resultSub, setResultSub] = useState([]);

    const {username, id} = useParams();
  
  
    useEffect(() => {
  const response = axios.get(`http://localhost:4000/Patient/health-packages/${username}`,{
    headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
  })
  .then(res =>setResult(res.data)).catch(err => console.log(err))
    }, [])
    useEffect(() => {
      const response = axios.get(`http://localhost:4000/Patient/viewSubscribedHealthPackagesOfFamilyMember/${username}/${id}`,{
        headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
      })
      .then(res =>setResultSub(res.data)).catch(err => console.log(err))
        }, [])
  console.log('hayouya', result)
  // result.map((e) => {
  //   console.log(e)
  // })
  console.log('hayouya sub', resultSub)
  // resultSub.map((e) => {
  //   console.log(e)
  // })
  let navigate = useNavigate()
  let tHead = ['Type', 'Annual Fee', 'Doctor Session Discount', 'Medicine Discount', 'Family Subscription Discount', 'View'];
  let tHeadSub = ['Type', 'Payment Method', 'Renewal Date', 'Subscription Start Date', 'Subscription End Date']
    return (
        <div>
          <NavBarPatient username={username}/>
        <div className="d-flex justify-content-between flex-row">
      <p className="text-capitalize fs-4 w-25">Health Packages</p>
    </div>
    {result && <TableHealthPackagesFam tHead={tHead} data={result}/>
}
    <div className="d-flex justify-content-between flex-row">
      <p className="text-capitalize fs-4 w-25">Subscribed Health Package</p>
    </div>    
    {resultSub && <TableHealthPackagesFam tHead={tHeadSub} data={resultSub}/>
}

        </div>
    )
}
export default HealthPackagesListFam;