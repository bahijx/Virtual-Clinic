import { useNavigate } from 'react-router-dom';
import Form from '../components/Form.jsx';
import Validation from '../validate/validate.js';
import NavBar from '../components/NavBar.jsx';
import { useState } from 'react';
import axios from 'axios';
import Input from '../components/Input.jsx';
import MainBtn from '../components/Button.jsx';

function RegisterDoctor() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [hourlyRate, setHourlyRate] = useState(0)
  const [affiliation, setAffiliation] = useState('')
  const [EDB, setEDB] = useState('')
  const [speciality, setSpeciality] = useState('')
  const [IDDocument, setIDDocument] = useState('');
  const [MedicalDegreeDocument, setMedicalDegreeDocument] = useState('');
  const [WorkingLicenseDocument, setWorkingLicenseDocument] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();

      // Append other form fields
      data.append('Name', name);
      data.append('Username', username);
      data.append('Email', email);
      data.append('Password', password);
      data.append('DateOfBirth', dateOfBirth);
      data.append('HourlyRate', hourlyRate);
      data.append('Affiliation', affiliation);
      data.append('EDB', EDB);
      data.append('Speciality', speciality);

      // Append file uploads
      data.append('IDDocument', IDDocument);
      data.append('MedicalDegreeDocument', MedicalDegreeDocument);
      data.append('WorkingLicenseDocument', WorkingLicenseDocument);

      console.log(data);

      const response = await axios.post(
        'http://localhost:4000/GuestDoctor/Register',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

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
  };

  return (
    <div>
      <NavBar />
      {/* <Form
        title="create account"
        inputArr={inputArr}
        btnArr={btnArr}
        type="register"
      /> */}
      {/* <form onSubmit={handleSubmit}>
        <h3>
          <label>Name</label>
          <input title='name' required placeholder='enter name' type='text' onChange={(e) => setName(e.target.value)} />
        </h3>
        <h3>
          <label>Username</label>
          <input type="text" required title="Username" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
        </h3>
        <h3>
          <label>Email</label>
          <input type="email" required title="Email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
        </h3>
        <h3>
          <label>Password</label>
          <input type="password" required title="Password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
        </h3>
        <h3>
          <label>Date Of Birth</label>
          <input type="date" required title="Date Of Birth" placeholder="Enter Date Of Birth" onChange={(e) => setDateOfBirth(e.target.value)} />
        </h3>
        <h3>
          <label>Hourly Rate</label>
          <input type="number" required title="Hourly Rate" placeholder="Enter Hourly Rate" onChange={(e) => setHourlyRate(e.target.value)} />
        </h3>
        <h3>
          <label>Affiliation</label>
          <input type="text" required title="Affiliation" placeholder="Enter Affiliation" onChange={(e) => setAffiliation(e.target.value)} />
        </h3>
        <h3>
          <label>Educational Background</label>
          <input type="text" required title="Educational Background" placeholder="Enter Educational Background" onChange={(e) => setEDB(e.target.value)} />
        </h3>
        <h3>
          <label>Speciality</label>
          <input type="text" required title="Speciality" placeholder="Enter Speciality" onChange={(e) => setSpeciality(e.target.value)} />
        </h3>
        <h3>
          <label>ID</label>
          <input type="file" required title="IDDocument" onChange={(e) => setIDDocument(e.target.files[0])} />
        </h3>
        <h3>
          <label>Medical Degree</label>
          <input type="file" required title="PharmacyDegreeDocument" onChange={(e) => setMedicalDegreeDocument(e.target.files[0])} />
        </h3>
        <h3>
          <label>Working License</label>
          <input type="file" required title="WorkingLicenseDocument" onChange={(e) => setWorkingLicenseDocument(e.target.files[0])} />
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
          <p className="text-capitalize fs-4">Register As Doctor</p>
          <Input
            title='Name'
            required={true}
            placeholder='Enter name'
            type='text'
            onChange={(e) => setName(e.target.value)}
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
            title='Hourly Rate'
            required={true}
            placeholder='Enter hourly rate'
            type='number'
            onChange={(e) => setHourlyRate(e.target.value)}
          />
          <Input
            title='Affiliation'
            required={true}
            placeholder='Enter affiliation'
            type='text'
            onChange={(e) => setAffiliation(e.target.value)}
          />
          <Input
            title='Educational Background'
            required={true}
            placeholder='Enter educational background'
            type='text'
            onChange={(e) => setEDB(e.target.value)}
          />
          <Input
            title='Speciality'
            required={true}
            placeholder='Enter speciality'
            type='text'
            onChange={(e) => setSpeciality(e.target.value)}
          />
          <Input
            title='ID'
            required={true}
            placeholder='Enter ID'
            type='file'
            name='IDDocument' // Add this line
            onChange={(e) => setIDDocument(e.target.files[0])}
          />
          <Input
            title='Medical Degree'
            required={true}
            placeholder='Enter Medical degree document'
            type='file'
            name='MedicalDegreeDocument' // Add this line
            onChange={(e) => setMedicalDegreeDocument(e.target.files[0])}
          />
          <Input
            title='Working License'
            required={true}
            placeholder='Enter working license'
            type='file'
            name='WorkingLicenseDocument' // Add this line
            onChange={(e) => setWorkingLicenseDocument(e.target.files[0])}
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
export default RegisterDoctor;
