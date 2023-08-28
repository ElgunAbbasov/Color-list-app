import { Component } from "react";
import ColorList from "./components/color-list-component";
import './App.css'


class App extends Component{
  constructor(){
    super();

    this.state={
      colors:[],
    };
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/jjdelc/1868136/raw/c9160b1e60bd8c10c03dbd1a61b704a8e977c46b/crayola.json')
    .then((Response)=>Response.json())
    .then((colors)=>this.setState(()=>{
      return{colors:colors}
    },))
  }
  render(){
    const allColors=this.state.colors
    return (
      <div className="App">
      <h1 className="title">Colorite</h1>
        <ColorList colors={allColors} />
      </div>
      )
  }
}

export default App;