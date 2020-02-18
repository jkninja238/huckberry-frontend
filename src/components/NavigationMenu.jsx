import React from 'react'

const backgroundDiv = {
    height: '53px',
    backgroundColor: '#fff'
}

const NavigationMenu = (props) => {
    return (
        <div style={{position: 'relative'}}>
            <div style={backgroundDiv} />
            { props.children }
        </div>
    )
}

export default NavigationMenu;