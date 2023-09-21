import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { milkTart } from "../assets/images";
import { products } from "../assets/data/productData";

function Product() {

    const { id } = useParams();
    const [displayProduct, setDisplayProduct] = useState("");
    const [product, setProduct] = useState({});

    useEffect(()=> {
        products.map((item) => {
            if (item.product_id == id) {
                setProduct(item)
            }
        })
    }, [product])

  return (
    <div className=" flex flex-col w-full justify-center items-center mt-[-50px] ">
        {/* product info */}
      <div className="  bg-[#80461B] bg-opacity-10 backdrop-blur-sm flex w-full justify-center items-center h-[450px] pt-[100px] pb-[20px]  ">
        {/* left side ---- image container */}
        <div className=" w-[50vw] flex h-full justify-center items-center ">
          <img
            src={product.image}
            alt=""
            className=" h-[200px] object-contain rounded-[10px] "
          />
        </div>
        {/* right side ---- product details */}
        <div className=" w-[50vw] h-full flex flex-col justify-evenly items-start ">
          <div className=" w-full font-bold text-[22px] mt-[50px] ">
            {product.name}
          </div>
          <div className=" w-full text-sm font-light text-slate-700 ">R{product.price}</div>
          <div className=" w-full flex  my-[15px] text-[20px] ">
            <span className=" w-[30px] h-[30px] mr-[3px] flex justify-center items-center border border-slate-400 rounded-md cursor-pointer ">+</span>
            <span className="w-[30px] h-[30px] mx-[3px] flex justify-center items-center border border-slate-400 rounded-md cursor-pointer">1</span>
            <span className="w-[30px] h-[30px] mx-[3px] flex justify-center items-center border border-slate-400 rounded-md cursor-pointer">-</span>
          </div>
          <button className=" w-[140px] h-[30px] bg-[#80461B] flex justify-center items-center rounded-sm text-[#e9d9d9]">
            Add to cart
          </button>
          <p className=" mt-[15px] text-sm font-light text-slate-700 ">{product.desc}</p>
        </div>
      </div>

      {/* related products */}
      <div className=" flex flex-col w-full mb-[50px] " >
        <div className=" w-full text-center my-[30px] font-custom text-[30px] text-[#80461B] "> Related Products </div>
        <div className=" w-full flex justify-center ">
            <div className=" w-[75vw] flex justify-evenly items-center " >
                <img src={milkTart} alt="" className=" w-[150px] object-contain rounded-md " />
                <img src={milkTart} alt="" className=" w-[150px] object-contain rounded-md" />
                <img src={milkTart} alt="" className=" w-[150px] object-contain rounded-md" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
