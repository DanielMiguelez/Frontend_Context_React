import './App.css';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import { UserProvider } from './context/UserContext/UserState';
import Header from './components/Header/Header';
import Logout from './components/Logout/Logout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Header/>
          <Routes>
           <Route path="/" element={ <Home/>}/>
           <Route path="/login" element={ <Login />}/>
           <Route path="/profile" element={<Profile />}/>
           <Route path="/logout" element={<Logout/>}/>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
