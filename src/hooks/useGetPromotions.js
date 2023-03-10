import { useEffect, useState } from "react";
import axios from "axios";

const useGetPromotions = (API) => {

    const [promotiosndata, setPromotionsData] = useState([]);

    async function fetchData() {
        const response = await axios(API);
        setPromotionsData(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return promotiosndata;
};

export default useGetPromotions;