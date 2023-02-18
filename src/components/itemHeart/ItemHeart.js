import "../itemHeart/ItemHeart.css";

import { useState } from "react";

import { BsHeart, BsHeartFill } from "react-icons/bs";

const ItemHeart = () => {
  const [like, setLike] = useState(true);

  const handleClick = () => {
    like === true ? setLike(false) : setLike(true);
  };

  return (
    <div className="ItemHeart" onClick={handleClick}>
      {like === true ? (
        <BsHeart className="Heart" color="red" size={23} />
      ) : (
        <BsHeartFill className="Heart" color="red" size={23} />
      )}
    </div>
  );
};

export default ItemHeart;
