import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card";

import "./styles/cards.scss";



function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/:id" element={<show />} />
        
      </Routes>
     
    </Router>
    
  );
}

export default App;
