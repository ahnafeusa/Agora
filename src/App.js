import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Additems from "./pages/Additems";

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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
