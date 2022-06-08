import { Component } from 'react/cjs/react.production.min';
import './Bodysection.css';

class BodySection  extends Component{
  constructor(){
    super()
    this.state={position:150}
    window.addEventListener("scroll", ()=> {
      this.moveCenter()
    })
  }

  moveCenter=()=>{
    var n = window.pageYOffset
    var d = document.body.offsetHeight-window.innerHeight
    let result = (n/d)*100
    if (window.innerWidth>680) {
      this.setState({position:150+result})
    }

  }
  
  render(){
    return(
      <section className="mid-sect">
        <div className="centered" >
          <img className="img" src="projects.svg"/>
          <div  className="circ1 text">
              <h1>Check out some of our projects</h1>
              <p>Check out some of the projects we have worked on, I think you might find something interesting.</p>
              <a href=""className="holopill">
                  Check Us Out
                  <span className="material-icons font">
                  trending_flat
                  </span>
              </a>
          </div>
        </div>
      </section>
    )
  }

  }
  export default BodySection;