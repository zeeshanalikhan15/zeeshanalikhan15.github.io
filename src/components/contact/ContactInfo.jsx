import './ContactInfo.css'
import upIcon  from '../../assets/up-arrow.png'

function ContactInfo() {
  return (
    <section id="contact">
      <div className="contact-info">
        <h2>
          Contact
          <a href="#main-header">
            <img style={{ width: '40px', height: '40px' }} src={upIcon} alt="Scroll to top" />
          </a>
        </h2>
        <p>Email: ZeeshanAliKhan15@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/zeeshanalikhan15/">https://www.linkedin.com/in/zeeshanalikhan15/</a></p>
        <p>GitHub: <a href="https://github.com/zeeshanalikhan15">https://github.com/zeeshanalikhan15</a></p>
      </div>
    </section>
  );
}

export default ContactInfo;
