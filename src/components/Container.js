import * as React from "react";
import Image from "./Image.js"

export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageUrl : "url"
        }
    }

    componentDidMount(){
        let data = require('./data.json');
        let imageUrl = data.imageName;
        let self = this;
        import('../images/' + imageUrl).then(function (image) {
            self.setState({imageUrl: image})
        })
    }
    render(){
        return(
            <div>
                <Image url={this.state.imageUrl}/>
            </div>
        )
    }
}