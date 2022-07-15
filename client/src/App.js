import "./App.css";
import LoginPage from "./components/LoginPage";
import {  Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
   
        <div>
        <h1>Spill the Tea</h1>
        <nav>
          <Link to="/register">register</Link> |{" "}
          <Link to="/login">login</Link>
        </nav>
      </div>
    
    </div>
  );
}

export default App;
