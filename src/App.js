import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import { useNavigate, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Game from "./pages/Game";

// Components
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [activePlatform, setActivePlatform] = useState(0);
  const [dates, setDates] = useState(null);
  const [ordering, setOrdering] = useState(null);

  return (
    <div className="App">
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
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                page={page}
                setPage={setPage}
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre}
                activePlatform={activePlatform}
                setActivePlatform={setActivePlatform}
                dates={dates}
                setDates={setDates}
                ordering={ordering}
                setOrdering={setOrdering}
              />
            }
          />
          <Route
            path="/game/:id"
            element={
              <Game
                data={data}
                setData={setData}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// data,
// setData,
// search,
// page,
// activeGenre,
// activePlatform,
// dates,
// ordering,
// setCount,
