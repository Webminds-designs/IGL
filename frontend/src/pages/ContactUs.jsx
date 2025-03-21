import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';


const ContactForm = () => {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="w-full max-w-3xl text-center mb-8 pt-20 md:pt-40">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">We're Here To Help!</h2>
                    <p className="text-gray-600 text-base sm:text-lg mt-4 px-4">
                        Got Questions About Studying Abroad? Our Team Is Ready To Assist You. Reach
                        Out To Us Via Phone, Email, Or Visit Our Office—We'd Love To Hear From You!
                    </p>
                </div>

                {/* Form Container */}
                <div className="w-full max-w-5xl mt-10 mb-20 mx-auto p-4 sm:p-8 lg:p-12 border border-gray-300 rounded-3xl">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Side - Form */}
                        <div className="flex-1 w-full">
                            <label className="block text-gray-700 font-medium">Full Name <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Enter your full name"
                                className="w-full p-2 sm:p-3 text-sm mt-1 border border-gray-200 rounded-3xl" />

                            <label className="block text-gray-700 font-medium mt-4">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" placeholder="Enter your email address"
                                className="w-full p-2 sm:p-3 text-sm mt-1 border border-gray-200 rounded-3xl" />

                            <label className="block text-gray-700 font-medium mt-4">Message</label>
                            <textarea placeholder="Message"
                                className="w-full p-3 mt-1 border border-gray-200 rounded-3xl h-28" />

                            <div className="flex items-center justify-center lg:justify-start mt-6">
                                <button className="w-full max-w-[200px] bg-black text-white px-2 py-2 rounded-3xl hover:bg-gray-800 transition-colors">
                                    Send
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Info */}
                        <div className="flex-1 bg-black text-white rounded-2xl p-6 sm:p-8">
                            <h3 className="text-xl font-base">Info</h3>
                            <div className="mt-7 space-y-4">
                                <p className="flex items-center space-x-4 sm:space-x-6">
                                    <MdEmail className="text-xl sm:text-2xl" />
                                    <span>email@gmail.com</span>
                                </p>
                                <p className="flex items-center space-x-4 sm:space-x-6">
                                    <MdPhone className="text-xl sm:text-2xl" />
                                    <span>+427755666</span>
                                </p>
                                <p className="flex items-center space-x-4 sm:space-x-6">
                                    <MdLocationOn className="text-xl sm:text-2xl" />
                                    <span>Location</span>
                                </p>
                            </div>

                            {/* Social Icons */}
                            <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-7 mt-12 sm:mt-20">
                                <a
                                    href="https://facebook.com/yourpage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    <FaFacebookSquare className="text-xl sm:text-2xl cursor-pointer text-black" />
                                </a>
                                <a
                                    href="https://instagram.com/yourpage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    <FaInstagram className="text-xl sm:text-2xl cursor-pointer text-black" />
                                </a>
                                <a
                                    href="https://twitter.com/yourpage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    <FaTwitter className="text-xl sm:text-2xl cursor-pointer text-black" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactForm;
