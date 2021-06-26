
import React, { Component } from 'react';
import './App.css';
import WebArticle1 from './WebArticle1'
import RankArticle from './RankArticle'



import {WebArticle2} from './WebArticle2'
import {WebArticle3} from './WebArticle3'
import {WebArticle4} from './WebArticle4'
import {WebArticle5} from './WebArticle5'



//import { render } from '@testing-library/react';

class App extends Component {
  
  state = {
    fields: {},
    showingComponent: "WebArticle1"
  }
  
  onSubmit = (fields) => {
    this.setState({fields})
    console.log("Component got: ", fields)
  }
  
  render(){
    if (this.state.showingComponent === "WebArticle1"){
      return(
        <div>
          <WebArticle1/><br></br>
          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle2" })
            }}
          >Next</button>
        </div>
      )
    }
    

    if (this.state.showingComponent === "WebArticle2"){
      return(
        <div>
          <WebArticle2/><br></br>
          
          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle1" })
            }}
          >Back</button>

          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle3" })
            }}
          >Next</button>
        </div>
      )
    }

    if (this.state.showingComponent === "WebArticle3"){
      return(
        <div>
          <WebArticle3/><br></br>

          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle2" })
            }}
          >Back</button>

          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle4" })
            }}
          >Next</button>
        </div>
      )
    }

    if (this.state.showingComponent === "WebArticle4"){
      return(
        <div>
          <WebArticle4/><br></br>

          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle3" })
            }}
          >Back</button>

          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle5" })
            }}
          >Next</button>
        </div>
      )
    }

    if (this.state.showingComponent === "WebArticle5"){
      return(
        <div>
          <WebArticle5/><br></br>

          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle4" })
            }}
          >Back</button>

          <button
            onClick={ () => {
              this.setState({ showingComponent: "RankArticle" })
            }}
          >Next</button>
        </div>
      )
    }

    if (this.state.showingComponent === "RankArticle"){
      return(
        <div>
          <div><RankArticle onSubmit={fields => this.onSubmit(fields)}/></div>
          <p>{JSON.stringify(this.state.fields, null, 2)}</p>

          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle5" })
            }}
          >Back</button>

          <div>
            <h2>Back To Article 1</h2>
          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle1" })
            }}
          >Home</button>
          </div>
        </div>
        
      )
    }


  
  }
}

export default App;
