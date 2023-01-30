import "./Services.css"
import ImgServices from "../assets/img/servicio.jpg"

const Services = () =>{
    return(
        <div className="ServicesContainer container">
            <img className="col-12" alt="" src= {ImgServices} ></img>
        </div>
    )
}

export default Services;