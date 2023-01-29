import "../header/TopHeader.css"

import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

const TopHeader = () =>{
    return(
        <div className="TopHeader">
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
    )
}

export default TopHeader;