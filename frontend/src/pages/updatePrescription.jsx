import MainBtn from '../components/Button.jsx';
import { useEffect, useState } from 'react';
import NavBarDoctor from '../components/NavBarDoctor.jsx';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import TableCart from '../components/TableCart.jsx';
import TableMedicines from '../components/TableMedicines.jsx';

function UpdatePrescription() {
    const { DoctorUsername, PatientUsername, prescriptionId, type } = useParams();
    const [updatedDescription, setUpdatedDescription] = useState("");
    const [updatedDose, setUpdatedDose] = useState(0);
    const [result, setResult] = useState('');
    const [resultMeds, setResultMeds] = useState([]);
    const navigate = useNavigate();
    let tHead = ['Medicine', 'Dosage', 'Remove'];
    let tHeadMeds = ['Medicine', 'Add to prescription'];

    useEffect(() => {
        console.log("doc u", DoctorUsername);
        console.log("pres id", prescriptionId)
        const response = axios.get(`http://localhost:4000/Doctor/viewPresDetails/${DoctorUsername}/${prescriptionId}`, {
          headers: { authorization: "Bearer " + sessionStorage.getItem("token") },
        })
          .then(res => setResult(res.data)).catch(err => console.log(err))
      }, [])
      console.log("el pres" , result);
      console.log("el meds", result.Medicines);

      useEffect(() => {
        console.log("doc u", DoctorUsername);
        console.log("pres id", prescriptionId)
        const response = axios.get(`http://localhost:4000/Doctor/getAllMedicinesFromPharmacy/${DoctorUsername}`, {
          headers: { authorization: "Bearer " + sessionStorage.getItem("token") },
        })
          .then(res => setResultMeds(res.data)).catch(err => console.log(err))
      }, [])
      console.log("res meds", resultMeds)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (updatedDescription === "") {
            navigate(`/presDoctorsList/${DoctorUsername}/${PatientUsername}`);

        }else{
        try {
            const data = {updatedDescription: updatedDescription};
            const response = await axios.put(`http://localhost:4000/Doctor/updatePrescription/${DoctorUsername}/${PatientUsername}/${prescriptionId}`, data, {
                headers: { authorization: 'Bearer ' + sessionStorage.getItem('token') },
            });

            if (response.status === 200) {
                alert(`Prescription updated successfully.`);
                navigate(`/presDoctorsList/${DoctorUsername}/${PatientUsername}`);
                console.log(response.data.message);
                //window.location.reload(true);
            } else {
                alert(`Failed to update prescription. Status: ${response.status}`);
            }
        } catch (error) {
            alert(`Failed to update prescription. Error: ${error.message}`);
            console.error('Error accepting request:', error.response);
        }
    }
    };

    return (
        <div>
            <NavBarDoctor username={DoctorUsername}/>
            <h1>Add Medicine to Prescription</h1>    
            <TableMedicines tHead={tHeadMeds} data={resultMeds} DoctorUsername={DoctorUsername} PatientUsername={PatientUsername} prescriptionId={prescriptionId}/>
            <h2>Prescription Medicines</h2>
           {result.Medicines && <TableCart tHead={tHead} data={result.Medicines} DoctorUsername={DoctorUsername} PatientUsername={PatientUsername} prescriptionId={prescriptionId}/>}

            <div>
            {type==='update' &&<h1>Update Prescription</h1>}
            {type==='update' &&<form className="d-flex justify-content-center">
                <div style={{width: "30%"}} className="form-width">
                    <p className="text-capitalize fs-4 mb-3"></p>
                    <div className="mb-3">
                        <label className="form-label">Updated Description</label>
                        <textarea
                            rows={3}
                            className="form-control"
                            placeholder='Updated Description'
                            value={updatedDescription}
                            onChange={(e) => setUpdatedDescription(e.target.value)}
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
            </form>}
            </div>

        </div>
    );
}

export default UpdatePrescription;
