import React, { Component } from 'react';

class Form extends Component {
    
    constructor(props){
        super(props);
        this.nameEventRef = React.createRef()
        this.categoryRef = React.createRef()
    }

    getCategoryProp = (key) => {
        const category = this.props.getCategory[key]

        const {id, name_localized} = category

        if(!id || !name_localized) return null;

        return (
            <option key={id} value={id}>{name_localized}</option>
        )
    }

    

    getData = (e) => {
        e.preventDefault()

        const data = {
            nameEvent: this.nameEventRef.current.value,
            category: this.categoryRef.current.value
        }

        console.log(data)
    }
    
    render() {

        const key = Object.keys(this.props.getCategory)
        
        return (
            <form onSubmit={this.getData}>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Search event "name and category"
                    </legend>

                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input ref={this.nameEventRef} className="uk-input" type="text" placeholder="Name event or city"/>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <select ref={this.categoryRef} className="uk-select">
                                {key.map(this.getCategoryProp)}
                            </select>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <input className="uk-button uk-button-primary" type="submit" value="Search event"/>
                        </div>
                    </div>
                </fieldset>    
            </form>
        );
    }
}

export default Form;