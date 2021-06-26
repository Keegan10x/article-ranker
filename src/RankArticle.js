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
            <div>
            <h1>Rank The Articles</h1>
            <form>
                <label for="article1">Rank Article 1</label><br></br>
                0<input type="range" name="article1_rank" value={this.state.article1_rank} min="0" max="5"
                onChange={event => this.change(event)}/>5
                <hr></hr>
                
                <label for="article2">Rank Article 2</label><br></br>
                0<input type="range" name="article2_rank" value={this.state.article2_rank} min="0" max="5"
                onChange={event => this.change(event)}/>5
                <hr></hr>

                <label for="article3">Rank Article 3</label><br></br>
                0<input type="range" name="article3_rank" value={this.state.article3_rank} min="0" max="5"
                onChange={event => this.change(event)}/>5
                <hr></hr>

                <label for="article4">Rank Article 4</label><br></br>
                0<input type="range" name="article4_rank" value={this.state.article4_rank} min="0" max="5"
                onChange={event => this.change(event)}/>5
                <hr></hr>

                <label for="article5">Rank Article 5</label><br></br>
                0<input type="range" name="article5_rank" value={this.state.article5_rank} min="0" max="5"
                onChange={event => this.change(event)}/>5
                <hr></hr>


                <button onClick={(event) => this.onSubmit(event)}>Submit</button>

            </form>
            </div>
        )
    }




}