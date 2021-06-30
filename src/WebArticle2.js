import React,{Component} from 'react'
export class WebArticle2 extends Component {

    //set state to hold the article contetns
    //the article index
    //and loading status
    state = {
        index: 1,
        title: null,
        textContent: [],
        imgContent: [],
        listContent: [],
        articles: [
            'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json',
            'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json',
            'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json',
            'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-4.json',
            'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-5.json'
        ],
        alternateText: "A random pricture from an api",
        loading: true
    }
    

    async componentDidMount(){
        
        let data = { }
        //tries to fetch data from url and parse to json
        //if sucessfull, the object is assigned to data
        try {
            const url = this.state.articles[this.state.index];
            const response = await fetch(url);
            data = await response.json();
            //console.log(data); 
        }

        //if unsucessful, error text is added to empty object
        catch(err) {
            data = {
                title: "There was an error in getting data from the server",
            }
        }     

        
        this.setState({ title: data.title});
        //console.log(data.body)

        //function for getting text items
        //traverses the object an returns relevant text data
        let textElements = []
        function iterateTextObject(obj){
            for( let prop in obj){
                if(typeof(obj[prop]) === "object"){
                    iterateTextObject(obj[prop]);
                } else {
                    if(prop === "text"){
                        //console.log(obj[prop])
                        textElements.push(obj[prop])
                        //return obj[prop]
                    }
                }
            }
        }
        

        //function for getting image items
        //traverses the object an returns relevant image data
        let imgElements = []
        function iterateImgObject(obj){
            for( let prop in obj){
                if(typeof(obj[prop]) === "object"){
                    iterateImgObject(obj[prop]);
                } else {
                    if(prop === "url"){
                        //console.log(obj[prop])
                        imgElements.push(obj[prop])
                        //return obj[prop]
                    }
                }
            }
        }


        //function for getting list items
        //traverses the object an returns relevant list data
        let listElements = []
        function iterateListObject(obj){
            for( let prop in obj){
                //console.log(obj[prop])
                if(typeof(obj[prop]) === "object"){
                    //console.log(prop)
                    iterateListObject(obj[prop]);
                } 
                if(prop === "items"){
                    //console.log("hello there")
                    //console.log(obj[prop])
                    for(let elem of obj[prop]){
                        listElements.push(elem)
                    }
                }  
            }
        }

        

        //calls these functions on the article data object
        //sifts for relevant data
        iterateTextObject(data)
        iterateImgObject(data)
        iterateListObject(data)

        //changes the state to corespond to the relevant article data
        this.setState({ textContent: textElements})
        this.setState({ imgContent: imgElements})
        this.setState({ listContent: listElements})

        //once data is obtained and set, loading state is set to false
        this.setState({ loading: false})
        }


        render(){

            //takes the paragraph data in the state and adds p tags to them
            const htmlTextElem = []
            for (const item of this.state.textContent){
                htmlTextElem.push(<p>{item}</p>)
            }

            //takes the url data in the state and adds img tags to them
            //also gives them an alt text attribute
            const htmlImgElem = []
            for (const item of this.state.imgContent){
                htmlImgElem.push(
                <div>
                <figure>
                <img src={item} alt={this.state.alternateText}/>
                </figure>
                <br></br>
                </div>
                )
            }

            //takes the list data in the state and adds li tags to them
            const htmlListElem = []
            for (const item of this.state.listContent){
                htmlImgElem.push(<li>{item}</li>)
            }

            //uncomment to enable loading screen
            //if (this.state.loading){
            //    return <main><h1>LOADING...</h1></main>
            //}

            //returns the data in a formatted article
            return(
                <article>
                <h1>{this.state.title}</h1><hr></hr>
                {htmlTextElem}<hr></hr>
                {htmlImgElem}<hr></hr>
                {htmlListElem}
                </article>
            )
            
            
        }




    }