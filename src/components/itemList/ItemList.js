import Item from "../item/Item";


import "./ItemList.css";

const ItemList = (props) => {
  function ScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <section className="container row mx-auto ItemContainer">
      {ScrollToTop()}
      {props.products.map((product) => (
        <Item key={product.id} data={product} />
      ))}
     
    </section>
  );
};

export default ItemList;
