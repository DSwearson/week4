import {useEffect, useState} from 'react'
import Login from './components/Login';
import Home from './components/Home';
import "./styles/app.css"
import Cart from "./components/Cart";

function App() {
  const [screen, setScreen] = useState("home");
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = "Week 2";
  }, []);

  return (
    <div className="App">
      { screen == "home" ? <Home setScreen={setScreen} cartList={cartList} setCartList={setCartList}/> : ""}

      { screen == "login" ? <Login setScreen={setScreen} /> : ""}

      { screen == "cart" ? <Cart setScreen={setScreen} cartList={cartList} setCartList={setCartList}/> : ""}
      
    </div>
  );
}

export default App;
