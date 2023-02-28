import { useEffect, useState } from "react";
import axios from "axios";
import productsdata from "./productsdata";
const useGetProducts = (API) => {

    const [products, setProducts] = useState([]);

    //se saca el fecth de los datos del UseEffec
    async function fetchData() {
        /*const response = await axios(API);
        setProducts(response.data);*/
        setProducts(productsdata);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        products,
        setProducts,
    };
};

export default useGetProducts;