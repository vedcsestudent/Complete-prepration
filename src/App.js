
import './App.css';
import Navigation from "./subcomponent/Navbar"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Programming from "./pages/Programming";
import Dsa from "./pages/Dsa";
import English from "./pages/English";
function App() {
  return (
    <div className="App">
    <BrowserRouter> 
    <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        
       
        <Route path="/programming" element={<Programming></Programming>}></Route>
        <Route path="/dsa" element={<Dsa></Dsa>}></Route>
        <Route path="/English" element={<English></English>}></Route>
      </Routes>
     
    </BrowserRouter>
   
    
  
    </div>
  );
}

export default App;
