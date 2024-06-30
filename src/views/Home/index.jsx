import React, { useEffect } from "react";
import Nav from "../../Components/Nav/index";
import MainContainer from "../../Components/MainContainer";
import HeaderContainer from "../../Components/HeaderContainer";
import CardProduct from "../../Components/CardProduct";
import Pagination from "../../Components/Pagination";
import FooterContainer from "../../Components/FooterContainer";
import NavMobile from "../../Components/NavMobile";
import "./style.css";
import ManageProductDetail from "../ProductDetail/ManageProductDetail";

function Home() {
  // UI States
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const { putProductDetail } = ManageProductDetail();

  // Pagination
  const [currentPage, setCurrentPage] = React.useState(1);

  // Filter
  const [selectValue, setSelectValue] = React.useState("all");
  const [inputValue, setInputValue] = React.useState("");

  const fecthProducts = async () => {
    let products;
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("SOMETHING HAPPEND, RESTART OR TRY LATER");
      }
      setTimeout(async () => {
        products = await response.json();
        setProducts(products);
        setLoading(false);
      }, 800);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error("Error getting the products, try later." + error);
    }
    return products;
  };

  const handleChangeSelect = (event) => {
    setSelectValue(event.target.value);
  };

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const searchProducts = async (event, isBottonEvent) => {
    if (event?.key === "Enter" || isBottonEvent == true) {
      setLoading(true);
      let res = await fetch("https://fakestoreapi.com/products");
      res = await res.json();
      let productsFiltered = [];
      // Filter by name
      productsFiltered = res.filter((product) => {
        const inputValueUser = inputValue.toLocaleLowerCase();
        const nameProduct = product.title.toLocaleLowerCase();
        return nameProduct.includes(inputValueUser);
      });
      // Filter by category
      if (selectValue !== "all") {
        productsFiltered = productsFiltered.filter((product) => {
          const categorySelected = selectValue.toLocaleLowerCase();
          const categoryOfProduct = product.category.toLocaleLowerCase();
          return categorySelected.includes(categoryOfProduct);
        });
      }
      setCurrentPage(1);
      setProducts(productsFiltered);
      setLoading(false);
    }
  };

  const fillProductDetail = (id) => {
    const listProduct = products.filter((product) => product.id === id);
    putProductDetail(listProduct[0]);
  };

  useEffect(() => {
    fecthProducts();
  }, []);

  let headProducts = currentPage * 15 - 15;
  let tailProducts = headProducts + 15;
  let listProducts = products.slice(headProducts, tailProducts);

  return (
    <>
      <HeaderContainer>
        <div className="flex w-full items-center justify-center">
          <div className="flex w-auto items-center justify-center">
            <select
              name=""
              id=""
              className="selectFilterHome rounded-md border-2 border-ligh-gray p-1 text-base font-normal outline-transparent"
              value={selectValue}
              onChange={handleChangeSelect}
            >
              <option value="all">All</option>
              <option value="men's clothing">Mens clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
              <option value="women's clothing">Womens clothing</option>
            </select>
            <input
              type="text"
              className="inputFilterHome border-b-2 border-t-2 border-ligh-gray p-2 text-base font-medium outline-principal-blue"
              value={inputValue}
              onChange={handleChangeInput}
              onKeyDownCapture={searchProducts}
            />
            <div
              className="DivLupeHome flex cursor-pointer items-center justify-center rounded-r-2xl border-2 border-principal-blue bg-white"
              onClick={() => searchProducts(undefined, true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="fill-principal-blue"
              >
                <path d="M10 2c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8z"></path>
              </svg>
            </div>
          </div>
        </div>
      </HeaderContainer>
      <Nav />
      <NavMobile />
      <MainContainer>
        <section className="productsContainer mt-1 flex justify-center rounded-lg">
          {loading && (
            <div className="divLoader flex items-center justify-center">
              <div className="loader flex items-center justify-center">
                <p className="divLoaderText cursor-default text-4xl font-bold transition-all duration-200">
                  TI
                </p>
              </div>
            </div>
          )}
          <div
            className={`${!loading ? "cardsContainer grid grid-cols-1 gap-3 mb:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5" : "hidden"} ${!(listProducts.length === 0) ? "p-4" : "p-0"}`}
          >
            {error && (
              <div className="absolute left-0 top-0 mt-2 flex h-auto w-full items-center justify-center">
                <div className="flex h-auto w-1/2 items-center justify-center">
                  <p className="text-2xl font-semibold">
                    Error, please come back later...
                  </p>
                </div>
              </div>
            )}
            {!loading && !error && listProducts.length === 0 ? (
              <>
                <div className="absolute left-0 top-0 mt-2 flex h-auto w-full items-center justify-center">
                  <div className="flex h-auto w-1/2 items-center justify-center">
                    <p className="text-2xl font-semibold">
                      Not products found with that name
                    </p>
                  </div>
                </div>
              </>
            ) : (
              listProducts?.map((product) => (
                <CardProduct
                  key={product.id}
                  id={product.id}
                  name={product.title}
                  img={product.image}
                  category={product.category}
                  price={product.price}
                  count={product.rating.count}
                  rating={product.rating.rate}
                  desc={product.description}
                  fillProductDetail={fillProductDetail}
                />
              ))
            )}
          </div>
        </section>
        {!loading && !error && listProducts.length != 0 && (
          <Pagination
            arrayProducts={products}
            maxProducts={15}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </MainContainer>
      <section className="FooterContainer relative left-0 ml-4 flex items-center justify-center showNav:left-16">
        <FooterContainer />
      </section>
    </>
  );
}

export default Home;
