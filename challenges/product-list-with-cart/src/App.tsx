import Cart from "./components/Cart";
import ConfirmationModal from "./components/ConfirmationModal";
import ProductListing from "./components/ProductListing";
import { CartContextProvider } from "./contexts/cart.context";

const App = () => {
  return (
    <CartContextProvider>
      <div className="py-8 bg-rose-50 flex justify-center h-screen gap-4 flex-col md:flex-row">
        <ProductListing />
        <Cart />
      </div>
      <ConfirmationModal />
    </CartContextProvider>
  );
};

export default App;
