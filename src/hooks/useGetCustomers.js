import { useEffect, useState } from "react";
import axios from "axios";

const useGetCustomers = (API) => {

    const [customersdata, setCustomersData] = useState([]);

    async function fetchData() {
        const response = await axios(API);
        setCustomersData(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return customersdata;
};

export default useGetCustomers;