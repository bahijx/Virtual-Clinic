import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CancelSubscriptionPopup = ({ onCancel }) => {
  const handleYes = () => {
    onCancel(true); // Trigger the callback with true for "Yes"
  };

  const handleNo = () => {
    onCancel(false); // Trigger the callback with false for "No"
  };

  return (
    <div className="popup">
      <p>Are you sure you want to cancel the subscription?</p>
      <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
};

function CaseTableBody({ data }) {
  let navigate = useNavigate()
  const {username, id} = useParams();
  const[resultSub, setResultSub] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleCancel = (confirmed) => {
    setShowPopup(false);
    if (confirmed) {
      const response = axios.post(`http://localhost:4000/Patient/cancelHealthCarePackageSubscriptionOfFamMember/${username}/${data.Type}/${id}`, "", {
        headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
      })
    .then(res =>alert('Cancelled')).catch(err => alert(err))
    window.location.reload(true);
    console.log('Subscription canceled!');
    }
  };

  useEffect(() => {
    const response = axios.get(`http://localhost:4000/Patient/viewHealthPackageStatusOfFamilyMember/${username}/${data.Type}/${id}`,{
      headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
    })
    .then(res =>setResultSub(res.data)).catch(err => console.log(err))
      }, [])
console.log('h sub', resultSub);

// const handleCancel = () =>{
//   const response = axios.post(`http://localhost:4000/Patient/cancelHealthCarePackageSubscription/${username}/${data.Type}`, "", {
//     headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
//   })
// .then(res =>alert('Cancelled')).catch(err => alert(err))
// window.location.reload(true);
// }

  return (
    <>
      
    {data.Type && <th>{data.Type}</th>}
    {data.AnnualFee && <td>{data.AnnualFee}</td>}
    {data.DoctorSessionDiscount && <td>{data.DoctorSessionDiscount}</td>}
    {data.MedicineDiscount && <td>{data.MedicineDiscount}</td>}
    {data.FamilySubscriptionDiscount && <td>{data.FamilySubscriptionDiscount}</td>}

    { data.PaymentMethod && <td>{data.PaymentMethod}</td>}
    { data.RenewalDate && <td>{data.RenewalDate.substring(0,10)}</td>}
    { data.SubscriptionStartDate && <td>{data.SubscriptionStartDate.substring(0,10)}</td>}
    { data.SubscriptionEndDate && <td>{data.SubscriptionEndDate.substring(0,10)}</td>}

{data.AnnualFee && !(resultSub.Status === 'Subscribed') &&
    <td className="py-3 text-align-center">
      <div className="d-flex flex-row">
      <button
        className={`green-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={()=>navigate(`/healthPackageInfoFam/${username}/${data.Type}/${id}`)}
      >
        Subscribe
      </button>
      </div>
      </td>
}
{data.AnnualFee && (resultSub.Status === 'Subscribed') &&
    <td className="py-3 text-align-center">
      <div className="d-flex flex-row">
      <button
        className={`red-txt mx-2 text-capitalize border-0 bg-transparent`}
        onClick={() => setShowPopup(true)}
      >
        Cancel
      </button>
      {showPopup && <CancelSubscriptionPopup onCancel={handleCancel} />}

      </div>
      </td>
}

    </>
  );
}

// function NoramlTableBody({ data }) {
//   let arr = [];
//   for (let key in data) arr.push(data[key]);

//   return (
//     <>
//       {arr.map((e) => (
//         <td>{e}</td>
//       ))}
//     </>
//   );
// }

function TableHealthPackagesFam({ tHead, data }) {
  console.log('table health packages', data)

  return (
    <div className="case-table card mt-4">
      <table className="table table-striped m-0">
        <thead>
          <tr className="text-capitalize">
            {tHead.map((e) => (
              <th scope="col">{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data
          .map((e) => (
            <tr className="text-capitalize">
                <CaseTableBody data={e} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableHealthPackagesFam;
