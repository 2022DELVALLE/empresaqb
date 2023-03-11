import React, { useContext } from "react";

//import product preview context
import ProductPreviewContext from "../context/ProductPreviewContext.js";

import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ itemproduct }) => {

	const navigate = useNavigate();

	// Guardo un producto preview para ver sus details mas claro
	const { productItemPreview, setProductItemPreview } = React.useContext(ProductPreviewContext);

	const handleDetailsProduct = (payload) => {
		console.log(payload);
		setProductItemPreview(payload);
		navigate('/details');
	};

	


	/*
	const onProductItemPreview = (payload) => {
		setProductItemPreview(payload);
	}

	//Llamamos al appcontext para abrir el modal add cart con el buttton
	const {
		openModalAddCart,
		setOpenModalAddCart,
	} = React.useContext(AppContext);

	//Lamamos al appcontextpreviewproduct para actulizar el producto 
	const { productItemPreview, setProductItemPreview } = useContext(ContextPreviewProduc);
	
	const onClickModalAddCart = (payload) => {
		setOpenModalAddCart(true);
		setProductItemPreview(payload);
	};

	return (
		<div className="product-card">
			<Link
				to={"/Detailsproduct"}
				onClick={() => onProductItemPreview(product)}
			>
				<img
					src={product.image} alt={product.title}
				/>
			</Link>
			<div className="product-info">
				<div>
					<p>{product.title}</p>
					<p>Descripción del producto a comprar por el cliente</p>
					<p>S/{product.priceUnit} x Unidad</p>
					<p>S/{product.priceDozens} x Docena</p>
					<button
						className="secondary-button-product-item" type="button"
						onClick={()=> onClickModalAddCart(product)}
					>Agregar al carrito</button>
				</div>
			</div>
		</div>
	);*/

	return (
		<div className="ProductCardsSection__container-cards-Product">
			<div className="ProductCardsSection-container-cards-Product-Image"
			onClick={()=> handleDetailsProduct(itemproduct)}
			>
				<img
					src={itemproduct.image}
					alt={itemproduct.title}
					width="150"
					height="150"
				/>
			</div>
			<div className="ProductCardsSection__container-cards-Product-Description">
				<span className="ProductCardsSection__container-cards-Product-Description title">{itemproduct.title}</span>
				<span className="ProductCardsSection__container-cards-Product-Description price">S/. {itemproduct.priceUnit}</span>
				<span className="ProductCardsSection__container-cards-Product-Description price-2">Precio por docena: S/.
					{itemproduct.priceDozens} unid.</span>
			</div>
			<div className="ProductCardsSection__container-cards-Product-Stars">
				<div className="star" id="active">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
						fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
						<path
							d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				</div>
				<div className="star" id="active">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
						fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
						<path
							d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				</div>
				<div className="star" id="active">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
						fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
						<path
							d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				</div>
				<div className="star">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						className="bi bi-star-fill" viewBox="0 0 16 16">
						<path
							d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				</div>
				<div className="star">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
						className="bi bi-star-fill" viewBox="0 0 16 16">
						<path
							d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
				</div>
			</div>
			<div className="ProductCardsSection__container-cards-Product-ButtonAddShop"
			>
				<span>Agregar al carrito</span>
			</div>
		</div>
	);
};

export default ProductItem;
