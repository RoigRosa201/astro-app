import './App.css';
import { BrowserRouter, Route } from "react-router-dom"; 
import Home from "./components/Home";
import Pics from "./components/Pics";


function App() {
  return (
    <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={Pics} path="/" Pics />
      </BrowserRouter>

  );
}

export default App;
