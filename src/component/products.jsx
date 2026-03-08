import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient.js";
import Cart from "./cart.jsx";
import Cart2 from "./cart2.jsx";

function Products({ type }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [type]);

  async function getProducts() {

    let query = supabase
      .from("products")
      .select("*");
      

    if (type === "flash") {
      query = query.eq("is_flash_sale", true);
    }

    if (type === "best") {
      query = query.eq("is_best_seller", true);
    }

    const { data, error } = await query;
    console.log(data);

    if (error) {
      console.log(error);
    } else {
      setProducts(data);
    }
  }

  return (
    <>
      {products.map((product) => 
  (
        <Cart
          key={product.id}
           id={product.id}
          img={product.image}
          productname={product.name}
          price={product.price}
          oldprice={type==="flash" ?`$${product.old_price}` : null }
          discount={type === "flash" ? `${product.discount}%` : null}
          rating={product.rating}
          reviews={product.reviews}
        />
      ))}
    </>
  );
}

export default Products;