import { useEffect, useState } from "react";
import axios from "axios";

const useGetSliders = (API) => {

    const [sliderdata, setSliderData] = useState([]);

    async function fetchData() {
        const response = await axios(API);
        setSliderData(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return sliderdata;
};

export default useGetSliders;