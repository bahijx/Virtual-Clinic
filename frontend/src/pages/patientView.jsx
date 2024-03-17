import NavBarPatient from "../components/NavBarPatient";
import DoctorsList from "../components/DoctorsList";
import MainBtn from "../components/Button";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import TableHealthRecords from "../components/TableHealthRecords";
import TableNotifications from "../components/TableNotifications";

function PatientView() {
  const navigate = useNavigate();
  const { username } = useParams();
  // const [healthRecord, setHealthRecord] = useState([]);


  // let tHead = ['Date', 'Description', 'Diagnosis', 'Medication'];

  // useEffect(() => {
  //   const response = axios.get(`http://localhost:4000/Patient/viewHealthRecords/${username}`,{
  //     headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
  //   })
  //     .then(res => setHealthRecord(res.data.healthRecords)).catch(err => console.log(err))
  // }, [])
  // console.log(healthRecord);

  return (
    <div>
      <NavBarPatient username={username} />
      <DoctorsList />

    </div>
  );
}

export default PatientView;
