import './ContactInfo.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { contactInfoData } from '../../data/data';

function ContactInfo() {
  return (
    <section id="contact" className="mt-20 py-20 bg-black/40 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-white">{contactInfoData.heading}</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">{contactInfoData.description}</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <a href={`mailto:${contactInfoData.email}`} className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
            <FaEnvelope className="text-2xl text-gray-400 group-hover:text-primary transition-colors" />
            <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{contactInfoData.email}</span>
          </a>
        </div>

        <div className="flex justify-center gap-8">
          <a href={contactInfoData.linkedin} target="_blank" rel="noopener noreferrer" className="group p-4 rounded-full bg-white/5 hover:bg-[#0077b5]/20 hover:scale-110 transition-all duration-300 border border-white/5 hover:border-[#0077b5]/50">
            <FaLinkedin className="text-3xl text-gray-400 group-hover:text-[#0077b5] transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={contactInfoData.github} target="_blank" rel="noopener noreferrer" className="group p-4 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/5 hover:border-white/50">
            <FaGithub className="text-3xl text-gray-400 group-hover:text-white transition-colors" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>

        <p className="mt-16 text-sm text-gray-600">
          © {new Date().getFullYear()} Zeeshan Ali Khan. All rights reserved.
          <br />
          Designed with <span className="text-accent animate-pulse">❤</span> and React.
        </p>
      </div>
    </section>
  );
}

export default ContactInfo;
