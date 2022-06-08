import './App.css';
import Backg from './Backg/Backg';
import OuterSect from './OuterSect/OuterSect';
import Foot from './Foot/Foot';
import { Component } from "react";


class App extends Component{

  render(){
    return (
      <>
        <Backg/>
        <OuterSect/>
        <Foot/>
      </>
    );
  }

}
export default App;