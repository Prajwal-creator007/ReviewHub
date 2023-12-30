import axios from "axios";
import React from "react";
// import { FaStar } from "react-icons/fa";
// import { useState } from "react";

// const colors = {
//     orange: "#FFBA5A",
//     grey: "#a9a9a9"
    
// };
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
      minHeight: 5,
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  
  };



  

export default class CommentInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            r_id: props.r_id,
            text: "",
        }
    }


    handleChange=(event)=>{
        this.setState(prevState=>({
            ...prevState,
            text: event.target.value
        }))
    }

    handleSubmit=async()=>{
        await axios.post("http://localhost:8000/comments", {
            r_id: this.state.r_id,
            type: this.state.type,
            text: this.state.text
        })
        window.location.reload();
    }

    render(){
        return(
            <div>
                <textarea
                    placeholder="Type comment here..."
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