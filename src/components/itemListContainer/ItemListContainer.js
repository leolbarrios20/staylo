import ItemList from "../itemList/ItemList";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import { IoShirtOutline } from "react-icons/io5";
import { IoShirtSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { GiHoodie } from "react-icons/gi";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "../itemList/ItemList.css";
import "../itemListContainer/ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const queryRef = categoryId
        ? query(
            collection(db, "productsList"),
            where("category", "==", categoryId)
          )
        : collection(db, "productsList");

      // hacer la consulta
      const response = await getDocs(queryRef);
      const docsInfo = response.docs.map((doc) => {
        const newDoc = {
          id: doc.id,
          ...doc.data(),
        };
        return newDoc;
      });
      setProducts(docsInfo);
    };
    getData();
  }, [categoryId]);

  const [loading, setLoading] = useState(false);

  function CoolPage() {
    return (
      <div>
        <ScrollToTop  smooth />
      </div>
    );
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <section>
       {CoolPage()}
      {loading ? (
        <div className="SpinnerContainer">
          <Spinner />
        </div>
      ) : (
        <div>
          <nav className="NavFilter container mx-auto">
            <div className="FilterFlex">
              <h6>FILTRAR </h6>
              <BsArrowRight className="" size={25} />
            </div>

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
