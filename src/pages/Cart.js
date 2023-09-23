import React, {useEffect} from "react";
import CartItem from "../componants/cart/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, calculateTotals } from "../redux/features/cart/cartSlice";
import { handlePayfastSession } from "../handlePayment/handlePayfastSession"

function Cart() {

  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

   const destructureUrl = () => {
    const url = handlePayfastSession(quantity, total);
    return url.actionURL;
  };

  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])
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
    <section className=" mt-[50px] flex justify-center items-center overflow-x-hidden ">
    <div className="flex flex-col max-w-[1000px] justify-center items-start">
    {cartItems.map((item) => {
        return <CartItem key={item.product_id} {...item} />;
      })}
      {/* cart footer */} 
      <footer className="flex flex-col w-full justify-center items-start">
        <hr className="  w-full " />
        <h3 className="flex w-full justify-between items-center text-[20px] md:text-[30px] text-[#80461B] font-bold px-[20px] mt-[20px]">
          <span className="flex">Total</span>
          <span className="flex">R{total.toFixed(2)}</span>
        </h3>
        <div className="flex w-full justify-evenly items-center mb-[-40px]">
        <Link to={destructureUrl()}>
          <button className="flex w-[150px] h-[40px] justify-center items-center bg-[#80461B] text-white my-[50px] rounded-md">
            CheckOut
          </button>
        </Link></div>
        <div className="flex w-full justify-evenly items-center">
          <button className="flex w-[150px] h-[40px] justify-center items-center bg-red-600 text-white my-[50px] rounded-md" onClick={()=>{dispatch(clearCart())}}>
            Clear Cart
          </button>
          <Link to="/">
          <button className="flex w-[150px] h-[40px] justify-center items-center bg-green-600 text-white my-[50px] rounded-md">
            Add Items
          </button>
        </Link>
        </div>
      </footer>
    </div>
      
    </section>
  );
}

export default Cart;
