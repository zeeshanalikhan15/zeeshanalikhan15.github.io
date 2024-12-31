import './ContactInfo.css'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { contactInfoData } from '../../data/data';

function ContactInfo() {
  return (
    <section id="contact" className="my-8 p-6 bg-gray-500 shadow-md rounded-lg">
      <h2 className="text-4xl font-bold mb-6 bg-gray-500 p-2 rounded-md text-white text-center">{contactInfoData.heading}</h2>
      <div className="space-y-10">
        <div className="relative bg-white p-8 rounded-md shadow-md text-left lg:text-center">
          <div className="section-content">
            <p className="section-description mb-6 text-sm sm:text-base md:text-lg text-gray-700 text-center">{contactInfoData.description}</p>
            <div className="contact-details flex flex-col items-center lg:ml-32">
              <div className="contact-item mb-6 flex items-center justify-center w-full">
                <div className="flex items-center justify-start w-full max-w-md">
                  <FaEnvelope className="text-xl sm:text-2xl text-gray-800 mr-2" />
                  <p className="break-words"><a href={`mailto:${contactInfoData.email}`} className="contact-link text-sm sm:text-lg text-blue-600 hover:underline ml-2 break-all">{contactInfoData.email}</a></p>
                </div>
              </div>
              <div className="contact-item mb-6 flex items-center justify-center w-full">
                <div className="flex items-center justify-start w-full max-w-md">
                  <FaLinkedin className="text-xl sm:text-2xl text-gray-800 mr-2" />
                  <p className="break-words"><a href={contactInfoData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link text-sm sm:text-lg text-blue-600 hover:underline ml-2 break-all">{contactInfoData.linkedinText}</a></p>
                </div>
              </div>
              <div className="contact-item mb-6 flex items-center justify-center w-full">
                <div className="flex items-center justify-start w-full max-w-md">
                  <FaGithub className="text-xl sm:text-2xl text-gray-800 mr-2" />
                  <p className="break-words"><a href={contactInfoData.github} target="_blank" rel="noopener noreferrer" className="contact-link text-sm sm:text-lg text-blue-600 hover:underline ml-2 break-all">{contactInfoData.githubText}</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
