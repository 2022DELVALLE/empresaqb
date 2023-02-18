import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContextPreviewProduc from '../context/ContextPreviewProduct.js';

const ProductItem = ({ product }) => {

	const { setProductItemPreview } = useContext(ContextPreviewProduc);

	const onProductItemPreview = (payload) => {
		setProductItemPreview(payload);
	}

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
					<button className="secondary-button-product-item" type="button"
					>Agregar al carrito</button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
