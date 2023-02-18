import "../footer/TopFooter.css";

import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

const TopFooter = () => {
  return (
    <div className="TopFooter">
      <p>
        <span>
          <FaTruck className="TruckIcon" size={25} />
        </span>
        Envios gratis desde $15000 a todo el país
      </p>
      <p>
        10% de descuento abonando por transferencia bancaria
        <span>
          <FaRegMoneyBillAlt className="MoneyIcon" size={30} />
        </span>
      </p>
    </div>
  );
};

export default TopFooter;
