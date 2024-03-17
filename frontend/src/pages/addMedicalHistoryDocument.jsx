import { useNavigate, useParams } from 'react-router-dom';
// import Form from '../components/Form.jsx';
// import { useDispatch } from 'react-redux';
// import { loggedIn } from '../features/login.js';
// import Validation from '../validate/validate.js';
// import NavBarAdministrator from '../components/NavBarAdministrator.jsx';
import { useState } from 'react';
import axios from 'axios'
import NavBarPatient from '../components/NavBarPatient.jsx';
import React from 'react';
import {Document, Page} from 'react-pdf';

function AddMedicalHistoryDocument() {

  const { username } = useParams()
  const [renderPdf, setRenderPdf] = useState(null);
  const [MedicalHistoryDocuments, setMedicalHistoryDocuments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('MedicalHistoryDocuments', MedicalHistoryDocuments);

    console.log(data)
    try {
      axios.post(`http://localhost:4000/Patient/addMedicalHistoryDocument/${username}`, data, {
        headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
      })
      
        .then(response => {
          if (response.status === 200) {
            return response.data;
          } else {
            throw new Error(`Failed to upload document. Status: ${response.status}`);
          }
        })
        .then(pdfdata => {
          var len = pdfdata.length;
          var bytes = new Uint8Array(len);
          for (var i = 0; i < len; i++) {
            bytes[i] = pdfdata.charCodeAt(i);
          }

          const renderPdf = bytes.buffer;

          // Your further processing with renderPdf
          alert('Document uploaded successfully');
          console.log('PDF data:', renderPdf);
          window.location.reload(true);
        })
        .catch(error => {
          alert(`Failed to upload document`);
          console.error('Error uploading document:', error);
        });
    } catch (error) {
      console.error('Error in try block:', error);
    }

  }

  return (
    <div>
      <NavBarPatient username={username} />
      <form onSubmit={handleSubmit}>
        <h2>Medical History Document</h2>
        <input type="file" required title="MedicalHistoryDocuments" onChange={(e) => setMedicalHistoryDocuments(e.target.files[0])} />
        <h3><button type="submit">Submit</button></h3>
      </form>

      {/* {renderPdf && <PDF file={renderPdf} scale={1.3} pages={Infinity} />} */}
    </div>
  );
};

export default AddMedicalHistoryDocument;