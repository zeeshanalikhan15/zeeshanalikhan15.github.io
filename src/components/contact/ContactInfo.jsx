import './ContactInfo.css'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { contactInfoData } from '../../data/data';

function ContactInfo() {
  return (
    <section id="contact" className="my-8 p-6 bg-matrix-bg shadow-md rounded-lg">
      <h2 className="text-6xl font-bold mb-6 bg-matrix-bg p-2 rounded-md text-matrix-green matrix-font text-center">{contactInfoData.heading}</h2>
      <div className="space-y-10">
        <div className="relative bg-gray-900 p-8 rounded-md shadow-md text-left lg:text-center">
          <div className="section-content">
            <p className="section-description mb-6 text-3xl sm:text-4xl md:text-5xl text-matrix-green matrix-font text-center">{contactInfoData.description}</p>
            <div className="contact-details flex flex-col items-center lg:ml-32">
              <div className="contact-item mb-6 flex items-center justify-center w-full">
                <div className="flex items-center justify-start w-full max-w-md">
                  <FaEnvelope className="text-3xl sm:text-4xl text-matrix-green mr-2" />
                  <p className="break-words"><a href={`mailto:${contactInfoData.email}`} className="contact-link text-3xl sm:text-4xl text-matrix-green hover:underline ml-2 break-all">{contactInfoData.email}</a></p>
                </div>
              </div>
              <div className="contact-item mb-6 flex items-center justify-center w-full">
                <div className="flex items-center justify-start w-full max-w-md">
                  <FaLinkedin className="text-3xl sm:text-4xl text-matrix-green mr-2" />
                  <p className="break-words"><a href={contactInfoData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link text-3xl sm:text-4xl text-matrix-green hover:underline ml-2 break-all">{contactInfoData.linkedinText}</a></p>
                </div>
              </div>
              <div className="contact-item mb-6 flex items-center justify-center w-full">
                <div className="flex items-center justify-start w-full max-w-md">
                  <FaGithub className="text-3xl sm:text-4xl text-matrix-green mr-2" />
                  <p className="break-words"><a href={contactInfoData.github} target="_blank" rel="noopener noreferrer" className="contact-link text-3xl sm:text-4xl text-matrix-green hover:underline ml-2 break-all">{contactInfoData.githubText}</a></p>
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
