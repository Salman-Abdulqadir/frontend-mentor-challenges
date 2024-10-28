import Cart from "./components/Cart";
import ProductListing from "./components/ProductListing";

const App = () => {
  return (
    <div className="flex align-top min-h-screen gap-4 flex-col md:flex-row">
      <div className="flex-[2]">
        <ProductListing />
      </div>
      <div className="flex-1">
        <Cart />
      </div>
    </div>
  );
};

export default App;
