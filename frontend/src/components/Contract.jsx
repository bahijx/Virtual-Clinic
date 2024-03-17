// import React from 'react';


// const Contract = ({ contract ,onAccept}) => {
//   const formatDate = (date) => {
//     return new Date(date).toLocaleDateString();
//   };
//   const handleAccept = () => {
//       onAccept();
    
//   };

//   return (
//     <div className="case-table card mt-4">
//       <h3>Contract Information</h3>
//       <p>Doctor Username: {contract.DoctorUsername}</p>
//       <p>MarkUp: {contract.MarkUp}</p>
//       <p>Start Date: {formatDate(contract.StartDate)}</p>
//       <p>End Date: {formatDate(contract.EndDate)}</p>
//       <p>Doctor Specialty: {contract.DoctorSpecialty}</p>
//       <p>Salary: {contract.Salary}</p>
//       <p>Compensation: {contract.compensation}</p>
//       <p>Working Hours: {contract.workingHours}</p>
//       <p>Working Days: {contract.workingDays}</p>
//       <p>Type: {contract.Type}</p>
//       <p>Status: {contract.Status}</p>
//       <button 
//       className={`green-txt mx-2 text-decoration-underline text-capitalize border-0 bg-transparent`}
//       type="button" onClick={handleAccept}>Accept Contract</button>
//     </div>
//   );
// };

// export default Contract;
import React from 'react';

const Contract = ({ contract, onAccept ,onReject }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const handleAccept = () => {
    onAccept();
  };
  const handleReject = () => {
    onReject();
  };


  // Inline styles to mimic the contract image styling
  const contractStyle = {
    fontFamily: 'sans-serif',
    lineHeight: '1.5',
    border: '2px solid #000',
    padding: '20px',
    margin: '20px',
    width: '100%',
  };

  const titleStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    margin: '20px 0',
  };

  const sectionTitleStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '20px'
  };

  const paragraphStyle = {
    marginBottom: '10px'
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px'
  };
  const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px', // This sets the space between the buttons
    marginTop: '20px'
  };

  return (
    <div style={contractStyle}>
      <div style={titleStyle}>Employment Contract Agreement</div>
      <div style={sectionTitleStyle}>Parties</div>
      <p style={paragraphStyle}>
        This Employment Contract Agreement (hereinafter referred to as the "Agreement") <br />is entered into on {formatDate(contract.StartDate)} (the "Effective Date"), by and between The Hospital with its current address  (hereinafter referred to as the "Employer"), <br />and {contract.DoctorUsername} specialized in {contract.DoctorSpecialty} (hereinafter referred to as the "Employee") (collectively referred to as the "Parties").
      </p>
      <div style={sectionTitleStyle}>Duties and Responsibilities</div>
      <p style={paragraphStyle}>
        During the employment period, the Employee shall have the responsibility to perform the following duties: <br />
1.Patient Care: Provide high-quality medical care to patients in a timely and professional manner. This includes diagnosing and treating illnesses, prescribing medication, and conducting routine check-ups.<br />

2.Medical Records: Maintain accurate and detailed medical records for all patients, ensuring confidentiality and compliance with healthcare regulations.<br />

3.Collaboration: Work collaboratively with other medical staff to provide comprehensive healthcare services, including specialists, nurses, and administrative staff.<br />

4.Continuing Education: Engage in continuous learning to stay updated with the latest medical research, treatments, and protocols. Participate in relevant training and professional development opportunities.<br />

5.Emergency Response: Be prepared to respond to medical emergencies and provide urgent care as needed.<br />

6.Schedule Management: Adhere to the scheduled working hours and be flexible to accommodate emergency situations or additional duties as required.<br />

7.Policy Compliance: Comply with all hospital policies, procedures, and guidelines, including those related to hygiene and infection control.<br />

8.Patient Communication: Clearly communicate medical information to patients and their families, ensuring they understand their conditions and treatment plans.<br />
      </p>
      <div style={sectionTitleStyle}>Pay and Compensation</div>
      <p style={paragraphStyle}>
        {contract.Salary && <div>Salary: {contract.Salary}</div>}
        {contract.compensation && <div>Compensation: {contract.compensation}</div>}
        {contract.MarkUp && <div>MarkUp: {contract.MarkUp}</div>}
      </p>
      <div style={sectionTitleStyle}>Working Regulations</div>
      <p style={paragraphStyle}>
        {contract.Type && <div>Type: {contract.Type}</div>}
        {contract.workingDays && <div>Working Days: {contract.workingDays}</div>}
        {contract.workingHours && <div>Working Hours: {contract.workingHours}</div>}
      </p>
      <div style={sectionTitleStyle}>Contract Status</div>
      <p style={paragraphStyle}>
        {contract.Status && <div>Current Status: {contract.Status}</div>}
       
      </p>
      {contract.Status !== "accepted" && (
        <div style={buttonGroupStyle}>
          <button style={buttonStyle} onClick={handleAccept}>Accept Contract</button>
          <button style={{ ...buttonStyle, backgroundColor: '#f44336' }} onClick={handleReject}>Reject Contract</button>   
        </div>)}
    </div>
  );
};

export default Contract;

