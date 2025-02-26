import './App.css';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import { UserProvider } from './context/UserContext/UserState';
import Header from './components/Header/Header';
import Logout from './components/Logout/Logout';
import Products from './components/Products/Products';
import { ProductsProvider } from './context/ProductContext/ProductsState';
import Cart from './components/Cart/Cart';
import { OrderProvider } from './context/OrderContext/OrderState';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <OrderProvider>
              <Header/>
              <Routes>
              <Route path="/" element={ <Home/>}/>
              <Route path="/login" element={ <Login />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/cart" element={<Cart/>}/>
              </Routes>
            </OrderProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
