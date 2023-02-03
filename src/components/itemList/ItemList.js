import Item from "../item/Item";
import ScrollToTop from "react-scroll-to-top";

import "./ItemList.css";

const ItemList = (props) => {
  function CoolPage() {
    return (
      <div>
        <ScrollToTop color="black" smooth />
      </div>
    );
  }
  return (
    <section className="container row mx-auto ItemContainer">
      {props.products.map((product) => (
        <Item key={product.id} data={product} />
      ))}
      {CoolPage()}
    </section>
  );
};

export default ItemList;
