import React from 'react';

//styles
import './NavigationMenu.css';

//sub-components
import SearchBar from './SearchBar';

const NavigationMenu = (props) => {
    console.log({props: props.data});

    return (
        <div className="nav-wrapper">
            <div className="nav-bg" />
            <nav>
                <div className="grid-container">
                    <div className="media">
                        <div className="nav-list">
                            { props.data ? props.data.map(items => (
                                <a href={items.url} key={items.title}>{items.title}</a>
                            )) : undefined }
                        </div>
                        <div className="media-fixed pr">
                            <SearchBar />
                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    <br />FOR HOVER
                </div>
            </nav>
        </div>
    )
}

export default NavigationMenu;