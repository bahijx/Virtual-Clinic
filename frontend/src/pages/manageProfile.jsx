import { useState, useEffect } from "react";
import NavBarAdministrator from "../components/NavBarAdministrator";
import { useParams} from 'react-router-dom';
import axios from "axios";
import NavBarDoctor from "../components/NavBarDoctor";
import MainBtn from "../components/Button";
import Contract from '../components/Contract'; 
import Form from '../components/Form.jsx';
import Validation from '../validate/validate';
import { useNavigate } from 'react-router-dom';
import TableNotifications from "../components/TableNotifications";
import Input from "../components/Input.jsx";


function ManageProfile(){

    const {username} = useParams();
    const[result, setResult] = useState([]);
    const [email, setEmail] = useState('');
    const [hourlyrate, setHourlyRate] = useState(0);
    const [affiliation, setAffiliation] = useState('');
    const [date, setDate] = useState('');
    const [from, setFrom] = useState(0);



    let navigate = useNavigate()

    console.log('date format', date)
const handleAddAppointment = (e) => {
  e.preventDefault();
  if(date && from){
  const data = {date: date, time:from}
 // try{
    const response = axios.post(`http://localhost:4000/Doctor/addAvailableTimeSlots/${username}`, data, {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
    .then(res =>alert('added')).catch(err => alert('error'))
  }
      // if (response.status === 200) {
      //       alert(response.data.message);
      //         console.log(response.data.message);
      //     }}
      //     catch(error ){
      //       alert(`Failed to add appointment `);
      //       console.error('Error:', error);
      //     };
         // window.location.reload(true); 
window.location.reload(true)
}


    
  const updateEmail=(e) => {
    e.preventDefault();
    const response = axios.put(`http://localhost:4000/Doctor/updateDoctorByEmail/${username}`, {Email:email},
    {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
    .then(res => {
      setResult(res.data);
      alert('Email updated successfully.');
    })
    .catch(err => {
      console.log(err);
      alert('Failed to update email.');
    });
    console.log(result)
  }
  const updateHourlyRate=(e) => {
    e.preventDefault();
    const response = axios.put(`http://localhost:4000/Doctor/updateDoctorByHourlyRate/${username}`, {HourlyRate:hourlyrate},{
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
    .then(res => {
      setResult(res.data);
      alert('Hourly rate updated successfully.');
    })
    .catch(err => {
      console.log(err);
      alert('Failed to update hourly rate.');
    });
      console.log(result)
  }
  const updateAffiliation=(e) => {
    e.preventDefault();
    const response = axios.put(`http://localhost:4000/Doctor/updateDoctorByAffiliation/${username}`, {Affiliation:affiliation},{
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
    .then(res => {
      setResult(res.data);
      alert('Affiliation updated successfully.');
    })
    .catch(err => {
      console.log(err);
      alert('Failed to update affiliation.');
    });  console.log(result)
  }

 
    return (
        <div>
        <NavBarDoctor username={username}/>

<form className="d-flex justify-content-center">
        <div style={{ width: '30%' }} className="form-width">
          <p className="text-capitalize fs-4">Update Email</p>

          <Input
            title='Email'
            placeholder='enter email'
            type='email'
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="mt-3">
            <MainBtn
              txt='save'
              style='green-btn'
              action={updateEmail}
            />
          </div>
        </div>
</form> 
<form className="d-flex justify-content-center">
        <div style={{ width: '30%' }} className="form-width">
          <p className="text-capitalize fs-4">Update Affiliation</p>

          <Input
            title='Affiliation'
            placeholder='enter affiliation'
            type='text'
            required={true}
            onChange={(e) => setAffiliation(e.target.value)}
          />

          <div className="mt-3">
            <MainBtn
              txt='save'
              style='green-btn'
              action={updateAffiliation}
            />
          </div>
        </div>
</form>
<form className="d-flex justify-content-center">
        <div style={{ width: '30%' }} className="form-width">
          <p className="text-capitalize fs-4">Update Hourly Rate</p>

          <Input
            title='Hourly Rate'
            placeholder='enter hourly rate'
            type='number'
            required={true}
            onChange={(e) => setHourlyRate(e.target.value)}
          />

          <div className="mt-3">
            <MainBtn
              txt='save'
              style='green-btn'
              action={updateHourlyRate}
            />
          </div>
        </div>
</form>
<form className="d-flex justify-content-center">
        <div style={{ width: '30%' }} className="form-width">
          <p className="text-capitalize fs-4">Add New Appointment Slot</p>

          <Input
            title='Date'
            type='date'
            required={true}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            title='Time'
            placeholder='enter time'
            type='number'
            required={true}
            onChange={(e) => setFrom(e.target.value)}
          />

          <div className="mt-3">
            <MainBtn
              txt='Add Slot'
              style='green-btn'
              action={handleAddAppointment}
            />
          </div>
        </div>
</form>
      
        </div>
    )
    }
export default ManageProfile;