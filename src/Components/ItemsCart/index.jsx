import React from "react";
import "./style.css";
import starImage from "../../img/star-sm.png";

function ItemsCart({
  id,
  name,
  img,
  price,
  category,
  stars,
  quantitative,
  modifyAmount,
  deleteProduct,
}) {
  const changeQuantitative = (event) => {
    modifyAmount(parseInt(id), event.target.value);
  };
  return (
    <article className="itemsCart mt-2 flex rounded-lg border-2 border-ligh-gray shadow-md">
      <div className="mr-2 border-r-4 border-ligh-gray p-1">
        <img className="itemsCartImage object-cover" src={img} alt={img} />
      </div>
      <div className="itemsInfoDIv flex w-full flex-col">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">{name}</p>
          <p className="mr-2 mt-2 text-2xl font-semibold text-text-color">{`$${price}`}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-principal-blue">
            {`Category: `}{" "}
            <span className="font-bold text-text-color">{`${category}`}</span>
          </p>
          <div className="flex items-center">
            <p className="mr-2 font-medium text-principal-blue">Rating:</p>
            <p className="font-bold text-text-color">{stars}</p>
            <img className="h-4 w-4" src={starImage} alt={starImage} />
          </div>
        </div>
        <div className="flex h-full w-60 items-center justify-between">
          <div className="mb-1 flex w-52 items-center justify-around self-end">
            <p className="font-semibold text-text-color">Amount:</p>
            <select
              className="numberProductItem rounded-lg border-2 border-ligh-gray p-2 font-normal shadow-md outline-none"
              name=""
              id=""
              value={quantitative}
              onChange={changeQuantitative}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button
              className="deleteItemCart shadow-smx rounded-lg border-2 border-principal-blue bg-white text-principal-blue transition-all duration-150"
              onClick={() => deleteProduct(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ItemsCart;
