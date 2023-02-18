import "../itemSizes/ItemSizes.css";
import { Table } from "react-bootstrap";

const ItemSizes = () => {
  return (
    <div className="TableSizes ">
      <h3 className="TitleSizes">Tabla de talles</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Talles</th>
            <th>Largo</th>
            <th>Ancho</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S</td>
            <td>74cm</td>
            <td>55cm</td>
          </tr>
          <tr>
            <td>M</td>
            <td>76cm</td>
            <td>59cm</td>
          </tr>
          <tr>
            <td>L</td>
            <td>78cm</td>
            <td>63cm</td>
          </tr>
          <tr>
            <td>XL</td>
            <td>82cm</td>
            <td>70cm</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ItemSizes;
