import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faPlaystation,
  faXbox,
  faApple,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

//import components
import SideNav from "../components/SideNav";

const Home = ({ search }) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  // const [nextPage, setNextPage] = useState("");
  // const [previousPage, setPreviousPage] = useState("");

  const gamesPerPage = 20;
  const numberOfGamesVisited = page * gamesPerPage;
  const totalPages = Math.ceil(count / gamesPerPage);

  const handlePageClick = (event) => {
    const newPage = (event.selected * gamesPerPage) % count;
    setPage(newPage);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newPage}`
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://gamepadbackend.herokuapp.com/?search=${search}`
        );
        setData(response.data.results);
        setCount(response.data.count);
        // setNextPage(response.data.next);
        // setPreviousPage(response.data.previous);
        // console.log(response.data.next);
        // console.log(response.data.previous);

        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search, page]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="main-home">
      <SideNav />

      <div className="content-home">
        {data
          .slice(numberOfGamesVisited, numberOfGamesVisited + gamesPerPage)
          .map((game, index) => {
            // console.log(data.results);
            return (
              <div key={index} className="container-card">
                <div className="img-card">
                  <img src={game.background_image} alt="game cover" />
                </div>
                <div className="description-card">
                  <div className="header-card">
                    <div className="platform-card">
                      {game.platforms?.map((element, index) => {
                        return (
                          <p key={index} className="icon-platform-card">
                            {element.platform.id === 4 ? (
                              <FontAwesomeIcon
                                icon={faWindows}
                                className="icon-sidebar"
                              />
                            ) : element.platform.id === 187 && 18 ? (
                              <FontAwesomeIcon
                                icon={faPlaystation}
                                className="icon-sidebar"
                              />
                            ) : element.platform.id === 1 && 186 ? (
                              <FontAwesomeIcon
                                icon={faXbox}
                                className="icon-sidebar"
                              />
                            ) : element.platform.id === 7 ? (
                              <FontAwesomeIcon
                                icon={faGamepad}
                                className="icon-sidebar"
                              />
                            ) : element.platform.id === 3 ? (
                              <FontAwesomeIcon
                                icon={faApple}
                                className="icon-sidebar"
                              />
                            ) : (
                              element.platform.id === 21 && (
                                <FontAwesomeIcon
                                  icon={faAndroid}
                                  className="icon-sidebar"
                                />
                              )
                            )}
                          </p>
                        );
                      })}
                    </div>
                    {game.metacritic ? (
                      <div className="rate-card">
                        <p>{game.metacritic}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="title-card">
                    <p>{game.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
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

// const [pageIndex, setPageIndex] = useState(1);

// useEffect(() => {
//   const infiniteFetchData = async () => {
//     try {
//       const response = await axios.get(
//         `https://gamepadbackend.herokuapp.com/?search=${search}&page=${pageIndex}&page_size=28`
//         // `https://gamepadbackend.herokuapp.com/?search=${search}`
//       );

//       const DataReceived = [];

//       data.results.forEach((element) => {
//         DataReceived.push(element.background_image);
//       });

//       const newFreshState = [...data];

//       let index = 0;
//       for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 10; j++) {
//           newFreshState[i].push(DataReceived[index]);
//           index++;
//         }
//       }

//       setData(newFreshState);

//       // setData(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   infiniteFetchData();
// }, [pageIndex]);

// useEffect(() => {
//   window.addEventListener("scroll", infiniteCheck);

//   return () => {
//     window.removeEventListener("scroll", infiniteCheck);
//   };
// }, []);

// const infiniteCheck = () => {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//   if (scrollHeight - scrollTop <= clientHeight) {
//     setPageIndex((pageIndex) => pageIndex + 1);
//   }
// };
