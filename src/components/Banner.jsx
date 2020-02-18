import React from 'react';
import SVG from 'react-inlinesvg';

//style
import './Banner.css';

//icons
import Logo from '../assets/huckberry-logo.svg';
import BagIcon from '../assets/icon-bag.svg'

const Banner = () => {
    return (
        <div className="content-wrapper">
            <div className="banner-content-wrapper">
                <div className="full-width">
                    <div className="banner-row">
                        <div className="banner-col"></div>
                        <div className="banner-col">
                            <h1 className="logo-wrapper">
                                <SVG src={Logo} alt='Huckberry' />
                            </h1>
                        </div>
                        <div className="banner-col">
                            <ul className="account-wrapper">
                                <li>
                                    <button>
                                        My Account
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <SVG src={BagIcon} alt='Cart' /> (0)
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
