import MainBtn from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';

function NavBarPatient(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [wallet, setWallet] = useState('');
  const login = useSelector((state) => state.login.loggedIn);
  
  useEffect(() => {
    const response = axios.get(`http://localhost:4000/Patient/viewWalletAmountByPatient/${props.username}`,{
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
      .then(res => setWallet(res.data)).catch(err => console.log(err))
    console.log('w', wallet)
  }, []);

  const handleLogout = async (event) => {
    event.preventDefault(); 
    try {
      console.log(sessionStorage.getItem("token"));
      const response = await axios.post(`http://localhost:4000/logout/${props.username}`,"",{
        headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
      });
      sessionStorage.removeItem('token');
      console.log(sessionStorage.getItem("token"));
    navigate(`/login`);}
    catch (error) {
      console.error(error.response ? error.response.data : error.message);
      alert(error.response ? error.response.data.error : error.message);
    }
  };

  return (
    <nav className="navbar shadow-sm mb-4">
      <div className="d-flex flex-row justify-content-between w-100 align-items-center">
        <div className="d-flex flex-row">
          <a className="navbar-brand">
            <img src='https://i.pinimg.com/originals/57/1a/e3/571ae39ce1b3360b0cf852322b413bdb.jpg' alt="Pharmacy" width={40} height={40} />
          </a>
        </div>

      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={() => navigate(`/patientView/${props.username}`)}
      >
        Home
      </button>
      </div>

      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={()=>navigate(`/notificationsPatient/${props.username}`)}
      >
        Notifications
      </button>
      </div>

      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={() => navigate(`/appointmentsList/${props.username}`)}
      >
        Appointments
      </button>
      </div>

      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={() => navigate(`/prescriptionsList/${props.username}`)}
      >
        Prescriptions
      </button>
      </div>

      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={() => navigate(`/viewMedicalHistoryDocuments/${props.username}`)}
      >
        Health Documents
      </button>
      </div>

      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={() => navigate(`/healthPackagesList/${props.username}`)}
      >
        Health Packages
      </button>
      </div>

      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={() => navigate(`/familyMembersList/${props.username}`)}
      >
        Family Members
      </button>
      </div>

      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={() => navigate(`/changePassword/${props.username}/${"patient"}`)}
      >
        Change Password
      </button>
      </div>

      <div>
          <h5>Wallet: {wallet} EGP</h5>
          </div>

      <div className="d-flex flex-row">
      <button
        className={`red-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={handleLogout}
      >
        Logout
      </button>
      </div>
        
      </div>
    </nav>
  );
}

export default NavBarPatient;
