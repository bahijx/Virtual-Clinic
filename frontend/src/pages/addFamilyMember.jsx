import { useNavigate, useParams } from 'react-router-dom';
import Form from '../components/Form.jsx';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../features/login.js';
import Validation from '../validate/validate';
import NavBarAdministrator from '../components/NavBarAdministrator.jsx';
import { useState } from 'react';
import axios from 'axios'
import NavBarPatient from '../components/NavBarPatient.jsx';
import Input from '../components/Input.jsx';
import MainBtn from '../components/Button.jsx';

function AddFamilyMember() {
  // let { errors, handleSubmit, register } = Validation('username')
  // let c = (data) => {
  //   console.log(data);
  // }
  // let inputArr = [
  //   { title: 'username', placeholder: 'enter username', type: 'username', showErr: errors.username?.message, register: register("username"),  },
  //   { title: 'password', placeholder: 'enter password', type: 'password', showErr: errors.password?.message, register: register("password") },
  // ];
  // let btnArr = [
  //   {
  //     title: 'Add Administrator',
  //     style: 'green-btn',
  //     action: handleSubmit(),
  //   },
  // ];
  const navigate = useNavigate();
  const {username} = useParams()

  const [name, setName] = useState('');
  const [nationalID, setNationalID] = useState('');
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('')
  const [relationToPatient, setRelationToPatient] = useState('');
  const [relationToPatientLink, setRelationToPatientLink] = useState('');
  const [email, setEmail] = useState('')




  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {Name:name, NationalID:nationalID, Age:age, Gender:gender, RelationToPatient:relationToPatient}
    console.log(data)
    const response = axios.post(`http://localhost:4000/Patient/addFamMember/${username}`, data,{
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
.then(res =>{alert("Family Member added successfully"); navigate(`familyMembersList/${username}`)}).catch(err => console.log(err))
  }
  const handleSubmitLink = (e) => {
    e.preventDefault();
    const data = {Email:email, RelationToPatient:relationToPatientLink}
    console.log(data)
    const response = axios.post(`http://localhost:4000/Patient/linkPatientAccountAsFam/${username}`, data, {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
.then(res =>{alert('Added successfully'); navigate(`familyMembersList/${username}`)}).catch(err => alert(err))
  }

  return (
    <div>
      <NavBarPatient username={username}/>

    <form
        className="d-flex justify-content-center"
      >
        <div style={{ width: '30%' }} className="form-width">
          <p className="text-capitalize fs-4">Add Family Member</p>

          <Input
            title='Name'
            placeholder='enter family member name'
            type='text'
            required={true}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            title='National ID'
            placeholder='enter national id'
            type='text'
            required={true}
            onChange={(e) => setNationalID(e.target.value)}
          />
          <Input
            title='Age'
            placeholder='enter age'
            type='number'
            required={true}
            onChange={(e) => setAge(e.target.value)}
          />
          <Input
            title='Gender'
            placeholder='enter gender'
            type='text'
            required={true}
            onChange={(e) => setGender(e.target.value)}
          />
          <Input
            title='Relation To Patient'
            placeholder='enter relation to patient'
            type='text'
            required={true}
            onChange={(e) => setRelationToPatient(e.target.value)}
          />

          <div className="mt-3">
            <MainBtn
              txt='save'
              style='green-btn'
              action={handleSubmit}
            />
          </div>
        </div>
      </form>
      <form
        className="d-flex justify-content-center"
      >
        <div style={{ width: '30%' }} className="form-width">
          <p className="text-capitalize fs-4">Link Patient as Family Member</p>

          <Input
            title='Email'
            placeholder='enter family member email'
            type='email'
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
         <Input
            title='Relation To Patient'
            placeholder='enter relation to patient'
            type='text'
            required={true}
            onChange={(e) => setRelationToPatientLink(e.target.value)}
          />


          <div className="mt-3">
            <MainBtn
              txt='save'
              style='green-btn'
              action={handleSubmitLink}
            />
          </div>
        </div>
      </form>
      </div>
  );
}
export default AddFamilyMember;
