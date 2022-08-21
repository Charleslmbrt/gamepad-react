import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import { useNavigate, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";

// Components
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Button appearance="primary"> Hello world </Button> */}
      <Header search={search} setSearch={setSearch} data={data} count={count} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                data={data}
                setData={setData}
                count={count}
                setCount={setCount}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
