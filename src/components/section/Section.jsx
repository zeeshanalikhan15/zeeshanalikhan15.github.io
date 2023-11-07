import './Section.css'
import upIcon  from '../../assets/up-arrow.png'

function Section({ id, title, content }) {
  return (
    <section id={id}>
      <h2>{title}
        <a href="#main-header">
          <img style={{ width: '40px', height: '40px' }} src={upIcon} alt="Scroll to top" />
        </a>
      </h2>
      <div>{content}</div>
    </section>
  );
}

export default Section;
