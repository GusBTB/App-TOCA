import "./styles.css";
import { AiOutlineRollback } from "react-icons/ai";

function AsideArea() {
  return (
    <div className="aside">
      <div className="aside__title">
        <p>ÁREAS</p>
        <AiOutlineRollback className="aside__title__back" />
      </div>
      <ul className="aside__areas">
        <li>ADM</li>
        <li>Criação</li>
        <li>Eventos</li>
        <li>GEPE</li>
        <li>Marketing</li>
      </ul>
    </div>
  );
}
export default AsideArea;
