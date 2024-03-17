import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import axios from "axios";
import NavBarPatient from "../components/NavBarPatient";
import TableSchedule from "../components/TableSchedule";
import TableRequestFollowUp from "../components/TableRequestFollowUp";


function RequestFollowUp(){

    const {usernamePatient, usernameDoctor, appID, type} = useParams();
    const[result, setResult] = useState('');


    useEffect(() => {
  const response = axios.get(`http://localhost:4000/Patient/viewDoctorInfo/${usernameDoctor}/${usernamePatient}`,{
    headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
  })
  .then(res =>setResult(res.data)).catch(err => console.log(err))
    }, [])

  console.log('alo ana basbosa ba followUp hena',result)

let tHead = ['Date', 'Time', 'Status', 'Request Follow Up'];

    return (
        <div>
        <NavBarPatient username={usernamePatient}/>
        <h1>Available Appointments: </h1>
            <TableRequestFollowUp tHead={tHead} data={result.AvailableTimeSlots} appID={appID} patientUsername={usernamePatient} doctorUsername={usernameDoctor}/>
        </div>
    )
    }
    export default RequestFollowUp;