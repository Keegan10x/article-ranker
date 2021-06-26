
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

    // Renders article 1 and back/next buttons
    if (this.state.showingComponent === "WebArticle1"){
      return(
        <main>
          <WebArticle1/><br></br>
          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle2" })
            }}
          >Next</button>
        </main>
      )
    }
    
    // Renders article 2 and back/next buttons
    if (this.state.showingComponent === "WebArticle2"){
      return(
        <main>
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
        </main>
      )
    }

    // Renders article 3 and back/next buttons
    if (this.state.showingComponent === "WebArticle3"){
      return(
        <main>
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
        </main>
      )
    }

    // Renders article 4 and back/next buttons
    if (this.state.showingComponent === "WebArticle4"){
      return(
        <main>
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
        </main>
      )
    }

    // Renders article 5 and back/rank buttons
    if (this.state.showingComponent === "WebArticle5"){
      return(
        <main>
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
        </main>
      )
    }

    // Renders ranking HTML from and back/home buttons
    if (this.state.showingComponent === "RankArticle"){
      return(
        <main>
          <RankArticle onSubmit={fields => this.onSubmit(fields)}/>
          <p>{JSON.stringify(this.state.fields, null, 2)}</p>

          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle5" })
            }}
          >Back</button>

          
            <h2>Back To Article 1</h2>
          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle1" })
            }}
          >Home</button>
          

        </main>
        
      )
    }


  
  }
}

export default App;
