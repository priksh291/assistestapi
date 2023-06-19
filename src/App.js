import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import React from "react"

import Login from './Login'
import Forgot from "./Forgot";
import Form from "./Form";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Forgot" element={<Forgot/>} />
          <Route path="/Form" element={<Form/>} />
        </Routes>
      </Router>
  );
}

export default App;
