import { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import NavBarAdministrator from '../components/NavBarAdministrator';
import MainBtn from '../components/Button';
import Input from '../components/Input';



function ManagePackages(){
    const [type, setType] = useState('')
    const [typeUpdate, setTypeUpdate] = useState('')
    const [typeDelete, setTypeDelete] = useState('')
    const [annualFee, setAnnualFee] = useState(0)
    const [doctorSessionDiscount, setDoctorSessionDiscount] = useState(0)
    const [medicineDiscount, setMedicineDiscount] = useState(0)
    const [familySubscriptionDiscount, setFamilySubscriptionDiscount] = useState(0)
    const {username} = useParams();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
      e.preventDefault();

        const data = {Type:type, AnnualFee:annualFee, DoctorSessionDiscount:doctorSessionDiscount, MedicineDiscount:medicineDiscount, FamilySubscriptionDiscount:familySubscriptionDiscount}
        console.log(data)
        const response = axios.post(`http://localhost:4000/HealthPackage/create/${username}`, data,{
          headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
        })
    .then(res =>{
      alert("Package added successfully")
      window.location.reload(true);

      }).catch(err => alert(err))
      }

      const handleDelete = (e) => {
        e.preventDefault();

        const response = axios.delete(`http://localhost:4000/HealthPackage/delete/${username}/${typeDelete}`,{
          headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
        })
    .then(res =>{
      alert("Package Deleted")
      window.location.reload(true);

    }).catch(err => alert(err))

      }
    //   const handleUpdate = (e) => {
    //     e.preventDefault();
    //     const data = {type, annualFee, doctorSessionDiscount, medicineDiscount, familySubscriptionDiscount}
    //     console.log(data)
    //     const response = axios.put(`http://localhost:4000//HealthPackage/update/${typeUpdate}`, data)
    // .then(res =>console.log(res.data)).catch(err => console.log(err))
    //   }
    
    
return(
    <div>
      <NavBarAdministrator username={username} />
      <div className="d-flex justify-content-end flex-row">
      <div className="input-group w-25">
      <MainBtn
              txt="Update existing health package"
              style="green-btn"
              action={() => navigate(`/updatePackage/${username}`)}
              key="navBtn"
    />
    </div>
    </div>

      <form
        className="d-flex justify-content-center"
        onSubmit={handleSubmit}
      >
        <div style={{ width: '30%' }} className="form-width">
          <p className="text-capitalize fs-4">Add Health Package</p>

          <Input
            title='Type'
            required={true}
            placeholder='Enter package type'
            type='text'
            onChange={(e) => setType(e.target.value)}
          />
          <Input
            title='Annual Fee'
            required={true}
            placeholder='Enter annual fee'
            type='number'
            onChange={(e) => setAnnualFee(e.target.value)}
          />
          <Input
            title='Doctor Session Discount'
            required={true}
            placeholder='Enter doctor session discount'
            type='number'
            onChange={(e) => setDoctorSessionDiscount(e.target.value)}
          />
          <Input
            title='Medicine Discount'
            required={true}
            placeholder='Enter medicine discount'
            type='number'
            onChange={(e) => setMedicineDiscount(e.target.value)}
          />
          <Input
            title='Family Subscription Discount'
            required={true}
            placeholder='Enter family subscription discount'
            type='number'
            onChange={(e) => setFamilySubscriptionDiscount(e.target.value)}
          />
          <div className="mt-3">
            <MainBtn
              txt='Add Package'
              type="submit"
              style='green-btn'
              //action={handleSubmit}

            />
          </div>

        </div>
      </form>


      <form
        className="d-flex justify-content-center"
        onSubmit={handleDelete}
      >
        <div style={{ width: '30%' }} className="form-width">
          <p className="text-capitalize fs-4">Delete Health Package</p>

          <Input
            title='Type'
            required={true}
            placeholder='Enter package type'
            type='text'
            onChange={(e) => setTypeDelete(e.target.value)}
          />
         
          <div className="mt-3">
            <MainBtn
              txt='Delete Package'
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
export default ManagePackages;