import { Component } from "react";
import slot1 from "../assets/first.jpg"
import slot2 from "../assets/second.jpg"
import slot3 from "../assets/third.jpg"
import slot4 from "../assets/fourth.jpeg"
import "./feature.css";

class Featuredata extends Component{
    render(){
        return (
            <div className={this.props.className}>
            <div className="feat-text">
                <h2>{this.props.heading}</h2>
                <p>
                {this.props.text}
                </p>
            </div>
            <div className="image">
                <img src={this.props.img1} alt="img"></img>
                <img src={this.props.img2} alt="img"></img>
            </div>
        </div>
        )
    }
}
export default Featuredata;