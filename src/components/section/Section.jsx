import './Section'

function Section({ id, title, content }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <div>{content}</div>
    </section>
  );
}

export default Section;
