import React from 'react';
import ReactDOM from 'react-dom';
//Import scss
import '../styles/portal/PortalMenuPrincipal.scss';

//Import 
import useGetCategories from '../hooks/useGetCategories';

//Import components
import CategoryItemMenu from '../components/CategoryItemMenu';

//import app context
import AppContext from '../context/AppContext';

const PortalMenuPrincipal = ({ portalRefMenuP }) => {

    //Traemos la data de sliders
    const APICategories = 'http://127.0.0.1:8000/api/categories';

    const categoriesdata = useGetCategories(APICategories);

    // Control del portal  menu principal
    const closePortalMenuP = () => {
        setPortalMenuP(false);
    }
    
    //Recupero señal del portal menu principal 
    const {portalMenuP, setPortalMenuP   } = React.useContext(AppContext);

    return ReactDOM.createPortal(
        <div className='portal-menu-principal'>
            <div className={portalMenuP ? 'menuLateralCategorias semiprioridad': 'menuLateralCategorias '}   ref={portalRefMenuP}>
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