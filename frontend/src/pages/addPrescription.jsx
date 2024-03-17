import { useNavigate, useParams } from 'react-router-dom';
import Form from '../components/Form.jsx';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../features/login.js';
import Validation from '../validate/validate';
import NavBarAdministrator from '../components/NavBarAdministrator.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios'
import NavBarPatient from '../components/NavBarPatient.jsx';
import Input from '../components/Input.jsx';
import MainBtn from '../components/Button.jsx';
import NavBarDoctor from '../components/NavBarDoctor.jsx';
import TableMedicines from '../components/TableMedicines.jsx';
// import Patient from '../../../backend/src/Models/Patient.js';


function AddPrescription() {

  const { username, PatientUsername } = useParams();
  const [description, setDescription] = useState('');
  const [prescriptionId, setPrescriptionId] = useState('');

  const [date, setDate] = useState('');
  const [dose, setDose] = useState(0);
  const [medicines, setMedicines] = useState([]);
  let tHead = ['Medicine Name'];

  const navigate = useNavigate();

  console.log(username);
  console.log(PatientUsername);

  // useEffect(() => {
  //     const response = axios.get(`http://localhost:4000/Doctor/getAllMedicinesFromPharmacy/${username}`, {
  //       headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
  //     })
  //     .then(res =>setData(res)).catch(err => console.log(err))
  //       }, [])


  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const data = { description};
  //     console.log(data);

  //     try {
  //         const response = await axios.post(
  //             `http://localhost:4000/Doctor/addPatientPrescription/${username}/${PatientUsername}`,
  //             data,
  //             {
  //                 headers: { authorization: 'Bearer ' + sessionStorage.getItem('token') },
  //             }
  //         );

  //         alert('Prescription added successfully.');
  //         navigate(`/updatePrescription/${username}/${PatientUsername}`);
  //         console.log(response.data);
  //     } catch (error) {
  //         console.error('Error adding prescription:', error.response?.data || error.message);
  //         alert('Error adding prescription. Please check console for details.');
  //     }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('desc', description)
    const data = { description: description };
    const response = axios.post(`http://localhost:4000/Doctor/addPatientPrescription/${username}/${PatientUsername}`, data, {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token") },
    }).then(res => {
       //setPrescriptionId(res.data.prescription._id);
      console.log("id", prescriptionId); 
      console.log("data", res.data.prescription._id); 
      alert('Prescription Added successfully'); 
      navigate(`/updatePrescription/${username}/${PatientUsername}/${res.data.prescription._id}/${'add'}`);
     })
     .catch(err => alert(err))
  }

  return (
    <div>
      <NavBarDoctor username={username} />

      {/* <Form title="Add Administrator" inputArr={inputArr} type="addAdministrator" btnArr={btnArr} /> */}
      {/* <form
        className="d-flex justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="form-width">
          <p className="text-capitalize fs-4">Add Prescription</p>
          <Input
            title='Description'
            required={true}
            placeholder='Enter Description'
            type='text'
            onChange={(e) => setDescription(e.target.value)}
          />
         
          <div className="mt-3">
            <MainBtn
              txt='submit'
              type="submit"
              style='green-btn'
              //action={handleSubmit}

            />
          </div>

        </div>
      </form> */}
      <h1>Add Prescription</h1>
      <form className="d-flex justify-content-center">
        <div style={{ width: "30%" }} className="form-width">
          <p className="text-capitalize fs-4 mb-3"></p>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              rows={3}
              className="form-control"
              placeholder='Description'
              //value={updatedDescription}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <MainBtn
              txt='Save'
              style='green-btn'
              action={handleSubmit}
            />
          </div>
        </div>
      </form>

      {/* <form onSubmit={handleSubmit}>
                <h2>Add Prescription</h2>
                <h3><input required placeholder='Description' type='text' onChange={(e) => setDescription(e.target.value)} /></h3>
                <h3><input required placeholder='Date' type='date' onChange={(e) => setDate(e.target.value)} /></h3> */}

      {/* Dropdown list of appointments */}
      {/* <h3>
                    <select value={appointmentID} onChange={(e) => setAppointmentID(e.target.value)}>
                        <option value="">Select an appointment</option>
                        {appointments.map((appointment) => (
                            <option key={appointment._id} value={appointment._id}>
                                {appointment.Name} / {appointment.Date}
                            </option>
                        ))}
                    </select>
                </h3> */}

      {/* <h3><button type="submit">Submit</button></h3>
            </form> */}

    </div>
  );
}
export default AddPrescription;
