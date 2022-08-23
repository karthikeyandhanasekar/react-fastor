import FashionAds from "./Components/FashionAds";
import FilterOptions from "./Components/FilterOptions";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductDisplay from "./Components/ProductDisplay";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <FilterOptions />
          <ProductDisplay />
        </section>
        <br />
        <section>
          <FashionAds />
          <br />
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
