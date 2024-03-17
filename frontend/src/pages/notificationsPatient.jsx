import { Navigate, useNavigate, useParams } from "react-router-dom";
import MainBtn from "../components/Button";

import axios from "axios";
import { useEffect, useState } from "react";
import TableNotifications from "../components/TableNotifications";
import NavBarPatient from "../components/NavBarPatient";


function NotificationsPatient(){
    const navigate = useNavigate();
    const {username} = useParams();
    const [notifications, setNotifications] = useState([]);
    let tHeadNot = ['Message'];

    useEffect(() => {
        const response = axios.get(`http://localhost:4000/Patient/displayNotifications/${username}`,{
          headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
        })
          .then(res => setNotifications(res.data.patientMessages)).catch(err => console.log(err))
      }, [])
      console.log('notif', notifications);
        
return (
    <div>
    <NavBarPatient username={username}/>
    <h2>Notifications:</h2>
    <TableNotifications tHead={tHeadNot} data={notifications} />

    </div>
)
}
export default NotificationsPatient;