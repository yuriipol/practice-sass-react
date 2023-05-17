import s from "./ListCards.module.scss";
import Card from "../Card";
import { images } from "../../Shared/imageData";

const ListCards = () => {
  return (
    <div className="container">
      <ul className={s.listCards}>
        {images.map((item) => (
          <li key={item.id} className={s.listItem}>
            <Card src={item.http} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCards;
