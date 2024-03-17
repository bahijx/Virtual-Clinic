import { useState, useEffect } from "react";
import NavBarAdministrator from "../components/NavBarAdministrator";
import { useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
import NavBar from "../components/NavBarDoctor";
import TableHealthRecords from "../components/TableHealthRecords";
import NavBarDoctor from "../components/NavBarDoctor";
import MainBtn from "../components/Button";
import Input from "../components/Input";


function HealthRecordsInfo(){

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

    const handleSubmit = () => {
      const data = {Date:healthRecordDate, Description:healthRecordDescription, Diagnosis:healthRecordDiagnosis, Medication:healthRecordMedication}
      console.log(data)
      const response = axios.post(`http://localhost:4000/Doctor/addHealthRecord/${usernameDoctor}/${usernamePatient}`, data, {
        headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
      })
      .then(res =>setResultAdd(res)).catch(err => console.log(err))
    }

    const handleSubmit1 = () => {
      const data = {date:date, time:time}
      console.log(data)
      const response = axios.post(`http://localhost:4000/Doctor/scheduleFollowUp/${usernameDoctor}/${usernamePatient}`, data, {
        headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
      })
      .then(res =>setResultAdd(res)).catch(err => console.log(err))
    }

    useEffect(() => {
  const response = axios.get(`http://localhost:4000/Doctor/viewInfoAndRecords/${usernameDoctor}/${usernamePatient}`, {
    headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
  })
  .then(res =>setResult(res.data)).catch(err => console.log(err))
    }, [])
    console.log(result);
    useEffect(() => {
      const response = axios.get(`http://localhost:4000/Doctor/viewHealthRecords/${usernameDoctor}/${usernamePatient}`, {
        headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
      })
      .then(res =>setHealthRecord(res.data.healthRecords)).catch(err => console.log(err))
        }, [])
    console.log(healthRecord);
   // console.log('heeeee', healthRecord);
    
    //console.log('resultttt adddd', resultAdd)


  // console.log('recordssss',result.PatientPrescriptions);
  // if(result.HealthRecords){
  //   console.log('hhhhhhh')
  // }
  // {result.HealthRecords.map((e) => {
  //   setDate(e.Date)

  //   })} 
    let tHead = ['Date', 'Description', 'Diagnosis', 'Medication'];

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
    {/* <form>
    <h1>
      Add new health records
    </h1> 
    <h3><input  type= 'date' placeholder="Date" onChange={(e) => setHealthRecordDate(e.target.value)} /> </h3>
    <h3><input  type= 'text' placeholder="Description" onChange={(e) => setHealthRecordDescription(e.target.value)} /></h3>
    <h3><input  type= 'text' placeholder="Diagnosis" onChange={(e) => setHealthRecordDiagnosis(e.target.value)} /></h3>
    <h3><input  type= 'text' placeholder="Medication" onChange={(e) => setHealthRecordMedication(e.target.value)} /></h3>
    <button onClick={handleSubmit}>Add Health Records</button>
  </form> */}
  <form
        className="d-flex justify-content-center"
        onSubmit={handleSubmit}
      >
      <div style={{ width: '35%' }} className="form-width">
          <p className="text-capitalize fs-4">Add New Health Record</p>
          <Input
            title='Date'
            required={true}
            placeholder='Enter date'
            type='date'
            onChange={(e) => setHealthRecordDate(e.target.value)}
          />
          <Input
            title='Description'
            required={true}
            placeholder='Enter description'
            type='text'
            onChange={(e) => setHealthRecordDescription(e.target.value)}
          />
          <Input
            title='Diagnosis'
            required={true}
            placeholder='Enter diagnosis'
            type='text'
            onChange={(e) => setHealthRecordDiagnosis(e.target.value)}
          />
          <Input
            title='Medication'
            required={true}
            placeholder='Enter medication'
            type='text'
            onChange={(e) => setHealthRecordMedication(e.target.value)}
          />
         
          <div className="mt-3">
            <MainBtn
              txt='Add Health Record'
              type="submit"
              style='green-btn'
              //action={handleSubmit}

            />
          </div>

        </div>
      </form>
      <h1>Health Records </h1>
      <TableHealthRecords tHead={tHead} data={healthRecord} /> 

        </div>
    )
    }
    export default HealthRecordsInfo;