import './Backg.css';
import Header from './Header/Header';
import TopSection from './TopSection/TopSection';
import BodySection from './BodySection/BodySection';


const Backg = ()=>{
    return (
        <div className="backg" >
            <Header/>
            <TopSection/>
            <BodySection/>
        </div>
    )
  }
export default Backg;