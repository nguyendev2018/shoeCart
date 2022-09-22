import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../../redux/reducers/shopReducer";
export default function ItemProduct(props) {
  const { propsData } = props;
  const dispatch = useDispatch();
  const handleClick = (propsData) => {
    const action = addCartItem(propsData);
    dispatch(action);
  };
  return (
    <div className="card ">
      <img src={propsData.image} alt="" className="img-fluid" />
      <div className="card-body d-flex flex-column">
        <h2 style={{ lineHeight: "33px" }}>{propsData.name}</h2>
        <p>{propsData.price}$</p>
        <button
          className="btn btn-primary mt-auto align-self-start"
          onClick={() => {
            handleClick(propsData);
          }}
        >
          Add to cart
          <i className="ml-2 fa fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}
