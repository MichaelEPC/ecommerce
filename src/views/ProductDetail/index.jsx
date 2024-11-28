import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderContainer from "../../Components/HeaderContainer";
import Nav from "../../Components/Nav";
import MainContainer from "../../Components/MainContainer";
import NavMobile from "../../Components/NavMobile";
import "./style.css";
import ManageProductDetail from "./ManageProductDetail";
import starImage from "../../img/star-sm.png";
import { addToCart } from "./addToCart";

function ProductDetail() {
  const { product } = ManageProductDetail();
  const [amount, setAmount] = React.useState(1);
  const calcTotal = () => product.price * amount;
  const navigate = useNavigate();
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <Nav />
      <NavMobile />
      <MainContainer>
        <div className="mt-28 flex h-full w-11/12 flex-col items-center justify-center pd:flex-row pd:items-start">
          <div className="DetailContainer closed:flex-row flex flex-col rounded-lg border-2 border-ligh-gray bg-white shadow-md">
            <div className="ml-4 flex h-full w-96 justify-center border-r-2 border-ligh-gray pr-2">
              <img
                className="w-96 object-contain"
                src={product?.image}
                alt={product?.image}
              />
            </div>
            <div className="ml-2">
              <p className="text-2xl font-semibold">{product?.title}</p>
              <div className="mt-3 flex items-center">
                <p className="text-lg font-semibold text-text-color">
                  {`Rating: `}
                  <span className="font-bold text-principal-blue">
                    {product?.rating?.rate}
                  </span>
                </p>
                <img className="ml-1" src={starImage} alt={starImage} />
                <p className="ml-2 text-lg font-semibold text-text-color">
                  {`Count: `}
                  <span className="font-bold text-principal-blue">
                    {product?.rating?.count}
                  </span>
                </p>
                <div className="ml-4 mt-2 h-10 w-40 items-center justify-center rounded-r-2xl border-2 border-principal-blue p-2 font-bold text-principal-blue">
                  {product?.category}
                </div>
              </div>
              <div className="textProductDetail mt-2">
                <p className="text-2xl font-semibold">About:</p>
                <p className="mt-1 text-lg text-text-color">
                  {product.description}
                </p>
              </div>
              <p className="mb-2 mt-2 text-2xl font-semibold text-principal-blue underline">
                Available
              </p>
            </div>
          </div>
          <div className="optionsProductDetail mb-2 ml-4 mt-2 rounded-lg border-2 border-ligh-gray bg-white shadow-md">
            <div className="h-12 w-full border-b-2 border-ligh-gray">
              <p className="ml-4 mt-2 text-2xl font-semibold">
                {`$${product.price} `}
                <span className="text-principal-blue">per unit</span>
              </p>
            </div>
            <div className="flex h-full w-full flex-col items-center">
              <div className="ml-5 mt-4 flex w-full items-center">
                <p className="mr-4 text-lg font-semibold">Amount:</p>
                <select
                  className="numberProductDetail rounded-lg border-2 border-ligh-gray font-normal shadow-md outline-none"
                  onChange={(e) => setAmount(parseInt(e.target.value))}
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
              </div>
              <button
                className="mt-6 w-40 rounded-lg border-2 border-white bg-principal-blue p-2 font-semibold text-white"
                onClick={async () => {
                  await addToCart(product, amount);
                  navigate("/cart");
                }}
              >
                Add to cart
              </button>
              <button
                className="mt-2 w-40 rounded-2xl border-2 border-text-color bg-white p-2 font-semibold text-text-color"
                onClick={() => navigate("/")}
              >
                See more products
              </button>
              <div className="ml-6 mt-5 flex h-4 w-full">
                <p className="text-2xl font-semibold">{`Total: $${calcTotal()}`}</p>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
}

export default ProductDetail;
