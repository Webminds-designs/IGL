import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StepIndicator from "../components/StepIndicator";
import { CheckCircle } from "lucide-react";

const RegistrationForm = () => {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Header Section */}
            <div className="text-center mt-8 md:mt-16 lg:mt-20 py-6 md:py-10 px-4">
                <h3 className="text-gray-500 text-sm md:text-lg uppercase tracking-wide">
                    STUDENT ASSESSMENT & REGISTRATION FORM
                </h3>
                <h1 className="text-2xl md:text-4xl font-semibold text-black mt-2">
                    Start Your Study Abroad Journey With IGL Sri Lanka
                </h1>
                <p className="text-gray-600 text-xs md:text-sm mt-4 max-w-3xl mx-auto">
                    Fill Out This Quick Assessment To Check Your Eligibility And Take The First Step Toward Studying Abroad.
                    Our Experts Will Review Your Details And Guide You Through The Process!
                </p>
            </div>

            {/* Form Section */}
            <div className="flex-1 max-w-3xl mx-auto w-full px-4 md:px-6 lg:px-8 py-6 md:py-10">
                {!submitted && <StepIndicator step={step} />}
                <div className="bg-white py-6 md:py-10 px-4 md:px-8 lg:px-12 rounded-4xl border border-gray-300">
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center p-4 md:p-6 rounded-4xl">
                            <div className="p-3 md:p-4 bg-green-100 rounded-full">
                                <CheckCircle className="text-green-500 w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <h2 className="text-base md:text-lg font-semibold mt-4 text-center">
                                Submission Successful!
                            </h2>
                            <p className="text-gray-500 text-center text-sm md:text-base max-w-md">
                                Your assessment form has been submitted successfully.
                                Our team will review your details and get in touch with you shortly to guide you through the next steps.
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Step 1: Personal Details */}
                            {step === 1 && (
                                <div className="space-y-7 text-sm">
                                    <label>Full Name <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Enter your full name" className="w-full border border-gray-300 p-2 rounded-4xl" />

                                    <label>Gender <span className="text-red-500">*</span></label>
                                    <select className="w-full border border-gray-300 p-2 rounded-4xl text-gray-500 cursor-pointer">
                                        <option value="" disabled selected>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>

                                    <label>Date of Birth <span className="text-red-500">*</span></label>
                                    <div className="flex space-x-2">
                                        <input type="text" placeholder="Year" className="w-1/3 border border-gray-300 p-2 rounded-4xl" />
                                        <select className="w-1/3 border border-gray-300 p-2 rounded-4xl text-gray-500 cursor-pointer">
                                            <option value="" disabled selected>Month</option>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                        </select>
                                        <input type="text" placeholder="Date" className="w-1/3 border border-gray-300 p-2 rounded-4xl" />
                                    </div>

                                    <label>Email Address <span className="text-red-500">*</span></label>
                                    <input type="email" placeholder="Enter your email address" className="w-full border border-gray-300 p-2 rounded-4xl" />

                                    <label>Mobile Number <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Enter your mobile number" className="w-full border border-gray-300 p-2 rounded-4xl" />

                                    <label>Alternate Mobile Number</label>
                                    <input type="text" placeholder="Enter your alternate mobile number" className="w-full border border-gray-300 p-2 rounded-4xl" />

                                    <label>Address <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Enter your address" className="w-full border border-gray-300 p-2 rounded-4xl" />
                                </div>
                            )}

                            {/* Step 2: Academic Details */}
                            {step === 2 && (
                                <div className="space-y-7 text-sm">
                                    <label>Highest Academic Qualification <span className="text-red-500">*</span></label>
                                    <select className="w-full border border-gray-300 p-2 cursor-pointer rounded-4xl text-gray-500">
                                        <option value="" disabled selected>Select Qualification</option>
                                        <option>O-Level</option>
                                        <option>A-Level</option>
                                        <option>Diploma</option>
                                        <option>Bachelor's</option>
                                        <option>Master’s</option>
                                    </select>

                                    <label>Other Special Qualifications <span className="text-red-500">*</span></label>
                                    <textarea placeholder="Enter your special qualifications" className="w-full border border-gray-300 p-2 rounded-4xl"></textarea>

                                    <label>Fields of Interest for Study <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="Enter your field of interest" className="w-full border border-gray-300 p-2 rounded-4xl" />

                                    <label>Preferred Study Destinations <span className="text-red-500">*</span></label>
                                    <div className="space-y-2">
                                        <input type="text" placeholder="Option 1" className="w-full border border-gray-300 p-2 rounded-4xl" />
                                        <input type="text" placeholder="Option 2" className="w-full border border-gray-300 p-2 rounded-4xl" />
                                        <input type="text" placeholder="Option 3" className="w-full border border-gray-300 p-2 rounded-4xl" />
                                    </div>

                                    <label>English Competency Level</label>
                                    <select className="w-full border border-gray-300 p-2 rounded-4xl text-gray-500 cursor-pointer">
                                        <option value="" disabled selected>Select Level</option>
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Advanced</option>
                                        <option>Native</option>
                                    </select>
                                </div>
                            )}

                            {/* Step 3: Additional Details */}
                            {step === 3 && (
                                <div className="space-y-7 text-sm">
                                    <label>Message to IGL (If Any)</label>
                                    <textarea placeholder="Enter your message" className="w-full border border-gray-300 p-2 rounded-4xl"></textarea>
                                    <div className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                                        <label>I Agree To Be Contacted By IGL Regarding My Study Abroad Application.</label>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8">
                                {step < 3 ? (
                                    <button
                                        onClick={nextStep}
                                        className="w-full px-4 py-2 cursor-pointer rounded-4xl bg-white text-black border border-black hover:bg-black hover:text-white transition-colors"
                                    >
                                        Next Step →
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleSubmit}
                                        className="w-full px-4 py-2 rounded-4xl bg-black text-white cursor-pointer"
                                    >
                                        Get My Free Assessment
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default RegistrationForm;