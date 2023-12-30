import axios from "axios";
import React from "react";
import { FaStar } from "react-icons/fa";
// import { useState } from "react";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  
  };

export default class ReviewInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            stars: Array(5).fill(0),
            hoverValue: undefined,
            rating: 0,
            text: "",
            type: props.type
        }
    }
     handleClick= (value)=> {
    //setCurrentValue(value)
    this.setState(prevState=>({
        ...prevState,
        rating: value
    }))
    }

     handleMouseOver=(value)=> {
        this.setState(prevState=>({
            ...prevState,
            hoverValue: value
        }))
    }

     handleMouseLeave=()=>{
        this.setState(prevState=>({
            ...prevState,
            hoverValue: undefined
        }))
    }

    handleChange=(event)=>{
        this.setState(prevState=>({
            ...prevState,
            text: event.target.value
        }))
    }

    handleSubmit=async()=>{
        await axios.post("http://localhost:8000/reviews", {
            type: this.state.type,
            rating: this.state.rating,
            text: this.state.text
        })
        this.setState(prevState=>({
            ...prevState,
            hoverValue: undefined,
            rating: 0,
            text: "",
        }))
        window.location.reload();
    }

    render(){
//         const [currentValue, setCurrentValue] = useState(0);
//   const [hoverValue, setHoverValue] = useState(undefined);
//   //const stars = Array(5).fill(0)

//   const handleClick = value => {
//     setCurrentValue(value)
//   }

//   const handleMouseOver = newHoverValue => {
//     setHoverValue(newHoverValue)
//   };

//   const handleMouseLeave = () => {
//     setHoverValue(undefined)
//   }
 return(
            <div>
                <h2> Ratings </h2><br/>
                <div style={styles.stars}>
                    {this.state.stars.map((_, index) => {
                    return (
                        <FaStar
                        key={index}
                        size={24}
                        onClick={() => this.handleClick(index + 1)}
                        onMouseOver={() => this.handleMouseOver(index + 1)}
                        onMouseLeave={this.handleMouseLeave}
                        color={(this.state.hoverValue || this.state.rating) > index ? colors.orange : colors.grey}
                        style={{
                            marginRight: 10,
                            cursor: "pointer"
                        }}
                        />
                    )
                    })}
                </div>
                <textarea
                    placeholder="Type here..."
                    style={styles.textarea}
                    value={this.state.text}
                    onChange={this.handleChange}
                /><br/>

                <button
                    style={styles.button}
                    onClick={this.handleSubmit}
                >
                    Submit
                </button>
            </div>
        )
    }
}