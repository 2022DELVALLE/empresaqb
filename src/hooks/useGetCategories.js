import { useEffect, useState } from "react";
import axios from "axios";

const useGetCategories = (API) => {

    const [categoriesdata, setCategoriesData] = useState([]);

    async function fetchData() {
        const response = await axios(API);
        setCategoriesData(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return categoriesdata;
};

export default useGetCategories;