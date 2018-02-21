import React,{Component} from 'react';
import './contact.css'


export default class Contact extends Component{
    constructor(props){
        super(props)

        this.state = {}

    }


    render(){
        return(
            <div className="contact-main-container">
                <h1 className="contact-header">
                    Contact
                </h1>
                <p className="contact-text">clarkmackenzieb@gmail.com</p>
                <p className="contact-text">731-445-5008</p>
                <div>
                <a href="https://www.linkedin.com/in/clarkmackenzieb/"><img id="linkedin"src="http://beloservice.files.wordpress.com/2016/03/herrmans-linkedin-logo-500x500.png" alt=""/></a>
                <a href="https://github.com/clarkmackenzieb"><img id="github"src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png" alt="github"/></a>
                    <img/>
                </div>
            </div>
        )
    }
}

 
