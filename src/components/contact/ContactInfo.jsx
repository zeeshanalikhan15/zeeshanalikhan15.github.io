import './ContactInfo.css'
import Section from '../section/Section'

function ContactInfo() {
  return (
    <section id="contact" className="my-8 p-4 bg-gray-500 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <div className="space-y-8">
        <div className="relative bg-white p-6 rounded-md shadow-md">
          <div className="section-content">
            <p className="section-description">Feel free to reach out to me through any of the following platforms:</p>
            <div className="contact-details">
              <div className="contact-item">
                <h3 className="contact-label">Email</h3>
                <p><a href="mailto:ZeeshanAliKhan15@gmail.com" className="contact-link">ZeeshanAliKhan15@gmail.com</a></p>
              </div>
              <div className="contact-item">
                <h3 className="contact-label">LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/zeeshanalikhan15/" className="contact-link">linkedin.com/in/zeeshanalikhan15</a></p>
              </div>
              <div className="contact-item">
                <h3 className="contact-label">GitHub</h3>
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
