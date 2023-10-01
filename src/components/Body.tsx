import { items } from "../data";
import { SingleItem } from "./SingleItem";

export const Body = () => {
  return (
    <div className="items-container">
      {items.map((item) => (
        <div key={item.id} className="item">
          <SingleItem item={item} />
        </div>
      ))}
    </div>
  );
};
