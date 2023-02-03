
import { useState } from "react";


import "./ItemCount.css"

export const ItemCount = (props) => {

  


  const [count, setCount] = useState(0);

  const add = () => {
    if (count < props.stock) {
      setCount(count + 1);
      props.guardarCantidadAComprar(count)

      console.log(count)
    }
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
      props.guardarCantidadAComprar(count)
      console.log(count)
      console.log(props.data.price)
    }
  };



  return (
    <div className="CountContainer">
      <div className="BoxCount">
        <button className="Subtract" onClick={subtract}>
          -
        </button>
        <span>{count}</span>
        <button className="Add" onClick={add}>
          +
        </button>
      </div>
    </div>
  );
};

//Exports
export default ItemCount;
