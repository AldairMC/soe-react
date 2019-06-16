import React, { Component } from 'react';
import Header from "./components/Header";
import Form from './components/Form';
import Events from './components/Events';

class App extends Component {
  
  state = {
    category: [],
    event: []
  }

  token = 'BE2UHIODUE3JB427BMXK';

  componentDidMount(){
    this.getCategory();
  }

  getCategory = async () => {

    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`

    await fetch(url)
      .then(respuesta => {
        return respuesta.json()
      })
      .then(category => {
        this.setState({
          category: category.categories
        })
      })
  }

  getEvent = async data => {

    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${data.nameEvent}&categories=${data.category}&token=${this.token}&locale=es_ES`

    await fetch(url)
      .then(respuesta => {
        return respuesta.json()
      })
      .then(event => {
        this.setState({
          event: event.events
        })
      })
  }
  
  
  render() {
    return (
      <div className="App">
        <Header 
          title = "Searcher of events"
        />
        <div className="uk-container">
          <Form 
            getCategory={this.state.category}
            getEvent={this.getEvent}
          />

          <Events 
            getEvent={this.state.event}
          />
        </div>
      </div>
    );
  }
}

export default App;