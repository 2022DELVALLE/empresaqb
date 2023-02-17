import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContextPreview from '../context/ContextPreview.js';

const ProductItem = ({ product }) => {

	const { setStateProductIP } = useContext(ContextPreview);

	const handleOnClickPIP = (payload) => {
		setStateProductIP(payload);
	}

	return (
		<div className="product-card">
			<Link
				to={"/Detailsproduct"}
				onClick={() => handleOnClickPIP(product)}
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
					<button className="secondary-button-product-item" type="button"
					>Agregar al carrito</button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
