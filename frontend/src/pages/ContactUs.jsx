const ContactUs = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
                <p className="mt-4 text-gray-600">Have any questions? Reach out to us!</p>
                <div className="mt-6">
                    <p className="text-gray-700"><strong>Email:</strong> info@example.com</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +123 456 7890</p>
                    <p className="text-gray-700"><strong>Address:</strong> 123, University Street, Education City</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
