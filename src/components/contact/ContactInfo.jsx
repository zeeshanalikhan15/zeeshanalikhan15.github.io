import './ContactInfo.css'
import Section from '../section/Section'

function ContactInfo() {
  return (<Section
          id="contact"
          title="Contact"
          content= {          
            <div className="contact-info">
              <p>Email: ZeeshanAliKhan15@gmail.com</p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/zeeshanalikhan15/">https://www.linkedin.com/in/zeeshanalikhan15/</a></p>
              <p>GitHub: <a href="https://github.com/zeeshanalikhan15">https://github.com/zeeshanalikhan15</a></p>
          </div>}
          />
      );
}
export default ContactInfo;
