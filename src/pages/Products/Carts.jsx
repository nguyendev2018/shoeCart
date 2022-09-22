import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cart } from "../../redux/selector";
import { changeQuantity } from "../../redux/reducers/shopReducer";
import { delItem } from "../../redux/reducers/shopReducer";
export default function Carts() {
  const cartSelector = useSelector(cart);
  const dispatch = useDispatch();

  const handleClickDelete = (item) => {
    dispatch(delItem(item));
  };
  const handleClickPlus = (item) => {
    const itemQuantity = {
      id: item.id,
      quantity: item.quantity + 1,
    };
    const action = changeQuantity(itemQuantity);
    dispatch(action);
  };

  const handleClickPrev = (item) => {
    const itemQuantity = {
      id: item.id,
      quantity: item.quantity - 1,
    };
    const action = changeQuantity(itemQuantity);
    dispatch(action);
  };
  return (
    <>
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Id </th>
            <th>Name </th>
            <th>Image </th>
            <th>Price </th>
            <th>Quantity </th>
            <th>Total </th>
            <th>Button </th>
          </tr>
        </thead>
        <tbody>
          {cartSelector.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                </td>
                <td>{item.price}$</td>
                <td>
                  <button
                    className="btn btn-primary mr-2"
                    onClick={() => {
                      handleClickPlus(item);
                    }}
                  >
                    +
                  </button>
                  {item.quantity}
                  <button
                    className="btn btn-primary ml-2"
                    onClick={() => {
                      handleClickPrev(item);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{item.quantity * item.price} $</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleClickDelete(item);
                    }}
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
