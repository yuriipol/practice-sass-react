import s from "./Card.module.scss";

const Card = ({ src }) => {
  return (
    <div className={s.containerCard}>
      <img src={src} alt="nature" className={s.image} />
      <p className={s.discription}>nature</p>
    </div>
  );
};

export default Card;
