import { useState, useEffect } from "react";
import NavBarAdministrator from "../components/NavBarAdministrator";
import { useParams} from 'react-router-dom';
import axios from "axios";
import NavBarDoctor from "../components/NavBarDoctor";
import MainBtn from "../components/Button";
import Contract from '../components/Contract'; 
import { useNavigate } from 'react-router-dom';


function ContractView () {
  const { username } = useParams();
  const [contractInfo, setContractInfo] = useState(null);

  useEffect(() => {
    const fetchContract = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/Doctor/viewContract/${username}`,{
          headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
        });
        setContractInfo(response.data.contract);
      } catch (error) {
        console.error("Failed to fetch contract details:", error);
      }
    };
    fetchContract();
  }, [username]);
  const handleAcceptContract = async () => {
    console.log("Accept contract button clicked");
    try {
      const response = await axios.post(`http://localhost:4000/Doctor/acceptContract/${username}`, "",{
        headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
      });
    //  alert(response.data.message)
      console.log('Contract accepted', response.data);
      setContractInfo(prevContract => ({
        ...prevContract,
        Status: 'accepted'
      }));
      alert('Contract accepted');
    } catch (error) {
      console.error('Error accepting contract', error.response.data);
      alert(error.response.data.error);
    }
  };
  const handleRejectContract = async () => {
    console.log("Reject contract button clicked");
    try {
      const response = await axios.post(`http://localhost:4000/Doctor/rejectContract/${username}`, "",{
        headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
      });
    //  alert(response.data.message)
      console.log('Contract rejected', response.data);
      setContractInfo(prevContract => ({
        ...prevContract,
        Status: 'rejected'
      }));
      alert('Contract rejected');
      // Clear the session storage (or however you handle logging out)
    sessionStorage.clear();

    // Redirect to login page or home page
    window.location.href = '/login'; // Replace '/login' with the path to your login page


    } catch (error) {
      console.error('Error rejecting contract', error.response.data);
      alert(error.response.data.error);
    }
  };

  return (
   <div>
    <NavBarDoctor username={username}/>
      {contractInfo ? (
        <Contract contract={contractInfo} onAccept={handleAcceptContract} onReject={handleRejectContract}/>
      ) : (
        <p>Loading contract information...</p>
      )}

    </div>
  );
};

export default ContractView;
