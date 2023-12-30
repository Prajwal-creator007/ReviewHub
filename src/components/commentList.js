import axios from "axios";
import React from "react";
import './ReviewHub.css'

export default class CommentList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comments: [],
            r_id: props.r_id
        }
    }
    loadComments=async()=>{
        const response= await axios.get("http://localhost:8000/comments", {
            params: {
                r_id: this.state.r_id,
                type: this.state.type
            }
        })
        this.setState(prevState=>({
            ...prevState,
            comments: response.data.comments
        }))
    }

    

    componentDidMount(){
        this.loadComments();
    }

    render(){
        return(
            <div>

                {this.state.comments.map((comment) => {
                    if (comment.r_id === this.state.r_id) {
                        return (
                          <div >
                            <p>- {comment.text}</p>
                            <h4>{comment.timestamp}</h4> {/* Display timestamp here */}
                            <br />
                          </div>
                        );
                      }
                      return null;
                    })}
            </div>
        )
    }
}