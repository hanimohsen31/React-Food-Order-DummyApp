import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Headers from "./components/Layout/Headers";
import Meals from "./components/Meals/Meals";
// import {CartProvider} from "./store/cartContext";

function App() {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleHideCart = () => {
    setShowCart(false);
  };
  return (
    // <CartProvider>
    <>
      {showCart === true && <Cart handleHideCart={handleHideCart} />}
      {/* {<Cart handleHideCart={handleHideCart} /> && showCart} */}
      <Headers handleShowCart={handleShowCart} />
      <Meals />
      </>
    // </CartProvider>
  );
}

export default App;
