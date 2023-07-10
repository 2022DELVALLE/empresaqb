import React from 'react';
import AppContext from '../context/AppContext';
import useCatUpdate from '../hooks/useCatUpdate';
import Swal from 'sweetalert2';
import './EditarCategeoria.css';

const Editarcategoria = () => {

    const { responseUpdateCategory, error, loading, updateCategory } = useCatUpdate();

    const { categoria, setCategoria } = React.useContext(AppContext);

    const [name, setName] = React.useState(categoria.name);
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const [image, setimage] = React.useState(categoria.image);
    const handleimageChange = (event) => {
        setimage(event.target.value);
    }

    const [description, setdescription] = React.useState(categoria.description);
    const handledescriptionChange = (event) => {
        setdescription(event.target.value);
    }

    const handleSaveCategory = () => {
        const newCategory = {
            name: name,
            image: image,
            description: description,
        }
        console.log(newCategory);
        updateCategory(newCategory, categoria.id);
    }

    React.useEffect(() => {
        if (responseUpdateCategory) {
            if (responseUpdateCategory.res = true) {
                Swal.fire(
                    'Felicitaciones!!!!',
                    'Se actualizo exitosamente',
                    'success'
                );
            }
        }
    }, [responseUpdateCategory]);

    React.useEffect(() => {
        if (error) {
            Swal.fire(
                'Upsss!!!!',
                error.message,
                'info'
            );
        }
    }, [error]);
    console.log(error)



    return (
        <>
            <div className='h2-cat'>
                <h2 >Editar Categoría</h2>
            </div>
            <div className='container-categorias'>
                <div className='container-labelcat'>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name"
                        value={name}
                        onChange={handleNameChange} />
                </div>
                <div className='container-labelcat'>
                    <label htmlFor="image">Imagen:</label>
                    <input type="text" id="image" name="image"
                        value={image}
                        onChange={handleimageChange}
                    />
                </div>
                <div className='container-labelcat'>
                    <label htmlFor="description">Descripción:</label>
                    <input type="text" id="description" name="description"
                        value={description}
                        onChange={handledescriptionChange} />                </div>
                <button type="submit"
                    className='button-guardar '
                    onClick={() => handleSaveCategory()}
                >Guardar cambios</button>
            </div>
        </>
    );
}

export default Editarcategoria;