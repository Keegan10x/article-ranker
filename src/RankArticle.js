import React from 'react';

export default class RankArticle extends React.Component {
    state = {
        article1_rank: 0,
        article2_rank: 0,
        article3_rank: 0,
        article4_rank: 0,
        article5_rank: 0
    }


    change = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 


    onSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
        //console.log(this.state)
    }


    render(){
        return(
                     
            <form>
                <h1>Rank The Articles</h1>
                
                <hr></hr>
                <label for="article1">1st article rank: {this.state.article1_rank}</label><br></br>
                <input type="range" name="article1_rank" value={this.state.article1_rank} min="0" max="5"
                onChange={event => this.change(event)}/>
                <hr></hr>
                
                <label for="article2">2nd article rank: {this.state.article2_rank}</label><br></br>
                <input type="range" name="article2_rank" value={this.state.article2_rank} min="0" max="5"
                onChange={event => this.change(event)}/>
                <hr></hr>

                <label for="article3">3rd article rank: {this.state.article3_rank}</label><br></br>
                <input type="range" name="article3_rank" value={this.state.article3_rank} min="0" max="5"
                onChange={event => this.change(event)}/>
                <hr></hr>

                <label for="article4">4th article rank: {this.state.article4_rank}</label><br></br>
                <input type="range" name="article4_rank" value={this.state.article4_rank} min="0" max="5"
                onChange={event => this.change(event)}/>
                <hr></hr>

                <label for="article5">5th article rank: {this.state.article5_rank}</label><br></br>
                <input type="range" name="article5_rank" value={this.state.article5_rank} min="0" max="5"
                onChange={event => this.change(event)}/>
                <hr></hr>

                <button onClick={(event) => this.onSubmit(event)}>Submit</button>
            </form>
            
        )
    }




}