import React, { Component } from 'react';
import './App.css';
import ShowArticle from './ShowArticle'
import RankArticle from './RankArticle'
//import { render } from '@testing-library/react';

class App extends Component {
  
  state = {
    fields: {}
  }
  
  onSubmit = (fields) => {
    this.setState({fields})
    console.log("Component got: ", fields)
  }
  
  render(){
    return (
    <div>
    <div><ShowArticle /></div>
    <div><RankArticle onSubmit={fields => this.onSubmit(fields)}/></div>
    <p>{JSON.stringify(this.state.fields, null, 2)}</p>
    </div>
  )
  }
}

export default App;
