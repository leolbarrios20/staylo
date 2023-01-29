import "./Background.css"

const Background = (props) => {
  return (
    <section className="Background">
      <h1>{props.brand}</h1>
      <h2>{props.specs}</h2>
    </section>
  );
};

export default Background; 