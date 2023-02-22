import React, { useState, useContext, useEffect } from "react";
import { GContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

import Select from "react-select";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import CartItem from "../cart/CartItem";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { BsInstagram, BsFacebook } from "react-icons/bs";

// Estilos
import "./Form.css";

// Función constructora
const BuyForm = () => {


  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Felicitaciones!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Pedido realizado con éxito</h5>
          <p className="ModalParagraph">
            Comprador: <span>{orderData.buyer.name}</span>
          </p>
          <p className="ModalParagraph">
            Su código de orden es: <span>{orderId}</span>
          </p>
          <p className="ModalParagraph">
            Recibirás toda la información de pago en tu correo:{" "}
            <span>{orderData.buyer.email}</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/products" className="seguir_comprando">
            Seguir Comprando
          </Link>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [paymenthMethod, setPaymenthMethod] = useState();

  const handleSelectChange = ({ value }) => {
    console.log(value);
    setPaymenthMethod(value);
  };

  const paymenths = [
    { label: "Mercado Pago", value: "Mercado Pago" },
    { label: "Tarjeta de débito", value: "Tarjeta de débito" },
    { label: "Tarjeta de crédito", value: "Tarjeta de crédito" },
    { label: "Pago Fácil (efectivo)", value: "Pago Fácil" },
    { label: "Rapi Pago (efectivo)", value: "Rapi Pago" },
  ];

  const { itemsCarrito, getTotal, clear } = useContext(GContext);

  const [orderId, setOrderId] = useState(undefined);

  const [orderData, setOrderData] = useState();

  const [formSend, setFormSend] = useState(false);

  const [length, setLength] = useState(true);

  const sendOrder = async (order) => {
    const queryRef = collection(db, "orders");
    const response = await addDoc(queryRef, order);
    setOrderId(response.id);
    clear();
  };

  useEffect(() => {
    if (itemsCarrito.length === 0) {
      setTimeout(() => {
        setLength(false);
      }, 8000);
    } else {
      setLength(true);
    }
  }, [itemsCarrito]);

  const [modalShow, setModalShow] = React.useState(false);

  function ScrollTotop( ) {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        province: "",
        street: "",
        location: "",
        number: "",
        postal: "",
        paymenthMethod: "",
        facturation: "",
        facturationData: "",
      }}
      validate={(values) => {
        // validaciones de los datos que ingreso el usuario
        let errors = {};

        // ERROR NOMBRE
        if (!values.name) {
          errors.name = "Por favor, ingresa un nombre y apellido.";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,25}$/.test(values.name)) {
          errors.name = "Solo deben ingresarse letras o espacios.";
        }

        // ERROR TELEFONO
        if (!values.phone) {
          errors.phone = "Por favor, ingresa un número de teléfono.";
        } else if (
          !/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(
            values.phone
          )
        ) {
          errors.phone = "El número no es válido.";
        }

        // ERROR EMAIL
        if (!values.email) {
          errors.email = "Por favor, ingresa un email.";
        } else if (
          //eslint-disable-next-line
          !/^(([^<>()[\].,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            values.email
          )
        ) {
          errors.email = "El email no es válido.";
        }

        // ERROR PROVINCIA
        if (!values.province) {
          errors.province = "Por favor, ingresa una provincia.";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.province)) {
          errors.province = "Solo deben ingresarse letras o espacios.";
        }

        // ERROR PROVINCIA
        if (!values.location) {
          errors.location = "Por favor, ingresa una localidad.";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.location)) {
          errors.location = "Solo deben ingresarse letras o espacios.";
        }

        // ERROR PROVINCIA
        if (!values.street) {
          errors.street = "Por favor, ingresa una calle.";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.street)) {
          errors.street = "Solo deben ingresarse letras o espacios.";
        }

        // ERROR NÚMERO DE CALLE
        if (!values.number) {
          errors.number = "Por favor, ingresa el número de la calle.";
        } else if (!/^[0-9]{1,5}$/.test(values.number)) {
          errors.number = "El número no es valido.";
        }

        // ERROR CODIGO POSTAL
        if (!values.postal) {
          errors.postal = "Por favor, ingresa el codigo postal.";
        } else if (!/^[0-9]{1,4}$/.test(values.postal)) {
          errors.postal = "El codigo postal no es valido.";
        }

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        // objeto con los items y datos del usuario
        const newOrder = {
          buyer: {
            name: values.name,
            phone: values.phone,
            email: values.email,
            province: values.province,
            location: values.location,
            street: values.street,
            numberStreet: values.number,
            postalCode: values.postal,
          },
          items: itemsCarrito,
          total: getTotal(),
        };
        setOrderData(newOrder);
        resetForm();
        sendOrder(newOrder);
        setFormSend(true);
      }}
    >
      {({ errors }) => (
        <Form className="container-fluid" id="form">
          {length ? (
            <div>
              {!formSend ? (
                <div>
                  {ScrollTotop()}
                  <div>
                    {/* TITULO */}
                    <h4 className="FinalBuy">Finalizar Compra:</h4>

                    <p className="BuyerDataParagraph">
                      Por favor, ingresá los datos del destinatario.
                    </p>

                    {/* FORMULARIO */}
                    <div className="Form col-lg-6 col-md-8 col-sm-12 mx-auto">
                      <div className="FormFlex">
                        <label className="DataReq">
                          <span>(*)</span> Nombre Y Apellido
                        </label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="on"
                          className="Label"
                        />
                        <ErrorMessage
                          name="name"
                          component={() => (
                            <div className="Error">{errors.name}</div>
                          )}
                        />
                      </div>

                      {/* Telefono */}

                      <div className="PhoneEmailLabel">
                        <div className="FormFlex">
                          <label className="DataReq">
                            <span>(*)</span> Telefono
                          </label>
                          <Field
                            type="number"
                            id="phone"
                            name="phone"
                            autoComplete="on"
                            className="Label"
                            placeholder="351 152525252"
                          />
                          <ErrorMessage
                            name="phone"
                            component={() => (
                              <div className="Error">{errors.phone}</div>
                            )}
                          />
                        </div>

                        {/* Email */}

                        <div className="FormFlex">
                          <label className="DataReq">
                            <span>(*)</span> Email
                          </label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="on"
                            className="Label"
                            placeholder="staylo@gmail.com"
                          />
                          <ErrorMessage
                            name="email"
                            component={() => (
                              <div className="Error">{errors.email}</div>
                            )}
                          />
                        </div>
                      </div>

                      {/*Provincia */}
                      <div className="PhoneEmailLabel">
                        <div className="FormFlex">
                          <label className="DataReq">
                            <span>(*)</span> Provincia
                          </label>
                          <Field
                            type="text"
                            id="province"
                            name="province"
                            autoComplete="on"
                            className="Label"
                            placeholder="Córdoba"
                          />
                          <ErrorMessage
                            name="province"
                            component={() => (
                              <div className="Error">{errors.province}</div>
                            )}
                          />
                        </div>
                        {/* Localidad */}
                        <div className="FormFlex">
                          <label className="DataReq">
                            <span>(*)</span> Localidad
                          </label>
                          <Field
                            type="text"
                            id="location"
                            name="location"
                            autoComplete="on"
                            className="Label"
                            placeholder="Córdoba"
                          />
                          <ErrorMessage
                            name="location"
                            component={() => (
                              <div className="Error">{errors.location}</div>
                            )}
                          />
                        </div>
                      </div>

                      {/* Calle */}
                      <div className="PhoneEmailLabel">
                        <div className="FormFlex">
                          <label className="DataReq">
                            <span>(*)</span> Calle
                          </label>
                          <Field
                            type="text"
                            id="street"
                            name="street"
                            autoComplete="on"
                            className="Label"
                            placeholder="Calle"
                          />
                          <ErrorMessage
                            name="street"
                            component={() => (
                              <div className="Error">{errors.street}</div>
                            )}
                          />
                        </div>
                        {/* Numero de Calle */}
                        <div className="FormFlex">
                          <label className="DataReq">
                            <span>(*)</span> Número
                          </label>
                          <Field
                            type="number"
                            id="number"
                            name="number"
                            autoComplete="on"
                            className="Label"
                            placeholder="1234"
                          />
                          <ErrorMessage
                            name="number"
                            component={() => (
                              <div className="Error">{errors.number}</div>
                            )}
                          />
                        </div>

                        {/* Codigo Postal */}
                        <div className="FormFlex">
                          <label className="DataReq">
                            <span>(*)</span> Codigo Postal
                          </label>
                          <Field
                            type="number"
                            id="postal"
                            name="postal"
                            autoComplete="on"
                            className="Label"
                            placeholder="5000"
                          />
                          <ErrorMessage
                            name="postal"
                            component={() => (
                              <div className="Error">{errors.postal}</div>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* Pago */}
                  <div>
                    {/* Selectores de Pago */}
                    <div>
                      {/* Metodo de Pago */}
                      <div>
                        <div className="paymenthflex">
                          <p>
                            <span>(*)</span> Metodo de Pago:
                          </p>
                          <p className="PaymenthParagraphInner">
                            {" "}
                            {paymenthMethod}{" "}
                          </p>
                        </div>

                        <div>
                          <div>
                            <p></p>
                            <Select
                              className="SelectForm"
                              defaultValue={{
                                label: "Seleccioná un metodo de pago",
                                value: "Tarjeta de débito",
                              }}
                              options={paymenths}
                              onChange={handleSelectChange}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Datos de Facturación */}
                    </div>
                    <hr />
                    {/* RESUMEN DE COMPRA */}
                    <div>
                      <div className="container row mx-auto ItemContainer">
                        {itemsCarrito.map((element) => (
                          <CartItem
                            key={element.item.id}
                            item={element.item}
                            quantity={element.quantity}
                            title={element.title}
                            price={element.price}
                          />
                        ))}
                      </div>
                      {/* TOTAL */}
                      <div className="FinalAmount">
                        <p>Monto final : ${getTotal()}</p>
                      </div>
                    </div>

                    {/* BOTON FINALIZAR COMPRA */}
                    <div className="ButtonFinalContainer">
                      <Button
                        className="ButtonFinal"
                        type="sumbit"
                        onClick={() => setModalShow(true)}
                      >
                        Finalizar Compra
                      </Button>

                      {formSend && (
                        <div>
                          <div>
                            <h4>¡Compra Exitosa!</h4>
                            <p>
                              {" "}
                              <span>Su código de orden es:</span> {orderId}
                            </p>
                            <hr />
                            {/* datos del usuario */}
                            <div>
                              <p>
                                Nombre: <span>{orderData.buyer.name}</span>
                              </p>
                              <p>
                                Telefono: <span>{orderData.buyer.phone}</span>
                              </p>
                              <p>
                                Email: <span>{orderData.buyer.email}</span>
                              </p>
                              <p>
                                Provincia:{" "}
                                <span>{orderData.buyer.province}</span>
                              </p>
                              <p>
                                Localidad:{" "}
                                <span>{orderData.buyer.location}</span>
                              </p>
                              <p>
                                Calle: <span>{orderData.buyer.street}</span>
                              </p>
                              <p>
                                Numero:{" "}
                                <span>{orderData.buyer.numberStreet}</span>
                              </p>
                              <p>
                                Codigo Postal:{" "}
                                <span>{orderData.buyer.postalCode}</span>
                              </p>
                            </div>
                            <hr className="linea_separativa" />
                            <div className="datos_buyer">
                              <p>
                                Total: <span>${orderData.total}</span>
                              </p>
                            </div>
                          </div>
                          <div className="seguir_comprando_contenedor">
                            <Link to="/products" className="seguir_comprando">
                              Seguir Comprando
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <>
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </>
                  <section className="EmptyCartContainer">
                    <div className="EmptyCart">
                      <p className=" OffCanvasP EmptyCartP">
                        El carrito de compras se encuentra vacio
                      </p>
                      <Link className="AddMoreProducts" to="/products">
                        <Button variant="dark">Agregar Productos</Button>
                      </Link>
                    </div>
                    <div className="FlexIconsCartContainer">
                      <p>Visita nuestras redes</p>
                      <div className="FlexIconsCart">
                        <a
                          href="https://www.instagram.com/staylo_cba/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <BsInstagram color="black" size={25} />
                        </a>
                        <a
                          href="https://www.facebook.com/search/top?q=staylo_cba"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <BsFacebook color="black" size={25} />
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </div>
          ) : (
            <section className="EmptyCartContainer">
              <div className="EmptyCart">
                <p className=" OffCanvasP EmptyCartP">
                  El carrito de compras se encuentra vacio
                </p>
                <Link className="AddMoreProducts" to="/products">
                  <Button variant="dark">Agregar Productos</Button>
                </Link>
              </div>
              <div className="FlexIconsCartContainer">
                <p>Visita nuestras redes</p>
                <div className="FlexIconsCart">
                  <a
                    href="https://www.instagram.com/staylo_cba/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram color="black" size={25} />
                  </a>
                  <a
                    href="https://www.facebook.com/search/top?q=staylo_cba"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook color="black" size={25} />
                  </a>
                </div>
              </div>
            </section>
          )}
        </Form>
      )}
    </Formik>
  );
};

//        EXPORTACIÓN
export default BuyForm;
