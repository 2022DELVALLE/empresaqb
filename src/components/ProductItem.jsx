import React, { useContext } from 'react';


const ProductItem = ({ product }) => {

	return (
		<div className="product-card">
		<img src={product.image} alt={product.title} />
		<div className="product-info">
			<div>
				<p>{product.title}</p>
				<p>Descripción del producto a comprar por el cliente</p>
				<p>S/{product.priceUnit} x Unidad</p>
				<p>S/{product.priceDozens} x Docena</p>
				<button className="singup-button secondary-button">Comprar</button>
			</div>
		</div>
	</div>
	);
}

export default ProductItem;
