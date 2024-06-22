import React from "react";
import "./style.css";
import starImg from "../../img/star-sm.png";
import { addToCart } from "../../utils/localStorage";

function CardProduct({ id, name, img, category, price, rating, count, desc }) {
  return (
    <article className="cardProduct relative flex justify-center rounded-lg border-2 border-ligh-gray shadow-lg">
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full cursor-pointer flex-col items-center">
          <p className="mb-1 mt-4 truncate text-base font-bold text-text-color">{`${name.substring(0, 20)}...`}</p>
          <div className="DivImageCard flex h-fit w-4/5 items-center justify-center rounded-lg border-2 border-ligh-gray p-1">
            <img src={img} alt={img} className="h-52 w-52 object-cover p-2" />
          </div>
        </div>

        <div className="mt-2 flex h-4 w-4/5 items-center justify-between">
          <div className="flex items-center justify-center rounded-e-lg border-2 border-principal-blue bg-white p-1">
            <p className="text-sm font-semibold text-principal-blue">
              {category}
            </p>
          </div>
          <p className="text-base font-semibold text-green-500">{`US$ ${price}`}</p>
        </div>

        <div className="mt-4 flex h-4 w-4/5 items-center justify-between">
          <div className="flex items-center justify-center rounded-lg">
            <p className="text-base font-semibold text-text-color">
              {`Reviews: ${count}`}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={starImg} alt="star" />
            <p className="ml-1 text-base font-bold text-yellow-500">{`${rating}`}</p>
          </div>
        </div>
      </div>
      <div
        className="absolute -right-2 -top-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-principal-blue"
        onClick={() => {
          addToCart({
            id: id,
            title: name,
            image: img,
            category: category,
            price: price,
            rating: {
              count: count,
              rate: rating,
            },
            description: desc,
          });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          className="fill-white"
        >
          <circle cx="10.5" cy="19.5" r="1.5"></circle>
          <circle cx="17.5" cy="19.5" r="1.5"></circle>
          <path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path>
          <path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path>
        </svg>
      </div>
    </article>
  );
}

export default CardProduct;
