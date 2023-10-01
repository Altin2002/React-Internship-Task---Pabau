import { items } from "../data";
import { useNavigate, useParams } from "react-router-dom";

export const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = items.find((item) => item.id === +id!);

  return (
    <div className="items-details">
      <button onClick={() => navigate(-1)}>Go Back</button>
      <p>{item?.id}</p>
      <p>{item?.title}</p>
      <p>{item?.text}</p>
      <img src={item?.image} alt="" />
    </div>
  );
};
