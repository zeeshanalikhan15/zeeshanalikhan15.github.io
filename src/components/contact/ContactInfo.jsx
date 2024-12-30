import './ContactInfo.css'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { contactInfoData } from '../../data/data';

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
                <p><a href={`mailto:${contactInfoData.email}`} className="contact-link text-sm sm:text-lg text-blue-600 hover:underline ml-2">{contactInfoData.email}</a></p>
              </div>
              <div className="contact-item mb-6 flex items-center">
                <FaLinkedin className="text-xl sm:text-2xl text-gray-800 mr-2" />
                <p><a href={contactInfoData.linkedin} className="contact-link text-sm sm:text-lg text-blue-600 hover:underline ml-2">{contactInfoData.linkedin}</a></p>
              </div>
              <div className="contact-item mb-6 flex items-center">
                <FaGithub className="text-xl sm:text-2xl text-gray-800 mr-2" />
                <p><a href={contactInfoData.github} className="contact-link text-sm sm:text-lg text-blue-600 hover:underline ml-2">{contactInfoData.github}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
