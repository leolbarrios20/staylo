import "./ItemDetailContainer.css";

import ItemDetail from "../itemDetail/ItemDetail";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch('../db.json')
    .then(res=>res.json())
    .then(data=>setProduct(data.products.find((item) => item.id === parseInt(productId))))
  }, [productId]);

  return (
    <section>
      <Link to="/products" className="Back">
        <BsFillArrowLeftCircleFill color="black" size={30}/>
      </Link>
      <div className="container col-12">
        <ItemDetail item={product} />
      </div>
    </section>
  );
};

export default ItemDetailContainer;
