import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import chooseImage from "../assets/choose.jpg";


const faqs = [
    {
        title: "Personalized Counseling",
        content:
            "We understand your goals and help you choose the best study destination and university that aligns with your aspirations.",
    },
    {
        title: "Top University Matches",
        content:
            "Get recommendations for top universities that suit your profile, budget, and career goals.",
    },
    {
        title: "Visa Assistance",
        content:
            "Step-by-step guidance on the visa application process to ensure a hassle-free experience.",
    },
    {
        title: "Scholarships & Financial Aid",
        content:
            "Find and apply for scholarships that reduce your financial burden while studying abroad.",
    },
    {
        title: "Pre & Post-Departure Support",
        content:
            "Guidance on travel arrangements, accommodation, and adjusting to a new environment.",
    },
    {
        title: "IELTS & Language Training",
        content:
            "Improve your language skills with expert coaching for IELTS and other language proficiency exams.",
    },
];

const WhyChooseUs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center">
                <div className="flex items-center pt-10">
                    <div className="w-20 border-t border-gray-500"></div>
                    <h3 className="text-gray-500 text-xl uppercase tracking-wide ml-3">
                        Why Choose Us
                    </h3>
                </div>
                <h2 className="text-4xl text-gray-800 font-base mt-5 text-left">
                    Making Your Education Journey Smooth And Successful
                </h2>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-start gap-10">
                {/* Left Image Section */}

                <div className="w-full md:w-1/2">
                    <img
                        src={chooseImage}
                        alt="Counseling Session"
                        className="rounded-xl w-full h-[630px] object-cover"
                    />
                </div>


                {/* Right FAQ Section */}
                <div className="w-full md:w-1/2">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300">
                            <button
                                className="flex justify-between items-center w-full py-9 text-2xl font-medium text-left"
                                onClick={() => toggleAccordion(index)}
                            >
                                {faq.title}
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-600" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-600" />
                                )}
                            </button>

                            {/* Animated Content */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={
                                    openIndex === index
                                        ? { height: "auto", opacity: 1 }
                                        : { height: 0, opacity: 0 }
                                }
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <p className="text-gray-600 pb-4 px-2">{faq.content}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
