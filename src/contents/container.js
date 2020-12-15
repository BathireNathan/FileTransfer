import React, { Component } from "react";
import "./container.css"
import FilesList from "./filesList"

class Container extends Component{
    render(){
        return (<div className="container">
            <div className="top-menu"></div>
            <div className="content">
                <FilesList/>
            </div>
        </div>);
    }
}

export default Container;