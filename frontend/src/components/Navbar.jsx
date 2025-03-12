import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="absolute z-50 top-0 left-0 w-full p-6 md:p-12 bg-transparent text-white">
            <div className="flex justify-between items-center w-full">
                {/* Logo - clickable */}
                <div className="text-white text-2xl font-bold cursor-pointer">
                    IGLLOGO
                </div>


                {/* Navigation links - hidden on mobile and tablet (md) views */}
                <div className="hidden lg:flex justify-center items-center flex-grow">
                    <ul className="flex space-x-12 text-white cursor-pointer">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `text-sm md:text-sm hover:underline ${isActive ? "underline font-semibold" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/aboutus"
                                className={({ isActive }) =>
                                    `text-sm md:text-sm hover:underline ${isActive ? "underline font-semibold" : ""}`
                                }
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/countries"
                                className={({ isActive }) =>
                                    `text-sm md:text-sm hover:underline ${isActive ? "underline font-semibold" : ""}`
                                }
                            >
                                Countries
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/universities"
                                className={({ isActive }) =>
                                    `text-sm md:text-sm hover:underline ${isActive ? "underline font-semibold" : ""}`
                                }
                            >
                                Universities
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contactus"
                                className={({ isActive }) =>
                                    `text-sm md:text-sm hover:underline ${isActive ? "underline font-semibold" : ""}`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>





                {/* Register button - hidden for tablet and mobile views */}
                <div className="hidden lg:block">
                    <button className="px-4 py-2 rounded-full border border-white text-white cursor-pointer bg-opacity-90 backdrop-blur-2xl">
                        Register With Us
                    </button>
                </div>


                {/* Hamburger Menu Icon for mobile and tablet */}
                <div className="sm:block md:block lg:hidden cursor-pointer" onClick={toggleMenu}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </div>


                {/* Mobile Dropdown Menu (Visible when hamburger is clicked) */}
                <div
                    className={`absolute top-full left-0 w-full bg-opacity-90 backdrop-blur-lg p-6 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                        } lg:hidden`}  // Sh
                >
                    <ul className="flex flex-col space-y-4 text-white">
                        {["Home", "About Us", "Countries", "Universities", "Contact Us"].map((item) => (
                            <li key={item}>
                                <a href="#" className="hover:underline" onClick={() => setIsOpen(false)}>
                                    {item}
                                </a>
                            </li>
                        ))}

                        <button
                            className="px-4 py-2 rounded-full border border-white text-white cursor-pointer 
                    bg-opacity-90 backdrop-blur-2xl w-full text-center mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            Register With Us
                        </button>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
