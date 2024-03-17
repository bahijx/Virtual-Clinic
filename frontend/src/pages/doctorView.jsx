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


function DoctorView(){

    const {username} = useParams();
    const[result, setResult] = useState([]);
    const [email, setEmail] = useState('');
    const [hourlyrate, setHourlyRate] = useState(0);
    const [affiliation, setAffiliation] = useState('');
    const [date, setDate] = useState('');
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);
    const [contractInfo, setContractInfo] = useState(null);
    const [showContract, setShowContract] = useState(false);
    const[wallet, setWallet] = useState('');
    const [notifications, setNotifications] = useState([]);
    const [isLoadingNotifications, setIsLoadingNotifications] = useState(true); // State to track loading of notifications



    let tHeadNot = ['Message'];
    let navigate = useNavigate()

    // const viewContract = async (DoctorUsername) => {
    //   try {
    //     const response = await axios.get(`http://localhost:4000/Doctor/viewContract/${DoctorUsername}`,{
    //       headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    //     });
    //     setContractInfo(response.data.contract, () => {
    //       console.log("Contract info set:", contractInfo);
    //       setShowContract(true);
    //     });
    //   } catch (error) {
    //     console.error("Failed to fetch contract details:", error);
    //   }
    // };
    
    // const handleViewContract = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:4000/Doctor/viewContract/${username}`);
    //     setContractInfo(response.data.contract);
    //     setShowContract(true); // This will display the contract component
    //   } catch (error) {
    //     console.error("Failed to fetch contract details:", error);
    //     setShowContract(false); // In case of error, do not show the contract component
    //   }
    // };
    console.log('date format', date)


    // const handleViewContract = () => {
    //   navigate(`/doctor/${username}/contract`);
    // };



  useEffect(() => {
    setIsLoadingNotifications(true); // Start loading notifications
    axios.get(`http://localhost:4000/Doctor/displayDoctorNotifications/${username}`, {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token") },
    })
    .then(res => {
      setNotifications(res.data.doctorMessages);
      setIsLoadingNotifications(false); // Stop loading after data is received
    })
    .catch(err => {
      console.error(err);
      setIsLoadingNotifications(false); // Stop loading if there's an error
    });
  }, [username]);
  const renderNotificationsSection = () => {
    if (isLoadingNotifications) {
      return <div>Loading notifications...</div>; // Or any loading spinner component
    } else {
      return <TableNotifications tHead={tHeadNot} data={notifications} />;
    }
  };

 
    return (
        <div>
        <NavBarDoctor username={username}/>

            {showContract && contractInfo && (
              <Contract contract={contractInfo} />
            )}
            

  <h1>Notifications</h1>
  {renderNotificationsSection()}
 
      
        </div>
    )
    }
    export default DoctorView;