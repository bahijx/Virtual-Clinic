import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import NavBarPatient from "../components/NavBarPatient";
import MainBtn from "../components/Button";
import Input from "../components/Input";
import TableMedicines from "../components/TableMedicines";
import TableItems from "../components/TableItems";


function PrescriptionInfo() {
  const {username, id } = useParams();
  const [result, setResult] = useState([]);
  const [cardNumber, setCardNumber] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [typePay, setTypePay] = useState('');


  useEffect(() => {
    const response = axios.get(`http://localhost:4000/Patient/ViewPresDetails/${username}/${id}`, {
      headers: { authorization: "Bearer " + sessionStorage.getItem("token") },
    })
      .then(res => setResult(res.data)).catch(err => console.log(err))
  }, [])
  //console.log('result', result);


  const handlePay = (e) =>{
    console.log('patient username', result.PatientUsername);
    console.log('id', id);
    e.preventDefault();
      const data = {paymentMethod:typePay}
      console.log('data', data);
      if(typePay==='card' && !(cardCVV && cardDate && cardNumber)){
        alert('Missing fields')
      }
      else{
   axios.put(`http://localhost:4000/Patient/updatePrescriptionPaymentMethod/${username}/${id}`, data, {
    headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
  })
   .then(res =>{
    alert('Prescription payed successfully by`'+typePay+'`');
    window.location.reload(true);
  }).catch(err => {
    const errorMessage = err.response?.data?.error || 'Error paying prescription';
    alert(errorMessage);
});
}
  }

//console.log('el result aho', result)
  //   result.map((e) => {
  //     console.log(e)
  //   })
  let tHead = ['Name', 'Dose'];


  return (
    <div>
      <NavBarPatient username={username} />
      <h1>Prescription Info</h1>
      <ul>
        <h3>Patient Name: {result.PatientName}</h3>
        <h3>Doctor Name: {result.DoctorName}</h3>
        <h3>Prescription Date: {result.Date && result.Date.substring(0,10)}</h3>
        <h3>Description: {result.Description}</h3>
        <h3>Total Amount: {result.TotalAmount}</h3>
        <h3>Status: {result.Filled == true ? "Filled" : "Unfilled"}</h3>
      </ul>
      <h2>Prescription Medicines</h2>
           {result.Medicines && <TableItems tHead={tHead} data={result.Medicines}/>}
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
        <h3>Pay</h3>
        <MainBtn
              txt='Pay'
              style='green-btn'
             action={handlePay}
              
            />
</div>
}
      </div>
</form>

    </div>
  )
}
export default PrescriptionInfo;