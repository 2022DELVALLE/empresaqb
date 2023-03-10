import React from 'react';
import ReactDOM from 'react-dom';
//Import scss
import '../styles/portal/PortalMenuPrincipal.scss';

//Import 
import useGetCategories from '../hooks/useGetCategories';

//Import components
import CategoryItemMenu from '@components/CategoryItemMenu';


const PortalMenuPrincipal = ({ portalRefMenuP, setPortalMenuP }) => {


    //Traemos la data de sliders

    const APICategories = 'https://api-empresaqb-production.up.railway.app/api/categories';

    const categoriesdata = useGetCategories(APICategories);

    // Control del portal  menu principal

    const closePortalMenuP = () => {
        setPortalMenuP(false);
    }

    return ReactDOM.createPortal(
        <div className='portal-menu-principal'>
            <div className="menuLateralCategorias" ref={portalRefMenuP}>
                <div className="menuLateralCategorias__header">
                    <div className="menuLateralCategorias__title">CATEGORIAS</div>
                    <div className="menuLateralCategorias__close"
                        onClick={() => closePortalMenuP()}
                    ><i className="bi bi-x-lg"></i></div>
                </div>
                <div className="menuLateralCategorias__container">
                    <ul className="menuLateralCategorias__container-list">

                        {
                            categoriesdata.map(categoryitem => (
                                <CategoryItemMenu categoryitem={categoryitem} key={categoryitem.id} />
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>
        , document.getElementById('idomenuprincipal')
    );
}

export default PortalMenuPrincipal;