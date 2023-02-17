import Item from "../item/Item";

import "./ItemList.css";

const ItemList = (props) => {
  function ScrollToTop(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
  function CoolPage() {
    return (
      <div>
        <ScrollToTop color="black" smooth />
      </div>
    );
  }
  return (
    <section className="container row mx-auto ItemContainer">
      {ScrollToTop()}
      {props.products.map((product) => (
        <Item key={product.id} data={product} />
      ))}
      {CoolPage()}
      
    </section>
  );
};

export default ItemList;
