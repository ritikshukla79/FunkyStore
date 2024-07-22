import "./App.css";
import Header from "../components/Header/Header.tsx";
import Home from "../Pages/Home/Home.tsx";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { store } from "../Reduxe/store/Store.ts";
import Products from "../Pages/Products/Products.tsx";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
