
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="bg-indigo-800 p-10">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-5">Contact Me</h2>
                <p className="text-white mb-10">Feel free to reach out to me through any of the platforms below.</p>
            </div>
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600">kis.sap759@gmail.com</p>
                </div>
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+977-9805234759</p>
                </div>
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Follow Me</h3>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="https://web.facebook.com/prabin.sapkota.75436" className="text-indigo-600 hover:text-indigo-800">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.instagram.com/10_kismat/" className="text-indigo-600 hover:text-indigo-800">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/prabin-sapkota-22993a309/" className="text-indigo-600 hover:text-indigo-800">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://github.com/PrabinsSapkota" className="text-indigo-600 hover:text-indigo-800">
                            <FaGithub size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
