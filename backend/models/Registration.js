const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    // Personal Details
    fullName: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: {
        year: { type: String, required: true },
        month: { type: String, required: true },
        date: { type: String, required: true }
    },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    alternateMobile: { type: String },
    address: { type: String, required: true },

    // Academic Details
    qualification: { type: String, required: true },
    specialQualifications: { type: String, required: true },
    fieldOfInterest: { type: String, required: true },
    studyDestinations: {
        destination1: { type: String, required: true },
        destination2: { type: String },
        destination3: { type: String }
    },
    englishLevel: { type: String },

    // Additional Details
    message: { type: String },
    agree: { type: Boolean, required: true },

    // Metadata
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'approved', 'rejected'],
        default: 'pending'
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Registration', registrationSchema);