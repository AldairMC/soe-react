import React, { Component } from 'react';
import Event from './Event';
import PropTypes from 'prop-types'

class Events extends Component {
    render() {

        const evento = this.props.getEvent

        return (
            <div className="uk-child-width-1-4@m" uk-grid="true">
                { Object.keys(evento).map(key => ( 
                    <Event
                        key={key} 
                        info={evento[key]}
                    />        
                ))}
            </div>
        );
    }
}

Events.propTypes = {
    getEvent: PropTypes.array.isRequired
}

export default Events;