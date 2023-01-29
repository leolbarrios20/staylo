import ItemList from "../itemList/ItemList";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { IoShirtOutline } from "react-icons/io5";
import { IoShirtSharp } from "react-icons/io5";
import{GiHoodie} from "react-icons/gi"

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';




import "../itemList/ItemList.css";
import "../itemListContainer/ItemListContainer.css"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    fetch("../db.json")
      .then((res) => res.json())
      .then((json) => {
        if (categoryId) {
          setProducts(
            json.products.filter((product) => product.category === categoryId)
          );
        } else {
          setProducts(json.products);
        }
      });
  }, [categoryId]);

  return (
    <section>
      <nav className="NavFilter container mx-auto">
      <OverlayTrigger overlay={<Tooltip >Remeras Sublimadas</Tooltip>}>
      <span className="d-inline-block">
      <Link to="/products/Sublimated"><IoShirtOutline color="black" size={31}/></Link>
      </span>
    </OverlayTrigger>
    <OverlayTrigger overlay={<Tooltip >Remeras Estampadas</Tooltip>}>
      <span className="d-inline-block">
      <Link to="/products/Stamped"><IoShirtSharp color="black"  size={31}/></Link>
      </span>
    </OverlayTrigger>
    <OverlayTrigger overlay={<Tooltip >Buzos</Tooltip>}>
      <span className="d-inline-block">
      <Link to="/products/Hoodie"><GiHoodie color="black" size={31}/></Link>
      </span>
    </OverlayTrigger>
    <OverlayTrigger overlay={<Tooltip >Todos los productos</Tooltip>}>
      <span className="d-inline-block">
      <Link to="/products/">Todos los productos</Link>
      </span>
    </OverlayTrigger>
      </nav>
    {
      /*
              <nav className="NavFilter container row mx-auto">
        <ul>
          <li>
            <Link to="/products/Sublimated"><IoShirtOutline size={31}/></Link>
            <Link to="/products/Stamped"><IoShirtSharp size={31}/></Link>
            <Link to="/products/Hoodie"><GiHoodie size={31}/></Link>
            <Link to="/products/">Todos los productos</Link>
          </li>
        </ul>
      </nav>
      */ 
    }

      <ItemList products={products}/>
    </section>
  );
};

export default ItemListContainer;
