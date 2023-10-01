import { useNavigate } from "react-router-dom";
import rightArrow from "../assets/icons/right-arrow.svg";
import { Item } from "../data";

interface SingleItemProps {
  item: Item;
}

export const SingleItem = ({ item }: SingleItemProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${item.id}`)}
      className="single-item"
      style={{ cursor: "pointer" }}
    >
      <img
        className="img"
        src={item?.image}
        alt={item?.title}
        title={item?.title}
      />
      <span className="text">{item?.text}</span>
      <img src={rightArrow} className="arrow" />
    </div>
  );
};
