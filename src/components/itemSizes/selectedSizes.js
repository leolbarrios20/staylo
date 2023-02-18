import React, { useState } from "react";

import Select from "react-select";

const Paymenths = () => {
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

  return (
    <div>
      <p className="SizeParagraph"> Talle: {paymenthMethod} </p>
      <Select
        className="Select"
        defaultValue={{
          label: "Tarjeta de débito",
          value: "Tarjeta de débito",
        }}
        options={paymenths}
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default Paymenths;
