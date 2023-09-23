import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../assets/data/productData";
import RelatedProduct from "../componants/products/RelatedProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState("");
  let relatedProductCount = 0;

  useEffect(() => {
    products.map((item) => {
      if (item.product_id === id) {
        setProduct(item);
        setCategory(item.cat);
      }
    });
  }, [product, id]);

  useEffect(()=> {
    window.scroll(0,0)
  },[])

  return (
    <div id="product" className=" min-h-[85vh] flex flex-col w-full justify-center items-center mt-[-20px] md:mt-[-50px] ">
      {/* product info */}
      <div className="  bg-[#80461B] bg-opacity-10 backdrop-blur-sm flex flex-col md:flex-row w-full justify-center items-center h-[530px] md:h-[450px] pt-[100px] pb-[20px]  ">
        {/* left side ---- image container */}
        <div className=" w-[50vw] flex h-full justify-center items-center ">
          <img
            src={product.image}
            alt=""
            className=" h-[200px] object-contain rounded-[10px] "
          />
        </div>
        {/* right side ---- product details */}
        <div className=" w-[50vw] h-[200px] flex flex-col justify-evenly items-start ">
          <div className=" w-full font-bold text-[22px] mt-[-40px] md:mt-[-10px]  ">
            {product.name}
          </div>
          <div className=" w-full text-md font-light text-slate-700 md:mt-[-20px] ">
            R{product.price}
          </div>
          <button
            onClick={() => {
              dispatch(addToCart(product.product_id));
            }}
            className=" w-[140px] h-[30px] bg-[#80461B] flex justify-center items-center rounded-md text-[#e9d9d9]"
          >
            Add to cart
          </button>
          
          <p className=" mt-[15px] text-sm font-light text-slate-700 ">
            {product.desc}
          </p>
          <Link to="/#shop">
          <button className="w-[140px] h-[30px] bg-[#80471b00] border border-[#80461B] flex justify-center items-center rounded-md text-[#80461B]">
            Back to shop
          </button>
        </Link>
        </div>
      </div>

      {/* related products */}
      <div className=" flex flex-col w-full mb-[50px] ">
        <div className=" w-full text-center my-[30px] font-custom text-[30px] text-[#80461B] ">
          {" "}
          Related Products{" "}
        </div>
        <div className=" w-full flex justify-center ">
          <div className=" w-[75vw] flex flex-col md:flex-row justify-evenly items-center ">
            {products.map((item) => {
              if (relatedProductCount < 11) {
                relatedProductCount++;
                if (item.cat === category) {
                  return (
                    <RelatedProduct
                      key={item.product_id}
                      image={item.image}
                      id={item.product_id}
                    />
                  );
                }
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
