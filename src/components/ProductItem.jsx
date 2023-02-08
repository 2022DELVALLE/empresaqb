import React, { useContext } from "react";
import { Link } from "react-router-dom";


const ProductItem = ({ product }) => {

	const [productPasa, setProductPasa] = React.useState([]);

	const handleonClickComprar = () => {
		setProductPasa(setProductPasa.push(product))
		console.log(productPasa);
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
					<Link className="secondary-button-product-item" type="button" to={"/Detailsproduct"}
						onClick={() => handleonClickComprar()}
					>Comprar</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
