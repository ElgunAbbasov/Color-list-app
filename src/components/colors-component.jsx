import { Component } from "react";
import '../css/color.styles.css'

class Colors extends Component{
        render(){
            const {name,hex}=this.props.color;
            return(
                <div className="color-list-item-container" key={hex}>
                <p className="color-item-backcolor" style={{backgroundColor:`${hex}`}}></p>
                  <div className="text-div">
                    <h2 className="name-title">{name}</h2>
                    <p className="hex-title">{hex}</p> 
                  </div>     
              </div>
            )
    } 
}

export default Colors;