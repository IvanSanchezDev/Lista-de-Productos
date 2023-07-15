import { useState, useEffect } from "react";
import { ListProducts } from "../components/listProducts";

export const Products=()=>{
    const [listProductsState, setProducts]=useState([]);

    useEffect(()=>{
        (async()=>{
            try {
                const response=await fetch("https://dummyjson.com/products");
                const result=await response.json();
                setProducts(result.products)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])

    return(
        <>
            <ListProducts listProduct={listProductsState}/>
        </>
    )
}