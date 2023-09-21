import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { milkTart } from "../assets/images";
import { products } from "../assets/data/productData";
import RelatedProduct from "../componants/products/RelatedProduct";

function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [category, setCategory] = useState("");
    let relatedProductCount = 0

    useEffect(()=> {
        products.map((item) => {
            if (item.product_id === id) {
                setProduct(item)
                setCategory(item.cat)
            }
        })
    }, [product])

  return (
    <div className=" min-h-[85vh] flex flex-col w-full justify-center items-center mt-[-20px] md:mt-[-50px] ">
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
        <div className=" w-[50vw] h-full flex flex-col justify-evenly items-start ">
          <div className=" w-full font-bold text-[22px] md:mt-[50px] ">
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
            <div className=" w-[75vw] flex flex-col md:flex-row justify-evenly items-center " >
                {products.map((item) => {
                  if (relatedProductCount < 7 ) {
                    relatedProductCount ++
                    console.log(relatedProductCount)
                    if (item.cat === category) {
                    return <RelatedProduct key={item.product_id} image={item.image} id={item.product_id} />;
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
