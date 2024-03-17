import { useNavigate } from 'react-router-dom';
import Input from '../components/Input.jsx';
import MainBtn from '../components/Button.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import NavBar from '../components/NavBar.jsx';


function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); 
  
  const handleLogin = async (event) => {
    event.preventDefault(); 
    console.log('uuu', username);
    console.log('ppp', password);
    try {
      const response = await axios.post('http://localhost:4000/login', { username: username, password: password });
      if (response.data.userDoctor) {
        sessionStorage.setItem("token", response.data.userDoctor.accessToken);
        navigate(`/doctorView/${username}`);
      } else if (response.data.userPatient) {
        sessionStorage.setItem("token", response.data.userPatient.accessToken);
        navigate(`/patientView/${username}`);
      } else if (response.data.userAdmin) {
        sessionStorage.setItem("token", response.data.userAdmin.accessToken);
        navigate(`/administratorView/${username}`);
      } else {
        console.error('User role not recognized');
        alert("User role not recognized");
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      alert(error.response ? error.response.data.error : error.message);
    }
  };

  return (
    <div>
      <NavBar />
      <form
      className="d-flex justify-content-center"
    >
      <div className="form-width">
        <p className="text-capitalize fs-4">Login</p>
 
        <Input
        title='username' 
        placeholder='enter your username'
        type='text'
        onChange={(e) => setUsername(e.target.value)}
      />
          <Input
            title='password'
            placeholder='enter your password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-3">
            <MainBtn
              txt='login'
              style='green-btn'
              action={handleLogin}
              
            />
          </div>

        <p className="text-center mt-3 small-txt">
            <>
              Forgot Password?
              <Link to="/forgotpassword" className="green-txt">
                {' '}
                Reset Password
              </Link>
            </>
        </p>
      </div>
    </form>
    </div>
    
  );
}
export default Login;