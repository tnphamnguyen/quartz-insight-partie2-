import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Menu from './Menu'
import { STORE_GAMES_URL, LIB_GAMES_URL } from './../constants/config';

const Profile = props => {
  const [storeGames, setStoreGames] = useState({});
  const [libGames, setLibGames] = useState({});

  const axiosInstance = axios.create({
    timeout: 15000
  });

  useEffect(() => {
    async function getGames() {
      const res1 = await axiosInstance.get(STORE_GAMES_URL);
      setStoreGames(res1.data);
      const res2 = await axiosInstance.get(LIB_GAMES_URL);
      setLibGames(res2.data);
    }
    getGames();
  }, []);

  return (
    <React.Fragment>
     <Menu />
      <div className="containerPanel">
        <div className="panelProfile">
          {Array.isArray(storeGames.games) && (
            <React.Fragment>
              <h4>Mes jeux</h4>
              <div className="contenProfile">
                {storeGames.games.map((item,idx) => {
                  return (
                    <div className="cart" key={idx}>
                      <div className="image">
                        <img
                          src="https://placehold.it/180x300"
                          alt="placeholder"
                        />
                      </div>
                      <div className="content">
                        {item.name}
                        <div className="bottom">
                          <button>
                            <i className="fa fa-download w3-xxlarge spaceMr"></i>
                            Play online
                          </button>
                        </div>
                        <div className="bottom">
                          <button>
                            <i className="fa fa-play-circle w3-xxlarge spaceMr"></i>
                            Get Media
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="contentArrows">
                  <button>
                    <i className="fa fa-chevron-left w3-xxlarge spaceMr"></i>
                  </button>
                  <button>
                    <i className="fa fa-chevron-right w3-xxlarge"></i>
                  </button>
                </div>
              </div>
            </React.Fragment>
          )}

          <hr />
          <h4>Les prochaines sorties</h4>
          <div className="contenProfile">
            {Array.isArray(libGames.games) && (
              <React.Fragment>
                {libGames.games.map((item,idx) => {
                  return (
                    <div className="cart" key={idx}>
                      <div className="image">
                        <img
                          src="https://placehold.it/180x300"
                          alt="placeholder"
                        />
                      </div>
                      <div className="content">
                        <button>
                          <i className="fa fa-shopping-cart w3-xxlarge spaceMr"></i>
                          Buy
                        </button>
                        
                        <div className="bottom">
                        {item.name}
                        </div>
                        <div className="bottom">
                          <button>
                            <i className="fa fa-info w3-large spaceMr"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            )}

            <div className="contentArrows">
              <button>
                <i className="fa fa-chevron-left w3-xxlarge spaceMr"></i>
              </button>
              <button>
                <i className="fa fa-chevron-right w3-xxlarge"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Profile;
