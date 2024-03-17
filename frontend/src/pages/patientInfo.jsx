import { useState, useEffect } from "react";
import NavBarAdministrator from "../components/NavBarAdministrator";
import { useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
import NavBar from "../components/NavBarDoctor";
import TableHealthRecords from "../components/TableHealthRecords";
import NavBarDoctor from "../components/NavBarDoctor";
import MainBtn from "../components/Button";
import Input from "../components/Input";


function PatientInfo(){

    const {usernameDoctor, usernamePatient} = useParams();
    let navigate = useNavigate();
    const[result, setResult] = useState([]);
    const[resultAdd, setResultAdd] = useState([]);
    const [date, setDate] = useState('');
    const [time, setTime] = useState(0);
    const [healthRecord, setHealthRecord] = useState([]);
    const [healthRecordDate, setHealthRecordDate] = useState('');
    const [healthRecordDescription, setHealthRecordDescription] = useState('');
    const [healthRecordDiagnosis, setHealthRecordDiagnosis] = useState('');
    const [healthRecordMedication, setHealthRecordMedication] = useState('');


    const handleSubmit1 = (e) => {
      e.preventDefault();
      const data = {date:date, time:time}
      console.log(data)
      const response = axios.post(`http://localhost:4000/Doctor/scheduleFollowUp/${usernameDoctor}/${usernamePatient}`, data, {
        headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
      })
      .then(res =>{alert("Follow-Up Scheduled"); window.location.reload(true)}).catch(err => console.log(err))
    }

    useEffect(() => {
  const response = axios.get(`http://localhost:4000/Doctor/viewInfoAndRecords/${usernameDoctor}/${usernamePatient}`, {
    headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
  })
  .then(res =>setResult(res.data)).catch(err => console.log(err))
    }, [])
    console.log(result);

   // console.log('heeeee', healthRecord);
    
    //console.log('resultttt adddd', resultAdd)


  // console.log('recordssss',result.PatientPrescriptions);
  // if(result.HealthRecords){
  //   console.log('hhhhhhh')
  // }
  // {result.HealthRecords.map((e) => {
  //   setDate(e.Date)

  //   })} 

  // const handleRemove=() => {
  //   const response = axios.delete(`http://localhost:4000/Admin/RemovePatientOrPharmacist/${username}`)
  // .then(res =>setResultDelete(res.data)).catch(err => console.log(err))
  // }
  // console.log(resultDelete)

//   result.map((e) => {
//     console.log(e)
//   })

    return (
        <div>
        <NavBarDoctor username={usernameDoctor}/>
        <div className="d-flex justify-content-end flex-row">
      <div className="input-group w-25">
      <MainBtn
              txt="Health Records"
              style="green-btn"
              action={() => navigate(`/healthRecordsInfo/${usernameDoctor}/${usernamePatient}`)}
              key="navBtn"
    />
    </div>
    </div>
    <h1>Patient Info</h1>

<div className="d-flex justify-content-left">
        <ul >
            <h3>Name : {result.Name}</h3>
            <h3>Username : {result.Username}</h3>
            <h3>Email : {result.Email}</h3>
            <h3>Date of Birth : {result.DateOfBirth && result.DateOfBirth.substring(0,10)}</h3>
            <h3>Gender : {result.Gender}</h3>
            <h3>Mobile Number : {result.MobileNumber}</h3>
        </ul>
        <ul>
            <h2>Emergency Contact : </h2>
            <h3>Name : {result.EmergencyContactName}</h3>
            <h3>Mobile Number : {result.EmergencyContactMobile}</h3>
        </ul>
        </div>
    {/* <form>
    <h1>
      Schedule Follow-up
    </h1>
    <h3>
    <input  type= 'date'  onChange={(e) => setDate(e.target.value)} />
    </h3>
    <h3>
    <input  type= 'number' placeholder="Time" onChange={(e) => setTime(e.target.value)} />
    </h3>
    <button onClick={handleSubmit1}>Add Appointment</button>
  </form> */}
  <form
        className="d-flex justify-content-left"
        onSubmit={handleSubmit1}
      >
      <div style={{ width: '35%' }} className="form-width">
          <p className="text-capitalize fs-4">Schedule Follow-Up</p>
          <Input
            title='Date'
            required={true}
            placeholder='Enter date'
            type='date'
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            title='Time'
            required={true}
            placeholder='Enter time'
            type='number'
            onChange={(e) => setTime(e.target.value)}
          />
         
          <div className="mt-3">
            <MainBtn
              txt='Add Appointment'
              type="submit"
              style='green-btn'
              //action={handleSubmit}

            />
          </div>

        </div>
      </form>
        </div>
    )
    }
    export default PatientInfo;