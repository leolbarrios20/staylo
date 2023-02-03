import ItemList from "../itemList/ItemList";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import { IoShirtOutline } from "react-icons/io5";
import { IoShirtSharp } from "react-icons/io5";
import { GiHoodie } from "react-icons/gi";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "../itemList/ItemList.css";
import "../itemListContainer/ItemListContainer.css";

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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <section>
      {loading ? (
        <div className="SpinnerContainer">
          <Spinner />
        </div>
      ) : (
        <div>
          <nav className="NavFilter container mx-auto">
            <OverlayTrigger overlay={<Tooltip>Remeras Sublimadas</Tooltip>}>
              <span className="d-inline-block">
                <Link to="/products/Sublimated">
                  <IoShirtOutline color="black" size={31} />
                </Link>
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>Buzos</Tooltip>}>
              <span className="d-inline-block">
                <Link to="/products/Hoodie">
                  <GiHoodie color="black" size={31} />
                </Link>
              </span>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip>Remeras Estampadas</Tooltip>}>
              <span className="d-inline-block">
                <Link to="/products/Stamped">
                  <IoShirtSharp color="black" size={31} />
                </Link>
              </span>
            </OverlayTrigger>
          </nav>
          <ItemList products={products} />
        </div>
      )}
    </section>
  );
};

export default ItemListContainer;
