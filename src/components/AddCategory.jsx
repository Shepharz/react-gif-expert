import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  // Definimos un estado llamado 'inputValue' y su función para actualizarlo 'setInputValue'
  const [inputValue, setInputValue] = useState("");
  // Función que se ejecuta cuando el valor del input cambia
  const onInputChange = ({ target }) => {
    // Asigna el nuevo valor del input al estado 'inputValue'
    setInputValue(target.value);
  };

  // Función que se ejecuta cuando se envía el formulario
  const onSubmit = (e) => {
    // Evita que la página se recargue al enviar el formulario
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // Llama a la función 'setCategories' para agregar una nueva categoría al estado de categorías
    // Se utiliza una función de callback para garantizar que las categorías existentes se conserven
    // setCategories((prevCategories) => [inputValue, ...prevCategories]);
    // prevCategories es el estado anterior (la lista de categorías actual)
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    // Componente de formulario con un manejador 'onSubmit' para la función 'onSubmit'
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
