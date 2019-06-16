import React from 'react';
import PropTypes from 'prop-types';

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

Event.propTypes = {
    info: PropTypes.shape({
        name: PropTypes.shape({
            text: PropTypes.string
        })
    })
}

export default Event;