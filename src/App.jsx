import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Assuming you have some global styles
import "./index.css"; // Tailwind CSS styles
import Navbar from "./components/navbar";
import Home from "./components/home";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
       
      </div>
    
    </Router>
  );
};

export default App;
