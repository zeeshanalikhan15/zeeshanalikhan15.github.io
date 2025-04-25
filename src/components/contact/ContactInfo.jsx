import './ContactInfo.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { contactInfoData } from '../../data/data';

function ContactInfo() {
  return (
    <section id="contact" className="my-8 p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">{contactInfoData.heading}</h2>
      <p className="text-base text-center text-gray-600 mb-6">{contactInfoData.description}</p>
      <div className="flex flex-col items-center space-y-4">
        <a href={`mailto:${contactInfoData.email}`} className="flex items-center text-gray-700 hover:text-blue-600">
          <FaEnvelope className="text-2xl mr-2 text-red-600" />
          <span className="text-lg">{contactInfoData.email}</span>
        </a>
        <a href={contactInfoData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600">
          <FaLinkedin className="text-2xl mr-2 text-blue-700" />
          <span className="text-lg">{contactInfoData.linkedinText}</span>
        </a>
        <a href={contactInfoData.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600">
          <FaGithub className="text-2xl mr-2 text-black" />
          <span className="text-lg">{contactInfoData.githubText}</span>
        </a>
      </div>
    </section>
  );
}

export default ContactInfo;
