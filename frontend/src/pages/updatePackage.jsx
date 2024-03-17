import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import NavBarAdministrator from '../components/NavBarAdministrator';
import MainBtn from '../components/Button';
import Input from '../components/Input';


function UpdatePackage(){
    const [typeUpdate, setTypeUpdate] = useState('')
    const [annualFee, setAnnualFee] = useState(0)
    const [doctorSessionDiscount, setDoctorSessionDiscount] = useState(0)
    const [medicineDiscount, setMedicineDiscount] = useState(0)
    const [familySubscriptionDiscount, setFamilySubscriptionDiscount] = useState(0)
    const {username} = useParams();

    //   const handleUpdate = (e) => {
    //     e.preventDefault();
    //     const data = {type, annualFee, doctorSessionDiscount, medicineDiscount, familySubscriptionDiscount}
    //     console.log(data)
    //     const response = axios.put(`http://localhost:4000//HealthPackage/update/${typeUpdate}`, data)
    // .then(res =>console.log(res.data)).catch(err => console.log(err))
    //   }
    const handleUpdate = (e) => {
      e.preventDefault();

      if(annualFee){
      const response = axios.put(`http://localhost:4000/HealthPackage/updateAnnualFee/${username}/${typeUpdate}`,
      {AnnualFee:annualFee}, {
        headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
      })
      .then(res =>{
        alert("Updated")
        window.location.reload(true);
  
      }).catch(err => alert(err))

      console.log(annualFee)
      }
      if(doctorSessionDiscount){
        const response = axios.put(`http://localhost:4000/HealthPackage/updateDoctorSessionDiscount/${username}/${typeUpdate}`, 
        {DoctorSessionDiscount:doctorSessionDiscount}, {
          headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
        })
        .then(res =>{
          alert("Updated")
          window.location.reload(true);
    
        }).catch(err => alert(err))

        }
      if(medicineDiscount){
        const response = axios.put(`http://localhost:4000/HealthPackage/updateMedicineDiscount/${username}/${typeUpdate}`,
        {MedicineDiscount:medicineDiscount}, {
          headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
        })
        .then(res =>{
          alert("Updated")
          window.location.reload(true);
    
        }).catch(err => alert(err))

        }
      if(familySubscriptionDiscount){
        const response = axios.put(`http://localhost:4000/HealthPackage/updateFamilySubscriptionDiscount/${username}/${typeUpdate}`, 
        {FamilySubscriptionDiscount:familySubscriptionDiscount}, {
          headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
        })
        .then(res =>{
          alert("Updated")
          window.location.reload(true);
    
        }).catch(err => alert(err))

        }
    }
    
    
return(
    <div>
      <NavBarAdministrator username={username} />

      
      <form
        className="d-flex justify-content-center"
        onSubmit={handleUpdate}
      >
        <div style={{ width: '30%' }} className="form-width">
          <p className="text-capitalize fs-4">Update Health Package</p>

          <Input
            title='Type'
            required={true}
            placeholder='Enter package type'
            type='text'
            onChange={(e) => setTypeUpdate(e.target.value)}
          />
          <Input
            title='Annual Fee'
            required={false}
            placeholder='Enter annual fee'
            type='number'
            onChange={(e) => setAnnualFee(e.target.value)}
          />
          <Input
            title='Doctor Session Discount'
            required={false}
            placeholder='Enter doctor session discount'
            type='number'
            onChange={(e) => setDoctorSessionDiscount(e.target.value)}
          />
          <Input
            title='Medicine Discount'
            required={false}
            placeholder='Enter medicine discount'
            type='number'
            onChange={(e) => setMedicineDiscount(e.target.value)}
          />
          <Input
            title='Family Subscription Discount'
            required={false}
            placeholder='Enter family subscription discount'
            type='number'
            onChange={(e) => setFamilySubscriptionDiscount(e.target.value)}
          />
          <div className="mt-3">
            <MainBtn
              txt='Update Package'
              type="submit"
              style='green-btn'
              //action={handleSubmit}

            />
          </div>

        </div>
      </form>


    </div>
);
};
export default UpdatePackage;