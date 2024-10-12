const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connection = require("./DbCon/DbCon")



require('dotenv').config();

// App initialization
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
connection();


// Certificate schema
const certificateSchema = new mongoose.Schema({
    certificateId: String,
    name: String,
    domain: String,
    duration: String,
    dateOfJoining: Date
});

const Certificate = mongoose.model('Certificate', certificateSchema);

// Route to add certificate data (No authentication)
app.post('/add-data', async (req, res) => {
    try {
        const { certificateId, name, domain, duration, dateOfJoining } = req.body;
        const newCertificate = new Certificate({ certificateId, name, domain, duration, dateOfJoining });
        await newCertificate.save();
        return res.json({ message: 'Certificate added successfully!' });
    } catch (err) {
        return res.status(500).json({ message: 'Error adding certificate', error: err });
    }
});

// Route to show all certificate data
app.get('/show-data', async (req, res) => {
    try {
        const certificates = await Certificate.find();
        return res.json(certificates);
    } catch (err) {
        return res.status(500).json({ message: 'Error fetching certificates', error: err });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});