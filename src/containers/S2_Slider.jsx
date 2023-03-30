import React from 'react';
//Archivo scs
import '@styles/Containers/Section2_Slider.scss';

//Import data

//Import Containers y components
import SliderItemFirst from '../components/SliderItemFirst';
import SliderItem from '../components/SliderItem';

//Import 
import useGetSliders from '../hooks/useGetSliders';
import { useNavigate } from 'react-router-dom';

const S2_Slider = () => {


    //Traemos la data de sliders

    const APISlider = 'https://api-empresaqb-version3-production.up.railway.app/api/sliders';

    const sliderdata = useGetSliders(APISlider);

    //

    const [counter, setCounter] = React.useState(1);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => {
                const newCounter = prevCounter >= 4 ? 1 : prevCounter + 1;
                return newCounter;
            });
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const handleRadioChange = (event) => {
        setCounter(Number(event.target.value));
    }



    return (
        <section className="slider">
            <div className="slides">
                <input type="radio" name="radio-btn" id="radio1" value={1}
                    checked={counter === 1}
                    onChange={handleRadioChange} />
                <input type="radio" name="radio-btn" id="radio2" value={2}
                    checked={counter === 2}
                    onChange={handleRadioChange} />
                <input type="radio" name="radio-btn" id="radio3" value={3}
                    checked={counter === 3}
                    onChange={handleRadioChange} />
                <input type="radio" name="radio-btn" id="radio4" value={4}
                    checked={counter === 4}
                    onChange={handleRadioChange} />

                {sliderdata.map(slideritem => (
                    <SliderItemFirst slider={slideritem} key={slideritem.id} />
                )).slice(0, 1)
                }

                {sliderdata.map(slideritem => (
                    <SliderItem slider={slideritem} key={slideritem.id} />
                )).slice(1, 4)
                }

                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                </div>

                <div className="navigation-manual">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                    <label htmlFor="radio4" className="manual-btn"></label>
                </div>
            </div>
        </section>
    );
}

export default S2_Slider;