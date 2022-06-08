import FootUnit from './FootUnit/FootUnit';
import './foot.css'

const Foot = ()=>{
    return(
      <div className="foot">
        
        <div className="centered2">
              <div className="col1">
                  <div >
                      <h2 className="smallHead">NXThub</h2>
                      <p className="footext">We hope you find us interesting and worth your time, we are looking forward to working with you soon</p>
                  </div>
              </div>
              <div className="col2">
                <FootUnit 
                smallHead={"Contact Us"} 
                links={["+2348105966585", "+2347012106857"]}/>
                <FootUnit 
                smallHead={"NXThub Projects"} 
                links={["Websites", "Mobile Apps", "Games", "Others"]}/>
                <FootUnit 
                smallHead={"Social media"} 
                links={["Instagram", "Facebook", "Whatsapp", "Github"]}/>
                
              </div>
        </div>
  
        <div className="footline">
            <hr/>
            <p>
                Copyright &#169; 2019-2022. NXThub code
            </p>
        </div>
        
      </div>
    )
  }
  export default Foot;