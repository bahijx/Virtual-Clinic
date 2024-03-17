import { useNavigate } from 'react-router-dom';
import Form from '../components/Form.jsx';
import Validation from '../validate/validate.js';
import NavBar from '../components/NavBar.jsx';
import { useState } from 'react';
import axios from 'axios';
import MainBtn from '../components/Button.jsx';
import Input from '../components/Input.jsx';

function RegisterPatient() {
  const [name, setName] = useState('')
  const [nationalID, setNationalID] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [gender, setGender] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [emergencyName, setEmergencyName] = useState('')
  const [emergencyMobile, setEmergencyMobile] = useState('')
  const [emergencyRelation, setEmergencyRelation] = useState('')
  let navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const data = { Username: username, 
      Name: name, 
      NationalID: nationalID,
      Email: email,
      Password: password, 
      DateOfBirth: dateOfBirth, 
      Gender: gender, 
      MobileNumber: mobileNumber, 
      EmergencyContactName: emergencyName,
      EmergencyContactMobile: emergencyMobile,
      EmergencyContactRelation:emergencyRelation}
    console.log(data)
    const response = await axios.post('http://localhost:4000/Patient/registerPatient', data)
    
        if (response.status === 200) {
          alert(`Registered successfully`);
          console.log(response.data.message);
          navigate(`/login`);
        } else {
          alert(`Failed to register. Status: ${response.status}`);
        }
      } catch (error) {
        alert(`Failed to register. Error: ${error.message}`);
        console.error('Error accepting request:', error);
      }
  }
  return (
    <div>
      <NavBar />
      {/* <form onSubmit={handleSubmit}>
        <h3>
          <label>Name</label>
          <input title='name' required placeholder='Name...' type='text' onChange={(e) => setName(e.target.value)} />
        </h3>
        <h3>
          <label>National ID</label>
          <input title='name' required placeholder='National ID...' type='text' onChange={(e) => setNationalID(e.target.value)} />
        </h3>
        <h3>
          <label>Username</label>
          <input type="text" required title="Username" placeholder="Username..." onChange={(e) => setUsername(e.target.value)} />
        </h3>
        <h3>
          <label>Email</label>
          <input type="email" required title="Email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
        </h3>
        <h3>
          <label>Password</label>
          <input type="password" required title="Password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
        </h3>
        <h3>
          <label>Date Of Birth</label>
          <input type="date" required title="Date Of Birth" placeholder="Date Of Birth..." onChange={(e) => setDateOfBirth(e.target.value)} />
        </h3>
        <h3>
          <label>Gender</label>
          <input type="text" required title="Gender" placeholder="Gender..." onChange={(e) => setGender(e.target.value)} />
        </h3>
        <h3>
          <label>Mobile Number</label>
          <input type="text" required title="Mobile Number" placeholder="Mobile Number..." onChange={(e) => setMobileNumber(e.target.value)} />
        </h3>
        <h3>
          <label>Emergency Contact Name</label>
          <input type="text" required title="Emergency Contact Name" placeholder="Emergency Contact Name..." onChange={(e) => setEmergencyName(e.target.value)} />
        </h3>
        <h3>
          <label>Emergency Contact Mobile Number</label>
          <input type="text" required title="Emergency Contact Mobile" placeholder="Emergency Contact Mobile..." onChange={(e) => setEmergencyMobile(e.target.value)} />
        </h3>
        <h3>
          <button type="submit">Submit</button>
        </h3>
      </form> */}
      <form
        className="d-flex justify-content-center"
        onSubmit={handleSubmit}
      >
      <div style={{ width: '35%' }} className="form-width">
          <p className="text-capitalize fs-4">Register As Patient</p>
          <Input
            title='Name'
            required={true}
            placeholder='Enter name'
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            title='National ID'
            required={true}
            placeholder='Enter national id'
            type='text'
            onChange={(e) => setNationalID(e.target.value)}
          />
          <Input
            title='Username'
            required={true}
            placeholder='Enter username'
            type='text'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            title='Email'
            required={true}
            placeholder='Enter email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            title='Password'
            required={true}
            placeholder='Enter password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            title='Date Of Birth'
            required={true}
            placeholder='Enter date'
            type='date'
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <Input
            title='Gender'
            required={true}
            placeholder='Enter gender'
            type='text'
            onChange={(e) => setGender(e.target.value)}
          />
          <Input
            title='Mobile Number'
            required={true}
            placeholder='Enter mobile number'
            type='text'
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <Input
            title='Emergency Contact Full Name'
            required={true}
            placeholder='Enter emergency contact full name'
            type='text'
            onChange={(e) => setEmergencyName(e.target.value)}
          />
          <Input
            title='Emergency Contact Mobile Number'
            required={true}
            placeholder='Enter emergency contact mobile number'
            type='text'
            onChange={(e) => setEmergencyMobile(e.target.value)}
          />
          <Input
            title='Emergency Contact Relation to Patient'
            required={true}
            placeholder='Enter emergency contact relation'
            type='text'
            onChange={(e) => setEmergencyRelation(e.target.value)}
          />
         
          <div className="mt-3">
            <MainBtn
              txt='Submit'
              type="submit"
              style='green-btn'
              //action={handleSubmit}

            />
          </div>

        </div>
      </form>
    </div>
  );
}
export default RegisterPatient;
