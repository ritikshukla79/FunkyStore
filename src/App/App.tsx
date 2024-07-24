import "./App.css";
import Header from "../components/Header/Header.tsx";
import Home from "../Pages/Home/Home.tsx";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { store } from "../Reduxe/store/Store.ts";
import Cart from "../Pages/Cart/Cart.tsx";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Product1 from "../Pages/Product1/Product1.tsx";
        

function App() {
  return (
    <Provider store={store}>
       <PrimeReactProvider>
      <Header />
      <Routes>
        <Route path="/products" element={<Product1 />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element = {<Cart/>}/>
      </Routes>
      </PrimeReactProvider>
    </Provider>
  );
}

export default App;
