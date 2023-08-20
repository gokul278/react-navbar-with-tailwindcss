import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Product } from "./Components/Product";
import { Career } from "./Components/Career";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <div className="App h-screen">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/career" element={<Career/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
