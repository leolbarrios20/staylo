import "./ItemDetailContainer.css";

import ItemDetail from "../itemDetail/ItemDetail";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";


import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const queryRef = doc(db, "productsList", productId);
      const response = await getDoc(queryRef);
      const newDoc = {
        id: response.id,
        ...response.data(),
      };
      setProduct(newDoc);
    };
    getProduct();
  }, [productId]);

  function CoolPage() {
    return (
      <div>
        <ScrollToTop  smooth />
      </div>
    );
  }

  return (
    <section>
      {CoolPage()}
      <Link to="/products" className="Back">
        <BsFillArrowLeftCircleFill color="black" size={30} />
      </Link>
      <div className="container col-12">
        <ItemDetail item={product} />
      </div>
    </section>
  );
};

export default ItemDetailContainer;
