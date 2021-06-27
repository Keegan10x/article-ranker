
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
        <html>
        <main>
          <WebArticle1/>
        </main>
          
        <nav>
          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle2" })
            }}
          >Next</button>
        </nav>

        </html>
      )
    }
    
    // Renders article 2 and back/next buttons
    if (this.state.showingComponent === "WebArticle2"){
      return(
        <html>

          <main>
          <WebArticle2/>
          </main>

          <nav>
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
          </nav>

        </html>
      )
    }

    // Renders article 3 and back/next buttons
    if (this.state.showingComponent === "WebArticle3"){
      return(
        <html>

          <main>
          <WebArticle3/>
          </main>

          <nav>
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
          </nav>

        </html>
      )
    }

    // Renders article 4 and back/next buttons
    if (this.state.showingComponent === "WebArticle4"){
      return(
        <html>
          
          
          <main>
          <WebArticle4/>
          </main>

          <nav>
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
          </nav>

        </html>
      )
    }

    // Renders article 5 and back/rank buttons
    if (this.state.showingComponent === "WebArticle5"){
      return(
        <html>

          <main>
          <WebArticle5/>
          </main>

          <nav>
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
          </nav>

        </html>
      )
    }

    // Renders ranking HTML from and back/home buttons
    if (this.state.showingComponent === "RankArticle"){
      return(
        <html>

          
          <RankArticle onSubmit={fields => this.onSubmit(fields)}/>
          <br></br>
          <section>
            <p>Output to database</p>
            <p>{JSON.stringify(this.state.fields, null, 2)}</p>
          </section>
          
          <nav>
          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle5" })
            }}
          >Back</button>

          <button
            onClick={ () => {
              this.setState({ showingComponent: "WebArticle1" })
            }}
          >Home</button>
          </nav>

        </html>
        
      )
    }


  
  }
}

export default App;
