import React from "react";
import CartItem from "../componants/cart/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);

  // empty cart
  if (quantity < 1) {
    return (
      <section className="flex  flex-col  min-h-[60vh] justify-center items-center">
        <div className="flex text-[#80461B] justify-center w-full text-[60px] font-extrabold ">
          Your Cart
        </div>
        <div className="flex text-[#80461B] w-full justify-center text-[30px] font-light">
          is currently empty
        </div>
        <Link to="/">
          <button className="flex w-[150px] h-[40px] justify-center items-center bg-[#80461B] text-white my-[50px] rounded-md">
            Add Items
          </button>
        </Link>
      </section>
    );
  }

  // cart items display
  return (
    <section className=" mt-[50px] flex flex-col justify-center items-start overflow-x-hidden ">
      {cartItems.map((item) => {
        return <CartItem key={item.product_id} {...item} />;
      })}
      {/* cart footer */} 
      <footer className="flex flex-col w-full justify-center items-start">
        <hr className="  w-full " />
        <h3 className="flex w-full justify-between items-center text-[30px] text-[#80461B] font-bold">
          <span className="flex">Total</span>
          <span className="flex">R{total}</span>
        </h3>
        <div className="flex w-full justify-center items-center">
          <button className="flex w-[150px] h-[40px] justify-center items-center bg-[#80461B] text-white my-[50px] rounded-md">
            Clear Cart
          </button>
        </div>
      </footer>
    </section>
  );
}

export default Cart;
