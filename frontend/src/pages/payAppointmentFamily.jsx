import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NavBarPatient from "../components/NavBarPatient";
import MainBtn from "../components/Button";
import Input from "../components/Input";

function PayAppointmentFamily(){
    const {usernamePatient,id, usernameDoctor} = useParams();
    let navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cardCVV, setCardCVV] = useState('');
    const [typePay, setTypePay] = useState('');
    const [nationalID, setNationalID] = useState('');


    //useEffect(() => {
        // const response = axios.post(`http://localhost:4000/Patient/selectAppointment/${usernamePatient}/${id}/${usernameDoctor}`)
        // .then(res =>console.log(res)).catch(err => console.log(err))
        //   }, [])
        const handleBook = (e) =>{
          e.preventDefault();
            const data = {paymentMethod:typePay, familyId: nationalID}
            if(typePay==='card' && !(cardCVV && cardDate && cardNumber)){
              alert('Missing fields')
            }
            else{
         const response = axios.post(`http://localhost:4000/Patient/selectAppointmentDateTimeFamMem/${usernamePatient}/${id}/${usernameDoctor}`, data,  {
          headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
        })
         .then(res =>{
          alert('Appointment Booked');
          navigate(`appointmentsList/${usernamePatient}`);
         }
          ).catch(err => alert('error booking appointment'))
        }
      }

    return (
        <div>
        <NavBarPatient username={usernamePatient}/>

        <form
      //style={{ width: '100%' }}
      className="d-flex justify-content-center "
    >
      <div style={{ width: '40%' }} className="form-width">
          <div className="mt-3">

<div>
<h4>Enter Family Member National ID</h4>
        <div>
        <Input
            title='National ID'
            placeholder='Enter national id'
            type='text'
            required={true}

           onChange={(e) => setNationalID(e.target.value)}
          />
        </div>
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
        <h3>Book Appointment</h3>
        <MainBtn
              txt='Book'
              style='green-btn'
             action={handleBook}
              
            />
</div>
}
      </div>
    </form>
        </div>
    )
}
export default PayAppointmentFamily;