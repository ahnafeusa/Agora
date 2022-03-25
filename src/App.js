import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Additems from "./pages/Additems";
import Cart from "./pages/Cart"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/about" exact component={About} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/additems" exact component={Additems} />
          <Route path="/cart" exact component={Cart}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
