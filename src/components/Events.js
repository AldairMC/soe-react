import React, { Component } from 'react';
import Event from './Event';

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

export default Events;