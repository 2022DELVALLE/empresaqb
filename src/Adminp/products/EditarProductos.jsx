import React from 'react';
import AppContext from '../../context/AppContext';
import useProUpdate from '../../hooks/useProUpdate';
import './EditarProductos.css'
import Swal from 'sweetalert2';

const EditarProducto = () => {
    const { productospasado, setProductosPasado } = React.useContext(AppContext);

    const { responseUpdateProduct, error, loading, updateProduct } = useProUpdate();

    const [title, setTitle] = React.useState(productospasado.title);
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const [priceUnit, setPriceUnit] = React.useState(productospasado.priceUnit);
    const handlePriceUnitChange = (event) => {
        setPriceUnit(event.target.value);
    }

    const [priceDozens, setPriceDozens] = React.useState(productospasado.priceDozens);
    const handlePriceDozensChange = (event) => {
        setPriceDozens(event.target.value);
    }

    const [description, setDescription] = React.useState(productospasado.description);
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
    const [image, setImage] = React.useState(productospasado.image[0]);
    const handleImageChange = (event) => {
        setImage(event.target.value);
    }

    const [quantity, setQuantity] = React.useState(productospasado.quantity);
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const [idcategory, setIdCategory] = React.useState(productospasado.category_id);
    const handleIdCategoryChange = (event) => {
        setIdCategory(event.target.value);
    }


    const handleSaveProduct = () => {
        const newProduct = {
            title: title,
            priceUnit: priceUnit,
            priceDozens: priceDozens,
            description: description,
            image: [image],
            quantity: quantity,
            category_id: idcategory,
            category: {
                id: productospasado.category.id,
                name: productospasado.category.name,
                image: productospasado.category.image,
                description: productospasado.category.description,
                created_at: productospasado.category.created_at,
                updated_at: productospasado.category.updated_at
            }
        }
        console.log(newProduct);
        updateProduct(newProduct, productospasado.id);
    }

    React.useEffect(() => {
        if (responseUpdateProduct) {
            if (responseUpdateProduct.res = true) {
                Swal.fire({
                    title: 'Se actualizo exitosamente',
                    confirmButtonText: 'Aceptar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = 'http://localhost:8080/tableproductos'
                    }
                });
            }
        }
    }, [responseUpdateProduct]);

    React.useEffect(() => {
        if (error) {
            Swal.fire(
                'Upsss!!!!',
                error.message,
                'info'
            );
        }
    }, [error]);
    return (
        <>
            <h2>Editar Producto</h2>
            <div className='container-productos'>
                <div className='container-labelpro'>
                    <label htmlFor="title">Título:</label>
                    <input type="text" id="title" name="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className='container-labelpro'>
                    <label htmlFor="priceUnit">Precio Unitario:</label>
                    <input type="text" id="priceUnit" name="priceUnit"
                        value={priceUnit}
                        onChange={handlePriceUnitChange}
                    />
                </div>
                <div className='container-labelpro'>
                    <label htmlFor="priceDozens">Precio por Docena:</label>
                    <input type="text" id="priceDozens" name="priceDozens"
                        value={priceDozens}
                        onChange={handlePriceDozensChange}
                    />
                </div>
                <div className='container-labelpro'>
                    <label htmlFor="description">Descripción:</label>
                    <input type="text" id="description" name="description"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>
                <div className='container-labelpro'>
                    <label htmlFor="description">Imagen:</label>
                    <input type="text" id="description" name="description"
                        value={image}
                        onChange={handleImageChange}
                    />
                </div>
                <div className='container-labelpro'>
                    <label htmlFor="quantity">Cantidad:</label>
                    <input type="text" id="quantity" name="quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                </div>
                <div className='container-labelpro'>
                    <label htmlFor="quantity">Categoria:</label>
                    <input type="text" id="quantity" name="quantity"
                        value={idcategory}
                        onChange={handleIdCategoryChange}
                    />
                </div>
                <button className='button-guardar ' type="submit" onClick={handleSaveProduct}>Guardar cambios</button>
            </div>
        </>
    );
}

export default EditarProducto;
