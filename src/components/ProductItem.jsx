import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContextPreviewProduc from '../context/ContextPreviewProduct.js';
import AppContext from "../context/AppContext";

const ProductItem = ({ product }) => {


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
	);
};

export default ProductItem;
