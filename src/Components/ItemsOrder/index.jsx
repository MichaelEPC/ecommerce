import React, { useEffect } from "react";
import "./style.css";
import takingOrder from "../../img/food-delivery-sm.png";
import packing from "../../img/package-sm.png";
import onWay from "../../img/box-car-sm.png";
import check from "../../img/checked-sm.png";

function ItemsOrder({
  id,
  date,
  totalPrice,
  totalProducts,
  img,
  state,
  setOrder,
}) {
  const [loading, setLoading] = React.useState(true);
  const [image, setImage] = React.useState("");
  const [classTextState, setclassTextState] = React.useState("");

  useEffect(() => {
    switch (state) {
      case "Taking order":
        setImage(takingOrder);
        setclassTextState("text-red-400");
        break;
      case "Packing ordered":
        setImage(packing);
        setclassTextState("text-yellow-500");
        break;
      case "On way":
        setImage(onWay);
        setclassTextState("text-yellow-300");
        break;

      default:
        setImage(check);
        setclassTextState("text-green-400");
        break;
    }
    setLoading(false);
  }, []);

  return (
    <article
      className={`${!loading ? "OrderItem relative mt-2 flex cursor-pointer flex-col rounded-xl shadow-sm" : "hidden"}`}
      onClick={() => setOrder(id)}
    >
      <div className="relative flex h-full rounded-lg border-2 border-ligh-gray bg-white">
        <div className="ml-2 flex h-20 w-20 items-center justify-center border-r-2 border-ligh-gray pr-2">
          <img className="h-full w-full" src={img} alt={img} />
        </div>
        <p className="absolute -top-2 right-0 bg-transparent p-1 text-2xl font-semibold text-text-color">{`${date}`}</p>
        <div className="ml-1 mt-2 flex h-full w-full flex-col items-center justify-center p-2">
          <div className="ordersItemContent ml-2 mt-4 flex w-full flex-col items-center justify-between md:flex-row">
            <p className="text-lg font-semibold">
              Total Products:
              <span className="ml-2 text-lg text-text-color">{`${totalProducts}`}</span>
            </p>
            <p className="text-lg font-semibold">
              Total Price:
              <span className="ml-2 text-lg text-text-color">{`$${totalPrice}`}</span>
            </p>
            <div className="flex">
              <p className="text-lg font-semibold">
                <span
                  className={`text-md ml-2 font-semibold ${classTextState}`}
                >{`${state}`}</span>
              </p>
              <img className="ml-2" src={image} alt={image} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ItemsOrder;
