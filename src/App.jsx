import { AddCategory } from "./components/AddCategory";
import { GridGif } from "./components/GridGif";
import { useState } from "react";
// Importa los componentes 'AddCategory' y 'GridGif', adem�s del hook 'useState' de React para manejar el estado en el componente 'App'.

const App = () => {
  // Componente principal de la aplicaci�n.

  const [categories, setCategories] = useState([]);
  // Define 'categories' como el estado para almacenar las categor�as que el usuario ingresa.
  // Inicialmente es un array vac�o, lo que significa que no hay categor�as seleccionadas.

  return (
    <div className="container mt-3 mb-5">
      <h1 className="mb-3">Gif Expert</h1>
      <AddCategory categories={categories} setCategories={setCategories} />
      {/* Renderiza el componente 'AddCategory'. 
      Le pasa las props 'categories' y 'setCategories' para que el componente pueda a�adir nuevas categor�as. */}

      {categories.map((c) => (
        <GridGif key={c} category={c} />
        // Mapea sobre el array 'categories' para renderizar un componente 'GridGif' por cada categor�a ingresada.
        // Usa el nombre de la categor�a como 'key' para asegurarse de que React maneje correctamente cada componente en la lista.
        // Se pasa la categor�a actual como prop al componente 'GridGif', que luego obtiene y muestra los gifs correspondientes.
      ))}
    </div>
  );
};

export default App;
// Exporta el componente 'App' como el componente principal de la aplicaci�n.
