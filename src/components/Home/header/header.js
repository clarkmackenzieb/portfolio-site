import React,{Component} from 'react';
import './header.css'

export default class Header extends Component{
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return(
                <div className="main-container">
                    <div>
                        <div className="header-main-text">Mackenzie Clark</div>
                        <div className="header-info-text">Web Developer At Large</div>
                    </div>
                </div>
        )
    }
}