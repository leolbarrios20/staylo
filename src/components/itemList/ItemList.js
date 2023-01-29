import Item from "../item/Item";

import "./ItemList.css";

const ItemList = (props) => {
  return (
    <section className="container row mx-auto ItemContainer">
      {props.products.map((product) => (
        <Item key={product.id} data={product} />
      ))}
    </section>
  );
};

export default ItemList;
