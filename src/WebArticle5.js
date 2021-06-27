import React,{Component} from 'react'
export class WebArticle5 extends Component {
    
    state = {
        index: 4,
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
        alternateText: "A random pricture from the internet"
    }
    

    async componentDidMount(){
        
        const url = this.state.articles[this.state.index];
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        
        this.setState({ title: data.title});
        //console.log(data.body)

        
        let textElements = []
        //function for getting text items
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
        

        let imgElements = []
        //function for getting image items
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


        let listElements = []
        //function for getting list items
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

        


        iterateTextObject(data)
        iterateImgObject(data)
        iterateListObject(data)

        //console.log(listElements)
        //console.log(listElements)


        this.setState({ textContent: textElements})
        this.setState({ imgContent: imgElements})
        this.setState({ listContent: listElements})
        //console.log("loggin array")
        //console.log(articleElements)

        }


        render(){
            const htmlTextElem = []
            for (const item of this.state.textContent){
                htmlTextElem.push(<p>{item}</p>)
            }

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

            const htmlListElem = []
            for (const item of this.state.listContent){
                htmlImgElem.push(<li>{item}</li>)
            }

            return(
                    <main>
                    <h1>{this.state.title}</h1><hr></hr>
                    <article>
                    {htmlTextElem}<hr></hr>
                    {htmlImgElem}<hr></hr>
                    {htmlListElem}
                    </article>
                    </main>
            )
            
            
        }




    }