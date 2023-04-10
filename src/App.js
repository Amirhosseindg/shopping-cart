import "./App.css";

// COMPONENTS
import Store from "./components/Store";

// CONTEXT
import ProductContextProvider from "./context/ProductContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  );
}

export default App;
