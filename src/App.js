import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

// COMPONENTS
import Store from "./components/Store";
import ProductDetails from "./shared/ProductDetails";

// CONTEXT
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
