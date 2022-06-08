import './outersect.css';

const OuterSect = ()=>{
    return(
      <section className="outerSect">
        <div className="centered1">
            <div className="circ2 text1">
                <h1 className="sec">Meet the team</h1>
                <p className="text2"> <strong> Interested in joining NXThub? Or would you like us to be of service to you?</strong> Reach out to any one of our Creators and developers at <strong> NXThub</strong>. We are looking forward to working with you.</p>
                <a href=""className="holopill">
                    Reach Out
                    <span className="material-icons font">
                    trending_flat
                    </span>
                </a>
            </div>
            <img className="img" src="team.svg"/>
        </div>
      </section>
    )
  }
export default OuterSect;