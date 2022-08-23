import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faWindows,
  faPlaystation,
  faXbox,
  faApple,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const Card = ({ game, index }) => {
  return (
    <Link to={`/game/${game.id}`} key={index}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="container-card"
      >
        <div className="img-card">
          <img src={game.background_image} alt="game cover" />
        </div>
        <div className="description-card">
          <div className="header-card">
            <div className="platform-card">
              {game.platforms?.map((element, index) => {
                return (
                  <p key={element.platform.id} className="icon-platform-card">
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
                      <FontAwesomeIcon icon={faXbox} className="icon-sidebar" />
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
      </motion.div>
    </Link>
  );
};

export default Card;
