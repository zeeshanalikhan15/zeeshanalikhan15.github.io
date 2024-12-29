import './ContactInfo.css'
import Section from '../section/Section'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function ContactInfo() {
  return (
    <section id="contact" className="my-8 p-6 bg-gray-500 shadow-md rounded-lg">
      <h2 className="text-4xl font-bold mb-6 bg-gray-500 p-2 rounded-md text-white text-center">Get in Touch</h2>
      <div className="space-y-10">
        <div className="relative bg-white p-8 rounded-md shadow-md text-left">
          <div className="section-content">
            <p className="section-description mb-6 text-sm sm:text-base md:text-lg text-gray-700 text-left">Feel free to reach out to me through any of the following platforms:</p>
            <div className="contact-details flex flex-col items-start">
              <div className="contact-item mb-6 flex items-center">
                <FaEnvelope className="text-xl sm:text-2xl text-gray-800 mr-2" />
                <p><a href="mailto:ZeeshanAliKhan15@gmail.com" className="contact-link text-sm sm:text-lg text-blue-600 hover:underline ml-2">ZeeshanAliKhan15@gmail.com</a></p>
              </div>
              <div className="contact-item mb-6 flex items-center">
                <FaLinkedin className="text-xl sm:text-2xl text-gray-800 mr-2" />
                <p><a href="https://www.linkedin.com/in/zeeshanalikhan15/" className="contact-link text-sm sm:text-lg text-blue-600 hover:underline ml-2">linkedin.com/in/zeeshanalikhan15</a></p>
              </div>
              <div className="contact-item mb-6 flex items-center">
                <FaGithub className="text-xl sm:text-2xl text-gray-800 mr-2" />
                <p><a href="https://github.com/zeeshanalikhan15" className="contact-link text-sm sm:text-lg text-blue-600 hover:underline ml-2">github.com/zeeshanalikhan15</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
