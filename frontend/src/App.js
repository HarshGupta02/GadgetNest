import './App.css';
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import WebFont from "webfontloader";
import React, { useState, useEffect } from 'react'; 
import Home from './component/Home/Home';
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from './component/User/LoginSignUp';
import { loadUser } from './actions/userAction';
import store from './store';
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js";
import UpdateProfile from './component/User/UpdateProfile.js';
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/admin/Dashboard.js";
import ProductList from "./component/admin/ProductList.js";
import NewProduct from './component/admin/NewProduct';
import UpdateProduct from './component/admin/UpdateProduct';
import OrderList from './component/admin/OrderList';
import ProcessOrder from './component/admin/ProcessOrder';
import UsersList from './component/admin/UsersList';
import UpdateUser from './component/admin/UpdateUser';
import ProductReviews from './component/admin/ProductReviews';
import Contact from './component/layout/Contact/Contact';
import About from './component/layout/About/About';
import NotFound from './component/layout/Not Found/NotFound';
import ProtectedRoute from './component/Route/ProtectedRoute';

function App() {
  const {isAuthenticated, user} = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const {data} = await axios.get(`/api/v1/stripeapikey`);
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families : ["Roboto", "Droid Sans", "Chilanka"],
      }
    })
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user = {user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            <Route exact path="/process/payment" element={<Payment/>} />
          </Routes>
        </Elements>
      )}
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        {/* <ProtectedRoute exact path="/account" element={<Profile />}/> */}
        <Route exact path="/account" element={<Profile />}/>
        <Route exact path="/me/update" element={<UpdateProfile />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/password/update" element={<UpdatePassword />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/shipping" element={<Shipping/>} />
        <Route exact path="/order/confirm" element={<ConfirmOrder/>} />
        <Route exact path="/success" element={<OrderSuccess />} />
        <Route exact path="/orders" element={<MyOrders/>} />
        <Route exact path="/order/:id" element={<OrderDetails/>} />
        <Route exact path="/admin/dashboard" element={<Dashboard/>}/>
        <Route exact path="/admin/products" element={<ProductList/>}/>
        <Route exact path="/admin/product" element={<NewProduct/>}/>
        <Route path="/admin/product/:id" element={<UpdateProduct/>}/>
        <Route exact path="/admin/orders" element={<OrderList/>}/>
        <Route exact path="/admin/order/:id" element={<ProcessOrder/>}/>
        <Route exact path="/admin/users" element={<UsersList/>}/>
        <Route exact path="/admin/user/:id" element={<UpdateUser/>}/>
        <Route exact path="/admin/reviews" element={<ProductReviews/>}/>
        <Route 
          element = {
            window.location.pathname === "/process/payment" ? null : <NotFound />
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
