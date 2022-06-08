import './TopSection.css';
import { Component } from 'react/cjs/react.production.min';

class TopSection extends Component{
  constructor(){
    super()
    this.state={position:170}
    window.addEventListener("scroll", ()=> {
      this.moveCenter()
    })
  }

  moveCenter=()=>{
    var pos=this.state.position
    var n = window.pageYOffset
    var d = document.body.offsetHeight-window.innerHeight
    let result = (n/d)*60
    if (window.innerWidth>680 && pos<190) {
      this.setState({position:170+result})
    }

}

  render(){
    return(
      <section className="head-sect">
        <div className="centered">
          <div className="circ text">
              <h1>What do we do?</h1>
              <p><strong>NXThub</strong> is a preliminary of what we someday hope to be a tech startup. <br/> We are involved in Web and App developement, Game developement, A.I research, and any other fun creative recreative activity out in the wild of computer technology </p>
              <a href="" class="holopill">
                NXThub
                <span class="material-icons font">
                  trending_flat
                </span>
              </a>
              <hr style={{
                margin: 1.5+'rem',
                marginInline:'auto',
                alignSelf: 'center',
                width: 80+'%',
                borderColor: "#43c7d061"}}/>
          </div>
          <img className="img" src="headimg.svg"/>
        </div>
      </section>
    )
  }

  }
export default TopSection;

// style={{marginInline: this.state.position + 'px'}}