const Registration = require('../models/Registration');
const sendEmail = require('../utils/emailService');

exports.submitRegistration = async (req, res) => {
    try {
        const registration = new Registration({
            fullName: req.body.fullName,
            gender: req.body.gender,
            dateOfBirth: {
                year: req.body.dateOfBirth.year,
                month: req.body.dateOfBirth.month,
                date: req.body.dateOfBirth.date
            },
            email: req.body.email,
            mobile: req.body.mobile,
            alternateMobile: req.body.alternateMobile,
            address: req.body.address,
            qualification: req.body.qualification,
            specialQualifications: req.body.specialQualifications,
            fieldOfInterest: req.body.fieldOfInterest,
            studyDestinations: {
                destination1: req.body.studyDestinations.destination1,
                destination2: req.body.studyDestinations.destination2,
                destination3: req.body.studyDestinations.destination3
            },
            englishLevel: req.body.englishLevel,
            message: req.body.message,
            agree: req.body.agree
        });

        await registration.save();

        // Send confirmation email
        await sendEmail({
            to: req.body.email,
            subject: 'Registration Received - IGL Sri Lanka',
            text: `Dear ${req.body.fullName},\n\nThank you for registering with IGL Sri Lanka. We have received your application and will review it shortly.\n\nBest regards,\nIGL Team`
        });

        res.status(201).json({
            success: true,
            message: 'Registration submitted successfully',
            data: registration
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
