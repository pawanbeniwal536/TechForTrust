// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [certificateId, setCertificateId] = useState('');
//   const [name, setName] = useState('');
//   const [domain, setDomain] = useState('');
//   const [duration, setDuration] = useState('');
//   const [dateOfJoining, setDateOfJoining] = useState('');
//   const [certificates, setCertificates] = useState([]);


//   const handleAddData = async () => {
//     try {
//       await axios.post('http://localhost:5000/add-data', {
//         certificateId,
//         name,
//         domain,
//         duration,
//         dateOfJoining
//       });
//       fetchCertificates(); 
//     } catch (err) {
//       console.error('Error adding certificate', err);
//     }
//   };


//   const fetchCertificates = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/show-data');
//       setCertificates(response.data);
//     } catch (err) {
//       console.error('Error fetching certificates');
//     }
//   };

//   useEffect(() => {
//     fetchCertificates();
//   }, []);

//   return (
//     <div>
//       <h2>Add Certificate</h2>
//       <input placeholder="Certificate ID" value={certificateId} onChange={(e) => setCertificateId(e.target.value)} />
//       <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//       <input placeholder="Domain" value={domain} onChange={(e) => setDomain(e.target.value)} />
//       <input placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
//       <input placeholder="Date of Joining" type="date" value={dateOfJoining} onChange={(e) => setDateOfJoining(e.target.value)} />
//       <button onClick={handleAddData}>Add Data</button>

//       <h2>Show Certificates</h2>
//       <ul>
//         {certificates.map((cert) => (
//           <li key={cert._id}>{cert.name} - {cert.certificateId} , {cert.duration} , {cert.dateOfJoining} , {cert.domain}</li>  
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [showData, setShowData] = useState(false);
  const [certificateId, setCertificateId] = useState('');
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [duration, setDuration] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [certificates, setCertificates] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Fetch data function
  const fetchCertificates = async () => {
    try {
      const response = await axios.get('http://localhost:5000/show-data');
      setCertificates(response.data);
    } catch (err) {
      console.error('Error fetching certificates:', err);
    }
  };

  // Handle form submission
  const handleAddData = async () => {
    try {
      await axios.post('http://localhost:5000/add-data', {
        certificateId,
        name,
        domain,
        duration,
        dateOfJoining,
      });
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setShowForm(false);
        setShowData(true);
        fetchCertificates(); // Refresh the data after adding a new certificate
      }, 2000);
    } catch (err) {
      console.error('Error adding certificate:', err);
    }
  };

  useEffect(() => {
    if (showData) {
      fetchCertificates();
    }
  }, [showData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!showForm && !showData && (
        <div className="grid grid-cols-2 gap-8">
          <div
            className="bg-white shadow-md p-8 rounded-lg text-center cursor-pointer hover:shadow-lg"
            onClick={() => setShowForm(true)}
          >
            <h2 className="text-xl font-semibold">Add Data</h2>
          </div>
          <div
            className="bg-white shadow-md p-8 rounded-lg text-center cursor-pointer hover:shadow-lg"
            onClick={() => setShowData(true)}
          >
            <h2 className="text-xl font-semibold">Show Data</h2>
          </div>
        </div>
      )}

      {showForm && (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl mb-4">Add Certificate</h2>
          <input
            className="mb-4 p-2 border rounded w-full"
            placeholder="Certificate ID"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
          />
          <input
            className="mb-4 p-2 border rounded w-full"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="mb-4 p-2 border rounded w-full"
            placeholder="Domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <input
            className="mb-4 p-2 border rounded w-full"
            placeholder="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <input
            className="mb-4 p-2 border rounded w-full"
            placeholder="Date of Joining"
            type="date"
            value={dateOfJoining}
            onChange={(e) => setDateOfJoining(e.target.value)}
          />
          <button
            onClick={handleAddData}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
 <br />
          <button
            onClick={() => setShowData(false)}
            className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600"
          >
            Back to Dashboard
          </button>
        </div>
      )}

      {formSubmitted && <div className="text-green-500 mt-4">Form Submitted Successfully!</div>}

      {showData && (
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
          <h2 className="text-2xl mb-4">Certificate Data</h2>
          {certificates.length > 0 ? (
            <ul>
              {certificates.map((cert) => (
                <li key={cert._id} className="border-b py-2">
                  {cert.name} - {cert.certificateId}
                </li>
              ))}
            </ul>
          ) : (
            <p>No certificates added yet.</p>
          )}
          <button
            onClick={() => setShowData(false)}
            className="bg-gray-500 text-white px-4 py-2 mt-4 rounded hover:bg-gray-600"
          >
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;