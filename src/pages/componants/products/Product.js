import React from "react";

function Product({ image, title, price }) {
  return (
    <div className=" w-[200px] border border-[#80461B] flex flex-col m-[20px] rounded-lg text-[#80461B] ">
      <img
        src={image}
        alt=""
        className=" w-[200px] h-[200px] rounded-t-lg "
      />
      <div className=" w-full flex flex-col ">
        <h3 className=" font-bold text-[20px] text-center w-full ">
          {title}{" "}
        </h3>
        <div className=" flex w-full justify-between items-center px-[10px] my-[10px] ">
          <h3 className=" font-bold ">R{price}</h3>
          <button className=" border border-[#80461B] px-[10px] py-[1px] rounded-md cursor-pointer hover:bg-[#80461B] hover:text-white z-50 ">
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
