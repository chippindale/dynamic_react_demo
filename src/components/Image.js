import * as React from "react";

export default class Image extends React.Component {
    render(){
        return(
            <div>
                <img src={this.props.url}/>
            </div>
        )
    }
}