import ProductCard from "./components/ProductCard";

function App() {
  return (
    <main>
      <h1>Instrumenta</h1>

      <section>
        <ProductCard nombre="Guitarra" precio={500} />
        <ProductCard nombre="Batería" precio={1000} />
      </section>
    </main>
  );
}

export default App;
