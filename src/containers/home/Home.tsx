import { useState } from "react";
import Table from "../../components/table/Table";
// import Button from "../../components/button/Button"
import Form from "../../components/form/Form";

import ProductContext from "../../contexts/ProductContext";

const Home = () => {
  const [products, setProduct] = useState<any>([
    {
      id: 1,
      name: "Platano",
      price: 500,
    },
  ]);

  const addProduct = (prodName: any, prodPrice: any) => {
    const id = new Date().getTime();
    if (prodName && prodPrice) {
      setProduct((prevProducts: any) => {
        return [...prevProducts, { id: id, name: prodName, price: prodPrice }];
      });
    } else return alert("Faltan datos");
  };

  const delProduct = (id: any) => {
    let newProducts = [...products];
    let indexRemove = newProducts.findIndex(
      (product: any) => product.id === id
    );
    newProducts.splice(indexRemove, 1);
    setProduct(newProducts);
  };

  const getProduct = (id: any) => {
    let itemSelected = products.find(
      (product: any) => product.id === id
    );
    console.log(itemSelected)
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        delProduct,
        getProduct,
      }}
    >
      <Form />
      <div className="col-12 col-sm-6 offset-sm-3">
        <Table />
      </div>
    </ProductContext.Provider>
  );
};

export default Home;
