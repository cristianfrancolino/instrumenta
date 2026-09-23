import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos a Instrumenta! Encontrá tu próximo instrumento" />
    </>
  );
}

export default App;
