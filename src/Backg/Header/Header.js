import './Header.css';
import React from 'react';
import NavbarUnit from './NavbarUnit/NavbarUnit';
import { Component } from 'react/cjs/react.production.min';
import onSizeChange from '../../listener';

class Header extends Component{

    constructor(){
        super()
        this.state={
            style1:"flex2",
            style2:"nav2",
            opacity:1,
            toggle:"flex2",
            toggler:"toggler",
            displaynone:"none",
            display:null,
            truth:false,
            outit:null
        }
        window.addEventListener("scroll", ()=> {
            this.fader()
            if (window.pageYOffset>=40){
                this.changenav()
            }
            else{
                this.prevnav()
            }
        })

        onSizeChange('width', ()=>{
            console.log("Width has changed!")
            console.log(window.innerWidth)
            if(window.innerWidth<=680){
                this.setState({toggle:"toggle",display:"none",displaynone:null,outit:this.outit})
            }
            else{
                this.setState({toggle:"flex2",display:null,displaynone:"none",outit:null})
            }
        })
        
        onSizeChange('height', ()=>{
            console.log("Height has changed!")

        })

    } 
    drop=()=>{
        this.setState({display:null})
    }
    onit=()=>{
        this.setState({truth:true})
    }
    outit=()=>{
        this.setState({truth:false})
        this.setState({display:"none"})
    }

    undrop=()=>{
        if (!this.state.truth){
            this.setState({display:"none"})
        }
    }


    fader=()=>{
        var n = window.pageYOffset
        let result = 1-(n/40)
        this.setState({opacity:result})
    }

    changenav=()=>{
        this.setState({style1:"flex2 flexalt", toggler:"togglerAlt", style2:"stuck"})
    }
    prevnav=()=>{
        this.setState({style1:"flex2", toggler:"toggler", style2:"nav2"})
    }

    render(){
        return(
            <header className="head-Cont">
                <img className="image" src="LOGO.svg" style={{opacity: this.state.opacity}}/>
            
                <nav className="nav1">
                    <ul className="flex1">
                        <h2 className="new" >
                            wanna be of <span><a href="" className="help">help?</a></span>
                        </h2>
                    </ul>
                </nav>
        
                <nav id="nav2" className={this.state.style2}>
            
                    <ul id="flex" className={this.state.style1} style={{minHeight:"40px"}} >
                        <div onMouseOver={this.drop} onMouseLeave={this.undrop} className="togg">
                            <div className={this.state.toggler} style={{display:this.state.displaynone}}></div>

                            <div className={this.state.toggle} onMouseOver={this.onit} onMouseLeave={this.state.outit} style={{display:this.state.display}}>

                                <NavbarUnit
                                links={["Websites","Moble Apps","NXThub Projects","Contact Us"]}
                                spanB={["language","apps","more_horiz","feedback"]}
                                />

                            </div>
                        </div>
                    </ul>
                    
                </nav>
            </header>
          )
    }

  }
export default Header;
//  ,"Games"
// ,"sports_esports"

