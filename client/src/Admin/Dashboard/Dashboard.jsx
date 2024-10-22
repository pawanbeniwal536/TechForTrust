import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
  const [isEditing, setIsEditing] = useState(false);
  const [editCertificateId, setEditCertificateId] = useState(null);
  const [sortBy, setSortBy] = useState(''); // State for sorting

  // Fetch data function
  const fetchCertificates = async () => {
    try {
      const response = await axios.get('http://localhost:5000/show-data');
      setCertificates(response.data);
    } catch (err) {
      console.error('Error fetching certificates:', err);
    }
  };

  const handleAddData = async () => {
    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/update-data/${editCertificateId}`, {
          certificateId,
          name,
          domain,
          duration,
          dateOfJoining,
        });
      } else {
        await axios.post('http://localhost:5000/add-data', {
          certificateId,
          name,
          domain,
          duration,
          dateOfJoining,
        });
      }

      setCertificateId('');
      setName('');
      setDomain('');
      setDuration('');
      setDateOfJoining('');
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setShowForm(false);
        setShowData(true);
        fetchCertificates();
        setIsEditing(false);
        setEditCertificateId(null);
      }, 2000);
    } catch (err) {
      console.error('Error adding/updating certificate:', err);
    }
  };

  const handleEdit = (certificate) => {
    setCertificateId(certificate.certificateId);
    setName(certificate.name);
    setDomain(certificate.domain);
    setDuration(certificate.duration);
    setDateOfJoining(certificate.dateOfJoining);
    setIsEditing(true);
    setEditCertificateId(certificate._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-data/${id}`);
      fetchCertificates();
    } catch (err) {
      console.error('Error deleting certificate:', err);
    }
  };

  useEffect(() => {
    if (showData) {
      fetchCertificates();
    }
  }, [showData]);

  // Sorting logic
  const sortCertificates = (data) => {
    let sortedData = [...data];
    if (sortBy === 'date') {
      sortedData.sort((a, b) => new Date(a.dateOfJoining) - new Date(b.dateOfJoining));
    } else if (sortBy === 'name') {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'id') {
      sortedData.sort((a, b) => a.certificateId.localeCompare(b.certificateId));
    }
    return sortedData;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-400 to-gray-300">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">
        InternVenture - For Bright Future of All Freshers
      </h1>

      {!showForm && !showData && (
        <div className="flex flex-col items-center space-y-6 w-full px-6 md:px-12">
          <div
            className="w-full max-w-sm bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg p-6 rounded-xl text-center cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            onClick={() => setShowForm(true)}
          >
            <h2 className="text-2xl font-bold">Add Data</h2>
          </div>
          <div
            className="w-full max-w-sm bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg p-6 rounded-xl text-center cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            onClick={() => setShowData(true)}
          >
            <h2 className="text-2xl font-bold">Show Data</h2>
          </div>
          <div className="go-home-button flex justify-center mt-8">
            <Link
              to='/'
              className='bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'
            >
              GO TO HOME
            </Link>
          </div>
        </div>
      )}

      {showForm && (
        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full transform hover:scale-105 transition-transform duration-300 overflow-auto text-gray-800">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            {isEditing ? 'Edit Certificate' : 'Add Certificate'}
          </h2>
          <input
            className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            placeholder="Certificate ID"
            value={certificateId}
            required={true}
            onChange={(e) => setCertificateId(e.target.value)}
          />
          <input
            className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
            value={name}
            required={true}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            placeholder="Domain"
            value={domain}
            required={true}
            onChange={(e) => setDomain(e.target.value)}
          />
          <input
            className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            placeholder="Duration"
            value={duration}
            required={true}
            onChange={(e) => setDuration(e.target.value)}
          />
          <input
            className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            placeholder="Date of Joining"
            type="date"
            required={true}
            value={dateOfJoining}
            onChange={(e) => setDateOfJoining(e.target.value)}
          />
          <button
            onClick={handleAddData}
            className="mr-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-transform duration-300"
          >
            {isEditing ? 'Update' : 'Submit'}
          </button>
          <button
            onClick={() => {
              setShowForm(false);
              setIsEditing(false);
            }}
            className="bg-gray-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-gray-600 transform hover:scale-105 transition-transform duration-300"
          >
            Back to Dashboard
          </button>

          <div className="mt-8">
            <Link
              to="/"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg p-4 rounded-lg text-center w-full block hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              Go to Home
            </Link>
          </div>
        </div>
      )}

      {formSubmitted && <div className="text-green-500 mt-4">Form Submitted Successfully!</div>}

      {showData && (
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl transform hover:scale-105 transition-transform duration-300 overflow-auto max-h-screen">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Certificate Data</h2>

          {/* Sort Buttons */}
          <div className="mb-6">
            <button
              onClick={() => setSortBy('date')}
              className={`mr-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ${sortBy === 'date' ? 'bg-blue-700' : ''}`}
            >
              Sort by Date of Joining
            </button>
            <button
              onClick={() => setSortBy('name')}
              className={`mr-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 ${sortBy === 'name' ? 'bg-green-700' : ''}`}
            >
              Sort by Name
            </button>
            <button
              onClick={() => setSortBy('id')}
              className={`mr-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 ${sortBy === 'id' ? 'bg-teal-700' : ''}`}
            >
              Sort by Certificate ID
            </button>
          </div>

          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Certificate ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Domain</th>
                <th className="px-4 py-2 border">Duration</th>
                <th className="px-4 py-2 border">Date of Joining</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody className='text-gray-800'>
              {sortCertificates(certificates).map((certificate) => (
                <tr key={certificate._id}>
                  <td className="border px-4 py-2">{certificate.certificateId}</td>
                  <td className="border px-4 py-2">{certificate.name}</td>
                  <td className="border px-4 py-2">{certificate.domain}</td>
                  <td className="border px-4 py-2">{certificate.duration}</td>
                  <td className="border px-4 py-2">{new Date(certificate.dateOfJoining).toLocaleDateString()}</td>
                  <td className="border px-4 py-2 flex justify-center space-x-4">
                    <button
                      onClick={() => handleEdit(certificate)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(certificate._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={() => setShowData(false)}
            className="bg-gray-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-gray-600 transform hover:scale-105 transition-transform duration-300"
          >
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
