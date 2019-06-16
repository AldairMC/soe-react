import React from 'react';

const Event = (props) => {
    
    const {name, description, url, logo} = props.info

    let desc = description.text.substring(0,100)
    
     
    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    { logo !== null
                        ? <img src={logo.url} alt={name.text} />
                        : '' 
                    }
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">
                        {name.text}
                    </h3>
                    <p>{desc}</p>
                </div>
                <div>
                    <a className="uk-button uk-button-danger" target="_blank" href={url}>Ir</a>
                </div>

            </div>
        </div>
    );
};

export default Event;