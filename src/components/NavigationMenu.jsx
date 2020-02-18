import React, { useState } from 'react';

//styles
import './NavigationMenu.css';

//sub-components
import SearchBar from './SearchBar';
import Submenu from './Submenu';

const NavigationMenu = (props) => {
    const [submenuData, setSubmenuData] = useState(undefined);

    return (
        <div className="nav-wrapper" onClick={() => setSubmenuData(undefined)}>
            <div className="nav-bg" />
            <nav>
                <div className="grid-container">
                    <div className="media">
                        <div className="nav-list">
                            { props.data ? props.data.map(item => (
                                <a href={item.url} key={item.title} 
                                    onMouseEnter={() => setSubmenuData(item)}>
                                    {item.title}
                                </a>
                            )) : undefined }
                        </div>
                        <div className="media-fixed pr">
                            <SearchBar />
                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    { submenuData ? (
                        <Submenu data={submenuData} onMouseLeave={() => setSubmenuData(undefined)} />
                    ) : undefined }
                </div>
            </nav>
        </div>
    )
}

export default NavigationMenu;