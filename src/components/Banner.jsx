import React from 'react';
import SVG from 'react-inlinesvg';

//icons
import Logo from '../assets/huckberry-logo.svg';
import BagIcon from '../assets/icon-bag.svg'

const bannerContainer = {
    paddingRight: '60px',
    paddingLeft: '60px',
    backgroundColor: '#fff'
}

const bannerContentContainer = {
    height: '75px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #f1f3f3'
}

const fullWidth = {
    display: 'block',
    width: '100%'
}

const rowStyle = {
    marginLeft: '-12.5px',
    marginRight: '-12.5px'
}

const colStyle = {
    verticalAlign: 'middle',
    width: '33.33333%',
    paddingLeft: '12.5px',
    paddingRight: '12.5px',
    display: 'inline-block'
}

const logoContainer = {
    textAlign: 'center',
    marginTop: '20px'
}

const accountsStyle = {
    fontFamily: 'Franklin Gothic Condensed,sans-serif',
    margin: '0',
    padding: '0',
    listStyle: 'none',
    lineHeight: '0',
    display: 'block',
    textAlign: 'right'
}

const mainListStyle = {
    marginRight: '25px',
    display: 'inline-block'
}

const buttonStyle = {
    minWidth: '40px',
    padding: '0',
    border: 'none',
    background: 'none',
    textAlign: 'center',
    cursor: 'pointer'
}

const imgStyle = {
    width: '40%',
    verticalAlign: '-7px',
    marginRight: '5px'
}

const Banner = () => {
    return (
        <div style={bannerContainer}>
            <div style={bannerContentContainer}>
                <div style={fullWidth}>
                    <div style={rowStyle}>
                        <div style={colStyle}></div>
                        <div style={colStyle}>
                            <h1 style={logoContainer}>
                                <SVG src={Logo} alt='Huckberry' />
                            </h1>
                        </div>
                        <div style={colStyle}>
                            <ul style={accountsStyle}>
                                <li style={mainListStyle}>
                                    <button style={buttonStyle}>
                                        My Account
                                    </button>
                                </li>
                                <li style={mainListStyle}>
                                    <button style={buttonStyle}>
                                        <SVG src={BagIcon} alt='Cart' style={imgStyle} /> (0)
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
