import { useState } from "react";
import Star from "./img/star.svg";
import StarFilled from "./img/star-filled.svg";

export default function FavButton() {
  const [fav, isFavorite] = useState(true);

  const handleClick = () => {};
  return (
    <button onClick={handleClick}>
      <img src={Star} alt="star" />
    </button>
  );
}
