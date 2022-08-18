import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import { useNavigate, Link } from "react-router-dom";

// Framer Motion
// import { motion } from "framer-motion";

// Pages
import Home from "./pages/Home";

// Components
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      {/* <Button appearance="primary"> Hello world </Button> */}
      <Header search={search} setSearch={setSearch} />
      <Router>
        <Routes>
          <Route path="/" element={<Home search={search} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
