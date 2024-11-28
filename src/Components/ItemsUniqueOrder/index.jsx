import React from "react";
import "./style.css";
import { shortName } from "../../utils/index";

function ItemsUniqueOrder({ name, img, price, amount, totalPrice }) {
  return (
    <article className="ItemOrderContainer mt-2 flex items-center rounded-lg border-ligh-gray bg-white pr-1 shadow-md">
      <div className="flex h-full w-10 items-center justify-center border-r-2 border-ligh-gray pr-2">
        <img className="ml-2" src={img} alt={img} />
      </div>
      <div className="flex h-full w-full items-center justify-around">
        <div className="nameUniqueOrder flex items-center">
          <p className="font-medium">{shortName(name, 7)}</p>
        </div>
        <div className="amountUniqueOrder flex items-center justify-center">
          <p className="font-semibold text-text-color">{amount}</p>
        </div>
        <div className="priceUniqueOrder flex items-center justify-center">
          <p className="font-semibold text-text-color">{`$${price}`}</p>
        </div>
      </div>
    </article>
  );
}

export default ItemsUniqueOrder;
