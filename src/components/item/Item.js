//Imports

import "./Item.css";

import ItemHeart from "../itemHeart/ItemHeart";

import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";

//Logic

export const Item = (props) => {
  const { title, price, priceBefore, img, id } = props.data;

  return (
    <div className="col-lg-4 col-md-6 mt-3">
      <Card className="Card">
        <Card.Title className="CardTitle">{title}</Card.Title>
        <Card.Img className="Image" src={img} />
        <Card.Body>
          <div className="PriceHeart">
            <Card.Text className="CardPriceBefore">
              Antes: {priceBefore}{" "}
            </Card.Text>
            <ItemHeart />
          </div>
          <Card.Text className="CardPrice">${price.toFixed(2)} </Card.Text>
          <Card.Text className="CardDesc"> </Card.Text>
          <Link to={`/product/${id}`} className="Link">
            <Button variant="dark">Ver detalle del producto</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

//Exports
export default Item;
