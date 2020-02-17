import React, { useState, useEffect } from 'react';
import './Header.css';

//components
import Announcement from './components/Announcement';
import Banner from './components/Banner';

const Header = () => {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    fetch('./assets/NavigationData.json').then((res) => {
      console.log({res});
      res && setNavData(res);
    }).catch(e => console.error({e}));
  });

  return (
    <div className="Header">
      <Announcement />
      <Banner />
      <div>
        { navData ? navData.map(item => {
          
        }) : undefined }
      </div>
    	Hello World
    </div>
  );
}

export default Header;
