import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import axios from 'axios';

import { FRIENDS_URL } from './../constants/config';
const Friends = props => {
  const [friendsList, setFriendsList] = useState({});
  const [textSearch, setTextSearch] = useState('');

  const [tempArr, setTempArr] = useState([]);
  const axiosInstance = axios.create({
    timeout: 15000
  });

  const handleSearch = e => {
    const word = e.target.value;
    setTextSearch(word);
    if (word === '') {
      setFriendsList(tempArr);
    } else {
      if (Array.isArray(friendsList)) {
        let arr = [];
        for (let i = 0; i < tempArr.length; i++) {
          const item = tempArr[i];

          if (item.name.toLowerCase().includes(word.toLowerCase())) {
            console.log('cool');
            arr.push(item);
          }
        }
        console.log('cool', arr);
        setFriendsList(arr);
      } else {
        setFriendsList([]);
      }
    }
  };
  useEffect(() => {
    async function getFriends() {
      const res1 = await axiosInstance.get(FRIENDS_URL);
      setFriendsList(res1.data.friends);
      setTempArr(res1.data.friends);
    }
    getFriends();
  }, []);

  return (
    <React.Fragment>
      <Menu />
      <div className="containerPanel">
        <div className="contentFriends">
          <div className="input-icon-wrap">
            <span className="input-icon">
              <i className="fa fa-search w3-large"> </i>
            </span>
            <input
              value={textSearch}
              onChange={handleSearch}
              style={{ borderRadius: '25%' }}
              type="text"
              className="input-with-icon"
              placeholder="Search"
              id="form-name"
            />
          </div>

          <div className="contenProfile">
            {Array.isArray(friendsList) && (
              <React.Fragment>
                {friendsList.map((item, idx) => {
                  return (
                    <div className="cartVertical" key={idx}>
                      <div className="content">
                        <button>
                          <i className="fa fa-user w3-xxxlarge"></i>
                        </button>
                        <div className="bottom">
                          <button>
                            <i className="fa fa-check-circle w3-large spaceMr"></i>
                            {item.name}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            )}
          </div>
        </div>

        <div className="contentArrows" style={{ width: '60%' }}>
          <button>
            <i className="fa fa-chevron-left w3-xxlarge spaceMr"></i>
          </button>
          <button>
            <i className="fa fa-chevron-right w3-xxlarge"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Friends;
