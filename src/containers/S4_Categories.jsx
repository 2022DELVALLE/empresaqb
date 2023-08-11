import React from 'react';

//Import scss
import '../styles/Containers/Section4_Home.scss';

//Import 
import useGetCategories from '../hooks/useGetCategories';

//Import components
import CategoryItemModal from '../components/CategoryItemModal';
import CategoryItemDesktop from '../components/CategoryItemDesktop';

const S4_Categories = () => {

    //Traemos la data de sliders

    const APICategories = 'https://api-empresaqb-version3-production.up.railway.app/api/categories';

    const categoriesdata = useGetCategories(APICategories);


    // Observar todas categorias al dar click sobre ver más o menos

    const [showCategorys, setShowCategorys] = React.useState(false);

    const toogleShowCategorys = () => {
        setShowCategorys(!showCategorys);
    }

    return (
        <>
            <section className="section__products">
                <div className="section__products-title">Nuestros productos</div>
                <div className="section__products-desktop">
                    <div className="section-products-categorias">
                        <div className="box1-products">

                            {categoriesdata.map(categoryitemdesktop => (
                                < CategoryItemDesktop categoryitemdesktop={categoryitemdesktop}
                                    key={categoryitemdesktop.id} />
                            )).slice(0, 3)
                            }

                        </div>
                        <div className={showCategorys ? 'box2-products hide show' : 'box2-products hide'} id="hide-box">

                            {categoriesdata.map(categoryitemdesktop => (
                                < CategoryItemDesktop categoryitemdesktop={categoryitemdesktop}
                                    key={categoryitemdesktop.id} />
                            )).slice(3, 6)
                            }

                        </div>
                    </div>
                    <div className="button-more"
                        onClick={toogleShowCategorys}
                    >{showCategorys ? 'Ver menos ...' : 'Ver más ...'}</div>
                </div>

                <div className="section__products-mobile">
                    <div className="section__products-mobile-slider">

                        {categoriesdata.map(categoryitemmodal => (
                            <CategoryItemModal categoryitemmodal={categoryitemmodal}
                                key={categoryitemmodal.id} />
                        ))}

                    </div>
                </div>
            </section>

        </>
    );
}

export default S4_Categories;