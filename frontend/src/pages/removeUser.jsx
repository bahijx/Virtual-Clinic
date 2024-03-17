
import NavBarAdministrator from '../components/NavBarAdministrator.jsx';
import { useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router';
import MainBtn from '../components/Button.jsx';
import Input from '../components/Input.jsx';

function RemoveUser() {
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
  const [usernameAdmin, setUsernameAdmin] = useState('')
  const [usernamePatient, setUsernamePatient] = useState('')
  const [usernameDoctor, setUsernameDoctor] = useState('')
  const {username} = useParams();


console.log("p u", usernamePatient)
  const handleSubmitAdmin = (e) => {
    e.preventDefault();
    const response = axios.delete(`http://localhost:4000/Admin/deleteEntity/${username}/admin/${usernameAdmin}`,{
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
    .then(res =>{
      alert("Admin Removed")
      window.location.reload(true);

    }).catch(err => alert(err))
  }

  const handleSubmitPatient = (e) => {
    e.preventDefault();

    const response = axios.delete(`http://localhost:4000/Admin/deleteEntity/${username}/patient/${usernamePatient}`,{
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
    .then(res =>{
      alert("Patient Removed")
      window.location.reload(true);

    }).catch(err =>{   
    console.log("dakhalt")
    alert(err)}
    )
  }

  const handleSubmitDoctor = (e) => {
    e.preventDefault();

    const response = axios.delete(`http://localhost:4000/Admin/deleteEntity/${username}/doctor/${usernameDoctor}`,{
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
    .then(res =>{
      alert("Doctor Removed")
      window.location.reload(true);

    }).catch(err => alert(err))

  }

  return (
    <div>
      <NavBarAdministrator username={username}/>

<form
        className="d-flex justify-content-center"
        onSubmit={handleSubmitAdmin}
      >
        <div style={{ width: '30%' }} className="form-width">
          <p className="text-capitalize fs-4">Remove Admin</p>

          <Input
            title='Username'
            required={true}
            placeholder='Enter admin username'
            type='text'
            onChange={(e) => setUsernameAdmin(e.target.value)}
          />
         
          <div className="mt-3">
            <MainBtn
              txt='Remove'
              type="submit"
              style='green-btn'
              //action={handleSubmit}

            />
          </div>

        </div>
      </form>

      <form
        className="d-flex justify-content-center"
        onSubmit={handleSubmitDoctor}
      >
        <div style={{ width: '30%' }} className="form-width">
          <p className="text-capitalize fs-4">Remove Doctor</p>

          <Input
            title='Username'
            required={true}
            placeholder='Enter doctor username'
            type='text'
            onChange={(e) => setUsernameDoctor(e.target.value)}
          />
         
          <div className="mt-3">
            <MainBtn
              txt='Remove'
              type="submit"
              style='green-btn'
              //action={handleSubmit}

            />
          </div>

        </div>
      </form>

      <form
        className="d-flex justify-content-center"
        onSubmit={handleSubmitPatient}
      >
        <div style={{ width: '30%' }} className="form-width">
          <p className="text-capitalize fs-4">Remove Patient</p>

          <Input
            title='Username'
            required={true}
            placeholder='Enter patient username'
            type='text'
            onChange={(e) => setUsernamePatient(e.target.value)}
          />
         
          <div className="mt-3">
            <MainBtn
              txt='Remove'
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
export default RemoveUser;
