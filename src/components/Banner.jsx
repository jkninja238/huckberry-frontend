import React, { useState } from 'react';
import SVG from 'react-inlinesvg';

//style
import './Banner.css';

//icons
import Logo from '../assets/huckberry-logo.svg';
import BagIcon from '../assets/icon-bag.svg'

const Banner = () => {
    const [isShowHover, setShowHover] = useState(false);

    return (
        <div className="content-wrapper" onClick={() => setShowHover(false)}>
            <div className="banner-content-wrapper">
                <div className="full-width">
                    <div className="banner-row">
                        <div className="banner-col"></div>
                        <div className="banner-col">
                            <h1 className="logo-wrapper">
                                <SVG src={Logo} alt='Huckberry' />
                            </h1>
                        </div>
                        <div className="banner-col pr">
                            <ul className="account-wrapper">
                                <li className="acc-li">
                                    <button 
                                      onMouseEnter={() => setShowHover(true)}>
                                        My Account
                                    </button>
                                </li>
                                <li>
                                    <button style={{textDecoration: 'none'}}>
                                        <SVG src={BagIcon} alt='Cart' /> (0)
                                    </button>
                                </li>
                            </ul>
                            <div className="account-hover-wrapper"
                               style={!isShowHover ? {display : 'none'} : {}}
                               onMouseLeave={() => setShowHover(false)}>
                                <ul className="account-hover-list-wrapper">
                                    <li>Details</li>
                                    <li>Order History</li>
                                    <li>Preferences</li>
                                    <li>Back in Stock</li>
                                    <li>Log Out</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
