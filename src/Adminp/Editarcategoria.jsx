import React from 'react';
import AppContext from '../context/AppContext';
import useCatUpdate from '../hooks/useCatUpdate';

const Editarcategoria = () => {

    const { responseUpdateCategory, error, loading, updateCategory} = useCatUpdate();

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
    console.log(responseUpdateCategory)
    console.log(error)

    return (
        <>
            <h2>Editar Categoría</h2>
            <div>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name"
                        value={name}
                        onChange={handleNameChange} />
                </div>
                <div>
                    <label htmlFor="image">Imagen:</label>
                    <input type="text" id="image" name="image"
                        value={image}
                        onChange={handleimageChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Descripción:</label>
                    <input type="text" id="description" name="description"
                        value={description}
                        onChange={handledescriptionChange} />                </div>
                <button type="submit"
                onClick={()=>handleSaveCategory()}
                >Guardar cambios</button>
            </div>
        </>
    );
}

export default Editarcategoria;