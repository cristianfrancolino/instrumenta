import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <main className="itemListContainer">
      <h1>{greeting}</h1>
    </main>
  );
}

export default ItemListContainer;
