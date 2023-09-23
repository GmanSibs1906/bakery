import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/features/cart/cartSlice";

function CartItem({ product_id, name, image, price, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex m-[30px]">
      {/* produvt image */}
      <img
        src={image}
        alt=""
        className=" ml-[-15px] md-ml-0 w-[90px] rounded-[10px] md:w-[100px] object-contain md:rounded-md mx-[25px] md:mx-[50px]"
      />
      {/* name, price and remove */}
      <div className="flex mt-[6px] flex-col h-[90px] md:h-[100px] md:justify-evenly">
        <h3 className="flex text-[14px] md:text-[20px] font-semibold">{name}</h3>
        <h3 className="flex text-[14px] md:text-[18px] text-[#80461B]">R{price}</h3>
        <span
          className="flex text-red-600 text-[14px] md:text-[18px]"
          onClick={() => {
            dispatch(removeItem(product_id));
          }}
        >
          remove
        </span>
      </div>
      {/* add, subtract and display individual product total value */}
      <div className="flex flex-col h-[100px] justify-evenly ml-auto mr-[38px] md:mr-[100px]">
        <div className="flex w-full">
          <span
            className=" w-[30px] h-[30px] mr-[3px] flex justify-center items-center border border-slate-400 rounded-md cursor-pointer "
            onClick={() => {
              dispatch(increaseQuantity(product_id));
            }}
          >
            +
          </span>
          <span className="w-[30px] h-[30px] mx-[3px] flex justify-center items-center border border-slate-400 rounded-md cursor-pointer">
            {quantity}
          </span>
          <span
            className="w-[30px] h-[30px] mx-[3px] flex justify-center items-center border border-slate-400 rounded-md cursor-pointer"
            onClick={() => {
              if ( quantity === 1 ) {
                dispatch(removeItem(product_id));
                return
              }
              dispatch(decreaseQuantity(product_id));
            }}
          >
            -
          </span>
        </div>
        <div className="flex w-full justify-center text-[18px] text-[#80461B] font-semibold ">
          R{(quantity * price).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
