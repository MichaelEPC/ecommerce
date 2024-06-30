export const addToCart = async (product, newAmount) => {
  let listCart = localStorage.getItem("techIncStorageCart");
  if (listCart == undefined || listCart == null) {
    const productAddAmount = {
      ...product,
      amount: 1,
    };
    let listCart = [];
    listCart.push(productAddAmount);
    localStorage.setItem("techIncStorageCart", JSON.stringify(listCart));
    return;
  }
  listCart = JSON.parse(listCart);
  // checks if the product its already in the carco
  if (listCart.some((products) => products.id == product.id)) {
    listCart = listCart.filter((products) => {
      if (products.id == product.id) {
        products.amount = newAmount;
      }
      return true;
    });
  } else {
    listCart.push({
      ...product,
      amount: newAmount,
    });
  }
  localStorage.setItem("techIncStorageCart", JSON.stringify(listCart));
};
