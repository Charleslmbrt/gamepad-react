import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

// Rsuite
import "rsuite/dist/rsuite.min.css";
import { Button } from "rsuite";

// Framer Motion
import { motion } from "framer-motion";

// Pages
import Home from "./pages/Home";

// Components
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <Button appearance="primary"> Hello world </Button> */}
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
