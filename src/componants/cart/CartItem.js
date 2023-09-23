import React from "react";

function CartItem({ product_id, name, image, price, quantity }) {
  return (
    <div className="w-full flex m-[30px]">
      {/* produvt image */}
      <img
        src={image}
        alt=""
        className="w-[100px] object-contain rounded-md mx-[50px]"
      />
      {/* name, price and remove */}
      <div className="flex flex-col h-[100px] justify-evenly">
        <h3 className="flex text-[20px] font-semibold">{name}</h3>
        <h3 className="flex text-[18px] text-[#80461B]">R{price}</h3>
        <span className="flex text-red-600 text-[18px]">remove</span>
      </div>
      {/* add, subtract and display individual product total value */}
      <div className="flex flex-col h-[100px] justify-evenly ml-auto mr-[100px]">
        <div className="flex w-full">
          <span className=" w-[30px] h-[30px] mr-[3px] flex justify-center items-center border border-slate-400 rounded-md cursor-pointer ">
            +
          </span>
          <span className="w-[30px] h-[30px] mx-[3px] flex justify-center items-center border border-slate-400 rounded-md cursor-pointer">
            {quantity}
          </span>
          <span className="w-[30px] h-[30px] mx-[3px] flex justify-center items-center border border-slate-400 rounded-md cursor-pointer">
            -
          </span>
        </div>
        <div className="flex w-full justify-center text-[18px] text-[#80461B] font-semibold ">
          R{quantity * price}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
