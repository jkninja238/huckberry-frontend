import React from 'react';

//styles
import './Submenu.css';

const Submenu = (props) => {
    let features = [];
    let temp = [];
    let ctr = 1;

    //distribute the features by 2
    props.data.features && props.data.features.tiles.forEach(item => {
        if(ctr%2===0) {
            //push to temp storage first then push to main storage
            temp.push(item);
            features.push(temp);
            temp = [];
         } else {
            //store to temp storage
            temp.push(item);
         }
         ctr++;
    });

    return (
        <div className="submenu-wrapper">
            <div className="main-grid">
                <div className="categories-grid condensed-body">
                    { props.data.children ? props.data.children.map(cat => (
                        <div className="categories-column" key={cat.title}>
                            <h4>
                                <a href={cat.url}>{cat.title}</a>
                            </h4>
                            <ul>
                                { cat.children.length>0 ? cat.children.map(item => (
                                    <li key={item.title}><a href={item.url}>{item.title}</a></li>
                                )) : undefined }
                            </ul>
                        </div>
                    )) : undefined }
                </div>
                <div className="features-grid condensed-body">
                    { features.length>0 ? features.map(item => (
                        <div key={item[0].title}>
                            { item.map(subitem => (
                                <a href={subitem.url} key={subitem.title}>
                                    <img className="feature-image" src={subitem.imageUrl} alt={subitem.title} />
                                    <span className="feature-title">{ subitem.title }</span>
                                </a>
                              ))
                            }
                        </div>
                    )) : undefined}
                </div>
            </div>
        </div>
    )
}

export default Submenu;
