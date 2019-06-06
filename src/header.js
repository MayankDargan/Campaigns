import React from 'react';
import './header.css';
import Spotlight from './images/spotlight.png';
import string from './i18n';

class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "en"
          };
    }
    changeLanguage=(language)=>{
        this.setState({value:language});
        string._language=language;
    }
    render(){
        console.log(string);
        return(
            <div className="header">
                <header>
                    <img src={Spotlight}></img>
                    <span>{string.spotlight}</span>
                    <small>{string.by} {string.BlueStacks}</small>
                    <nav role="navigation">
                        <ul>
                            <li><a href="#">Language</a>
                            <ul className="dropdown">
                                <li><a onClick={()=>this.changeLanguage('en')}>en</a></li>
                                <li><a onClick={()=>this.changeLanguage('de')}>de</a></li>
                            </ul>
                            </li>
                        </ul>
                    </nav>
                </header>

            </div>
        )
    }

}

export default HeaderComponent;