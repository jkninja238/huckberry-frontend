import React, { useState } from 'react';
import './Header.css';

//data
import data from './assets/NavigationData.json';

//components
import Announcement from './components/Announcement';
import Banner from './components/Banner';
import NavigationMenu from './components/NavigationMenu';

const Header = () => {
  const [navData] = useState(data);

  return (
    <div className="Header">
      <Announcement />
      <Banner />
      <NavigationMenu data={navData.navigation.items || []} />
    </div>
  );
}

export default Header;
