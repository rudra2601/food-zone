import "./App.css";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from "./pages/Login/Login.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Placeorder from "./pages/Place_order/Placeorder.jsx";
import Contact_Us from "./pages/Contact_Us.jsx"
import Food from "./pages/MENU/Food.jsx";
import Profile from "./pages/View_profile/Profile.jsx";
import Items from "./pages/Items.jsx";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Verify from "./pages/Verify/Verify.jsx";
import MyOrders from "./pages/MyOrders/MyOrders.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

function App() {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>   
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
     <Router>
      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/Home" element={<Home />} />
          <Route path="Food" element={<Food />} />
          <Route path="Items" element={<Items />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contact_Us" element={<Contact_Us />} />
          <Route path="/Placeorder" element={<Placeorder />}/>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Verify" element={<Verify />}/>
          <Route path="/MyOrders" element={<MyOrders />}/>
          <Route path="/reset/:token" element={<ResetPassword />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </div>
<Footer></Footer>
    </Router>
    </>
  );
}

export default App;
