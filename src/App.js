import FilterOptions from "./Components/FilterOptions";
import Header from "./Components/Header";
import ProductDisplay from "./Components/ProductDisplay";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FilterOptions />
        <ProductDisplay />
      </main>
    </div>
  );
}

export default App;
