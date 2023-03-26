import { useEffect, useState } from "react";
import axios from "axios";
const useGetProducts = (API) => {

    const [productsdata, setProductsData] = useState([]);

    async function fetchData() {
        const response = await axios(API);
        setProductsData(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return productsdata;
};

export default useGetProducts;