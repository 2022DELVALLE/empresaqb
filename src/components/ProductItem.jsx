import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Details from "../containers/Details";

const ProductItem = ({ product }) => {


	const handleonClickComprar = () => {
		console.log("rutas");
	}

	return (
		<div className="product-card">
			<img src={product.image} alt={product.title} />
			<div className="product-info">
				<div>
					
					<p>{product.title}</p>
					<p>Descripción del producto a comprar por el cliente</p>
					<p>S/{product.priceUnit} x Unidad</p>
					<p>S/{product.priceDozens} x Docena</p>
					<Link className="singup-button secondary-button" type="button" to={"/details"} 
					onClick={() => handleonClickComprar()} 
					>Comprar</Link> 
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
