import React from 'react';
import useGetCategories from '../../hooks/useGetCategories';
import useProSave from '../../hooks/useProSave';
import './EditarProductos.css'
import Swal from 'sweetalert2';


const EditarProducto = () => {

    //recupero categorias

    //Traemos la data de sliders
    const APICategories = 'http://127.0.0.1:8000/api/categories';

    const categoriesdata = useGetCategories(APICategories);

    const { responseProduct, error, loading, saveProduct } = useProSave();

    const [title, setTitle] = React.useState("");
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const [priceUnit, setPriceUnit] = React.useState(0);
    const handlePriceUnitChange = (event) => {
        setPriceUnit(event.target.value);
    }

    const [priceDozens, setPriceDozens] = React.useState(0);
    const handlePriceDozensChange = (event) => {
        setPriceDozens(event.target.value);
    }

    const [description, setDescription] = React.useState("");
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
    const [image, setImage] = React.useState("");
    const handleImageChange = (event) => {
        setImage(event.target.value);
    }

    const [quantity, setQuantity] = React.useState(0);
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const [idcategory, setIdCategory] = React.useState(0);
    const handleIdCategoryChange = (event) => {
        setIdCategory(event.target.value);
    }


    const handleSaveProduct = (idcategory) => {
        console.log(categoriesdata)
        console.log(idcategory)
        const categoryencontrado = categoriesdata.find(category => category.id === parseInt(idcategory));

        console.log(categoryencontrado)
        const newProduct = {
            title: title,
            priceUnit: priceUnit,
            priceDozens: priceDozens,
            description: description,
            image: [image],
            quantity: quantity,
            category_id: idcategory,
            category: categoryencontrado
        }
        saveProduct(newProduct);
    }

    React.useEffect(() => {
        if (responseProduct) {
            if (responseProduct.res = true) {
                Swal.fire(
                    'Felicitaciones!!!!',
                    responseProduct.message,
                    'success'
                );
            }
        }
    }, [responseProduct]);

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
            <h2>Añadir Producto</h2>
            <div className='container-productos'>
                <div className='container-labelpro' >
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
                <button className='button-guardar ' type="submit" onClick={() => handleSaveProduct(idcategory)}>Guardar cambios</button>
            </div>
        </>
    );
}

export default EditarProducto;
