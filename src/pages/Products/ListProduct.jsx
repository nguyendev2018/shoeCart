import React, { useEffect } from "react";
import Carts from "./Carts";
import ItemProduct from "./ItemProduct";
import { useSelector, useDispatch } from "react-redux";
import { dataProduct } from "../../redux/selector";
import { getAllProductsApi } from "../../redux/reducers/shopReducer";
export default function ListProduct(props) {
  let listProduct = useSelector(dataProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    const actionThunk = getAllProductsApi();
    // dispatch action thunk
    dispatch(actionThunk);
  }, []);
  return (
    <div className="container">
      <h1>Shoe Shop</h1>
      <Carts></Carts>
      <h2>Product List</h2>
      <div className="row">
        {listProduct.map((item, index) => {
          return (
            <div
              className="card-list col-lg-3 col-md-4 col-sm-6 mb-3 d-flex align-items-stretch"
              key={index}
            >
              <ItemProduct propsData={item}></ItemProduct>
            </div>
          );
        })}
      </div>
    </div>
  );
}
