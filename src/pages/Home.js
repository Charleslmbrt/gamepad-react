import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";

//import components
import SideNav from "../components/SideNav";
import Game from "../components/Game";

const Home = ({ search, data, setData, count, setCount }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [activePlatform, setActivePlatform] = useState(0);
  const [dates, setDates] = useState(null);
  const [ordering, setOrdering] = useState(null);

  const gamesPerPage = 40;
  const totalPages = Math.ceil(count / gamesPerPage);

  const handlePageClick = (event) => {
    const newPage = event.selected + 1;
    setPage(newPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://gamepadbackend.herokuapp.com/?search=${search}&page=${page}&page_size=40&genres=${activeGenre}&platforms=${activePlatform}&dates=${dates}&ordering=${ordering}`
        );
        setData(response.data.results);
        // setFiltered(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search, page, activeGenre, activePlatform, dates, ordering]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="main-home">
      <SideNav
        data={data}
        // setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        activePlatform={activePlatform}
        setActivePlatform={setActivePlatform}
        dates={dates}
        setDates={setDates}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      <div className="container-home">
        <motion.div layout className="content-home">
          <AnimatePresence>
            {data.map((game, index) => {
              return <Game game={game} index={game.id} />;
            })}
          </AnimatePresence>
        </motion.div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          pageCount={totalPages}
          onPageChange={handlePageClick}
          containerClassName={"navigationButtons"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"navigationDisabled"}
          activeClassName={"navigationActive"}
          pageRangeDisplayed={5}
          marginPagesDisplayed={0}
        />
      </div>
    </div>
  );
};

export default Home;
