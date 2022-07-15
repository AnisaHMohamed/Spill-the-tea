import "./App.css";
import LoginPage from "./components/LoginPage";
import {  Box } from "@chakra-ui/react";

function App() {

  return (
    <div className="App">
   
        <Box height="100%" backgroundColor="#262424">
          <LoginPage />
        </Box>
    
    </div>
  );
}

export default App;
