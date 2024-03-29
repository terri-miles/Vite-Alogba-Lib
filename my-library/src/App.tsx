import { Routes, Route } from "react-router-dom";
import Home from "./scenes/home/Index";
import UserInput from '@/scenes/userInput'
import Dashboard from "./scenes/admin";


function App() {
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/borrowBookPage" element={<UserInput />} />
      </Routes>
    </div>
  );
}

export default App;
