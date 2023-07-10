import React from 'react';
//Import scss
import '@styles/Containers/Section3_Home.scss'

//Import data
import useGetPromotions from '../hooks/useGetPromotions';

//Import components o containers
import PromotionItem from '../components/PromotionsItem';


const S3_Promotions = () => {

    //Recuperamos datos de las promociones

    const APIPromtions = 'http://127.0.0.1:8000/api/promotions';

    const promotionsdata = useGetPromotions(APIPromtions);

    return (
        <section className="section__news-offers">
            <div className="section__news-offers-title">Nuestras promociones</div>
            <div className="section__news-offers-images">
                
            {promotionsdata.map(promotionItem => (
                <PromotionItem promotionitem={promotionItem} key={promotionItem.id} />
            )).slice(0,3)}
            
            </div>
        </section>
    );
}

export default S3_Promotions;