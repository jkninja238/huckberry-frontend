import React from 'react'

const containerStyle = {
    background: '#1d2b39'
}

const announcementStyle = {
    fontWeight: '700',
    letterSpacing: '1.5px',
    lineHeight: '45px',
    fontSize: '12px',
    lineHeight: '14px',
    fontFamily: 'Franklin Gothic Condensed,sans-serif'
}

const anchorStyle = {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer'
}

const Announcement = () => {
    return (
        <div style={containerStyle}>
            <div style={announcementStyle}>
                <a style={anchorStyle} >
                    FREE U.S. SHIPPING $75+ &nbsp;|&nbsp; FREE RETURNS &nbsp;|&nbsp; BEST PRICE GUARANTEED
                </a>
            </div>
        </div>
    )
}

export default Announcement;
