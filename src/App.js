import './App.css';
import { BrowserRouter, Route } from "react-router-dom"; 
import Home from "./components/Home";
import Pics from "./components/Pics";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={Pics} path="/" Pics />
       </div>
      </BrowserRouter>

  );
}

export default App;
