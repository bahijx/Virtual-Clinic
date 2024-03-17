import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import axios from "axios";
import NavBarPatient from "../components/NavBarPatient";
import TableSchedule from "../components/TableSchedule";
import TableScheduleReschedule from "../components/TableScheduleReschedule";


function RescheduleAppointment(){

    const {usernamePatient, usernameDoctor, appID, type} = useParams();
    const[resultPatient, setResultPatient] = useState('');
    const[resultDoctor, setResultDoctor] = useState('');


    useEffect(() => {
      if(type==='patient'){
  const response = axios.get(`http://localhost:4000/Patient/viewDoctorInfo/${usernameDoctor}/${usernamePatient}`,{
    headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
  })
  .then(res =>setResultPatient(res.data)).catch(err => console.log(err))
      }else{
      const response = axios.get(`http://localhost:4000/Doctor/allAvailableTimeSlots/${usernameDoctor}`,{
        headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
      })
      .then(res =>setResultDoctor(res.data)).catch(err => console.log(err))
 } }, [])

  console.log('result patient',resultPatient);
  console.log('result doctor',resultDoctor)


  // const handleRemove=() => {
  //   const response = axios.delete(`http://localhost:8000/Admin/RemovePatientOrPharmacist/${username}`)
  // .then(res =>setResultDelete(res.data)).catch(err => console.log(err))
  // }
  // console.log(resultDelete)

//   result.map((e) => {
//     console.log(e)
//   })
let tHead = ['Date', 'Time', 'Status', 'Book'];

    return (
        <div>
        <NavBarPatient username={usernamePatient}/>
        <h1>Available Appointments: </h1>
        {type==='patient'&& resultPatient  &&    <TableScheduleReschedule tHead={tHead} data={resultPatient.AvailableTimeSlots} appID={appID} patientUsername={usernamePatient} doctorUsername={usernameDoctor} type={type}/>}
        {type==='doctor' && resultDoctor &&   <TableScheduleReschedule tHead={tHead} data={resultDoctor} appID={appID} patientUsername={usernamePatient} doctorUsername={usernameDoctor} type={type}/>}

        </div>
    )
    }
    export default RescheduleAppointment;