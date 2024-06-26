import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Wishlist } from "./pages/wishlist";
import { Single } from "./pages/single";
import { Contact } from "./pages/contact";
import { Login } from "./pages/login";
import { Admin } from "./pages/admin/Admin";
import { useSelector } from "react-redux";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="single/:id" element={<Single />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<Auth/>}>
          <Route path="/admin" element={<Admin/>}/>
        </Route>
        {/* {isAuth ? (
        <Route path="admin" element={<Admin />} />
          ) : (
            <Route path="admin" element={<Navigate to="/login" />} />
          )} */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
