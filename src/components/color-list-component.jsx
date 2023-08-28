import { Component } from "react";
import Colors from './colors-component'


class ColorList extends Component{

    render(){
        const {colors}=this.props;
        return(
            <div className="color-list-component">
            {colors.map(color=>{
            return(
                <Colors color={color} />  
            )})}
        </div>
        )
        
    }
}


export default ColorList;