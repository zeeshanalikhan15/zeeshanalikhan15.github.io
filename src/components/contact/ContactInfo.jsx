import './ContactInfo.css'
import Section from '../section/Section'

function ContactInfo() {
  return (
    <section id="contact" className="my-8 p-6 bg-gray-500 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 bg-gray-500 p-2 rounded-md">Get in Touch</h2>
      <div className="space-y-10">
        <div className="relative bg-white p-8 rounded-md shadow-md text-left">
          <div className="section-content">
            <p className="section-description mb-4">Feel free to reach out to me through any of the following platforms:</p>
            <div className="contact-details">
              <div className="contact-item mb-4">
                <h3 className="contact-label mb-2">Email</h3>
                <p><a href="mailto:ZeeshanAliKhan15@gmail.com" className="contact-link">ZeeshanAliKhan15@gmail.com</a></p>
              </div>
              <div className="contact-item mb-4">
                <h3 className="contact-label mb-2">LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/zeeshanalikhan15/" className="contact-link">linkedin.com/in/zeeshanalikhan15</a></p>
              </div>
              <div className="contact-item mb-4">
                <h3 className="contact-label mb-2">GitHub</h3>
                <p><a href="https://github.com/zeeshanalikhan15" className="contact-link">github.com/zeeshanalikhan15</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
