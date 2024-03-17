import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TableMedicalHistoryDocuments from './TableMedicalHistoryDocuments.jsx';
import TableHealthRecords from './TableHealthRecords.jsx';
import NavBarPatient from './NavBarPatient.jsx';
import MainBtn from './Button.jsx';
import Input from './Input.jsx';


function MedicalHistoryDocumentsList() {
    const [searchText, setSearchText] = useState('');
    const [filterText, setFilterText] = useState('');
    const [result, setResult] = useState([]);
    const { username } = useParams();
    const [healthRecord, setHealthRecord] = useState([]);
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
  
  
    let tHeadRecords = ['Date', 'Description', 'Diagnosis', 'Medication'];
  
    useEffect(() => {
      const response = axios.get(`http://localhost:4000/Patient/viewHealthRecords/${username}`,{
        headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
      })
        .then(res => setHealthRecord(res.data.healthRecords)).catch(err => console.log(err))
    }, [])
    console.log(healthRecord);

    useEffect(() => {
        const fetchMedicalHistoryDocuments = async () => {
          try {
            const response = await axios.get(`http://localhost:4000/Patient/viewMedicalHistoryDocuments/${username}`,{
              headers: { authorization: "Bearer " + sessionStorage.getItem("token")},
            });
            const documents = response.data.MedicalHistoryDocuments;
            setResult(documents);
          } catch (error) {
            console.error('Error fetching medical history documents:', error);
          }
        };
    
        fetchMedicalHistoryDocuments();
      }, [username]);

    
    console.log('medicalhistorydoc',result);
    let navigate = useNavigate()

    let tHead = ['Document', 'Delete'];

    return (
    <div>
      <NavBarPatient username={username} />

      <h1>Health Records</h1>
      <TableHealthRecords tHead={tHeadRecords} data={healthRecord} />

      <h1>Medical History Documents</h1>
      <TableMedicalHistoryDocuments tHead={tHead} data={result} username={username} searchText={searchText} filterText={filterText} />
      <form
        className="d-flex "
      >
        <div style={{ width: '30%' }} className="form-width">
          <p className="text-capitalize fs-4">Add Medical History Document</p>

          <Input
            title='Document'
            placeholder='enter document'
            type='file'
            required={true}
            onChange={(e) => setMedicalHistoryDocuments(e.target.files[0])}
          />
          <div className="mt-3">
            <MainBtn
              txt='Add Document'
              style='green-btn'
              action={handleSubmit}
            />
          </div>
        </div>
      </form>
    </div>
    );
}
export default MedicalHistoryDocumentsList;
