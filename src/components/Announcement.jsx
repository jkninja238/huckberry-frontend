import React from 'react'

const announcementStyle = {
    fontWeight: '700',
    letterSpacing: '1.5px',
    lineHeight: '45px',
    fontSize: '12px',
    fontFamily: 'Franklin Gothic Condensed,sans-serif',
    color: '#fff'
}

const anchorStyle = {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer'
}

const Announcement = () => {
    return (
        <div style={announcementStyle}>
            <a style={anchorStyle} href="/#">
                FREE U.S. SHIPPING $75+ &nbsp;|&nbsp; FREE RETURNS &nbsp;|&nbsp; BEST PRICE GUARANTEED
            </a>
        </div>
    )
}

export default Announcement;
