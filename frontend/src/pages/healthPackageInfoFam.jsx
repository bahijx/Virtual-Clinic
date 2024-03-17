import { useState, useEffect } from "react";
import NavBarAdministrator from "../components/NavBarAdministrator";
import { useNavigate, useParams} from 'react-router-dom';
import axios from "axios";
import NavBarPatient from "../components/NavBarPatient";
import MainBtn from "../components/Button";
import Input from "../components/Input";



function HealthPackageInfoFam(){
    const {username, type, id} = useParams();
    const[result, setResult] = useState([]);
    let navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cardCVV, setCardCVV] = useState('');
    const [typePay, setTypePay] = useState('');


    useEffect(() => {
  const response = axios.get(`http://localhost:4000/Patient/viewHealthPackageStatusOfFamilyMember/${username}/${type}/${id}`,{
    headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
  })
  .then(res =>setResult(res.data)).catch(err => console.log(err))
    }, [])

  console.log('elsub', result.Status)

  const handleSubscribe = async (e) =>{
    e.preventDefault();

  try {

    const data = {paymentMethod: typePay};
    const response = await axios.post(`http://localhost:4000/Patient/subscribeToAHealthPackageForFamilyMember/${username}/${type}/${id}`, data, {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })

    if (response.status === 200) {
      alert(`Subscribed successfully`);
      navigate(`/healthPackagesListFam/${username}/${id}`);
      console.log(response.data.message);
    } else if (response.status === 400) {
      alert(`Failed to subscribe, not enough money in the wallet`);
    } else if (response.status === 404) {
      alert(`Failed to subscribe, you are already subscribed`);
    } else {
      alert(`Failed to subscribe. Status: ${response.status}`);
    }
    //window.location.reload(true);
  } catch (error) {
    alert(`Failed to subscribe. Error: ${error.message}`);
    console.error('Error accepting request:', error);
  }

  }
  const handleCancel = () =>{
    const response = axios.post(`http://localhost:4000/Patient/cancelHealthCarePackageSubscriptionOfFamMember/${username}/${type}/${id}`, "", {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
  .then(res =>alert('Cancelled')).catch(err => alert(err))
  window.location.reload(true);
  }

//   result.map((e) => {
//     console.log(e)
//   })

return (
    <div>
        <NavBarPatient username={username}/>
        
        {/* <h1>Package Info</h1>
        <ul>
            <h3>Type: {result.Type}</h3>
            <h3>Annual Fee: {result.AnnualFee}</h3>
            <h3>Doctor Session Discount: {result.DoctorSessionDiscount}</h3>
            <h3>Medicine Discount: {result.MedicineDiscount}</h3>
            <h3>Family Subscription Discount: {result.FamilySubscriptionDiscount}</h3>
            <h3>Status: {result.Status}</h3>
            {result.Status === "Subscribed" &&
              <h3> Renewal Date: {result.RenewalDate.substring(0,10)}</h3>
            }
            {result.Status === "Cancelled" &&
              <h3> Cancellation Date: {result.CancellationDate.substring(0,10)}</h3>
            }
        </ul>
        
        <div>
        <h4>Choose Payment Method</h4>
        <div>
            <input
            type='radio' name='payment' checked={typePay==='wallet'} value={'wallet'} onChange={(e) => {setTypePay(e.target.value)}}/>
            Pay with wallet
        </div>
        <div>
            <input
            type='radio' name='payment' checked={typePay==='card'} value={'card'} onChange={(e) => {setTypePay(e.target.value)}}/>
            Pay by card
        </div>
        </div>
        
        {typePay==='card' &&
        <div>
        <Input
            title='Card Number'
            placeholder='Enter card number'
            type='text'
            required={true}

           onChange={(e) => setCardNumber(e.target.value)}
          />
          <Input
            title='Expiry Date'
            type='date'
            required={true}

           onChange={(e) => setCardDate(e.target.value)}
          />
          <Input
            title='CVV'
            placeholder='Enter CVV'
            type='text'
            required={true}
           onChange={(e) => setCardCVV(e.target.value)}
          />

        </div>
}       
        
        <div>
          {result.Status !='Subscribed' && (typePay==='wallet' || (typePay==='card' && cardCVV && cardDate && cardNumber)) &&
            <MainBtn
              txt="Subscribe"
              style="green-btn"
              action={handleSubscribe}
              key="navBtn"
            />
          }
          {result.Status === 'Subscribed' &&
             <MainBtn
              txt="Cancel Subscription"
              style="white-btn"
              action={handleCancel}
              key="navBtn"
            />
          }
          </div> */}
      <form
      //style={{ width: '100%' }}
      className="d-flex justify-content-center "
    >
      <div style={{ width: '40%' }} className="form-width">
          <div className="mt-3">

<div>
        <h4>Choose Payment Method</h4>
        <div>
            <input
            type='radio' name='payment' checked={typePay==='wallet'} value={'wallet'} onChange={(e) => {setTypePay(e.target.value)}}/>
            Pay with wallet
        </div>
        <div>
            <input
            type='radio' name='payment' checked={typePay==='card'} value={'card'} onChange={(e) => {setTypePay(e.target.value)}}/>
            Pay by card
        </div>

        </div>

        {typePay==='card' &&
        <div>
        <Input
            title='Card Number'
            placeholder='Enter card number'
            type='text'
            required={true}

           onChange={(e) => setCardNumber(e.target.value)}
          />
          <Input
            title='Expiry Date'
            type='date'
            required={true}

           onChange={(e) => setCardDate(e.target.value)}
          />
          <Input
            title='CVV'
            placeholder='Enter CVV'
            type='text'
            required={true}
           onChange={(e) => setCardCVV(e.target.value)}
          />

            </div>
}

        </div>
        {(typePay==='wallet' || (typePay==='card' && cardCVV && cardDate && cardNumber)) &&
<div>
        <MainBtn
              txt='Subscribe'
              style='green-btn'
             action={handleSubscribe}
              
            />
</div>
}
      </div>
    </form>        
        </div>
)
}
export default HealthPackageInfoFam;