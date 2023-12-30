import axios from "axios";
import React from "react";
import CommentInput from "./commentInput";
import CommentList from "./commentList";
import './ReviewHub.css'

export default class ReviewList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            reviews: [],
            type: props.type
        }
    }
    loadReviews=async()=>{
        const response= await axios.get("http://localhost:8000/reviews", {
            params: {
                type: this.state.type
            }
        })
        this.setState(prevState=>({
            ...prevState,
            reviews: response.data.reviews
        }))
    }       

    

    componentDidMount(){
        this.loadReviews();
    }

    render(){
        return(
            <div>

                {this.state.reviews.map((review) => {
                    return(
                        <div className="box">
                            <h2>Rating: {review.rating}/5</h2>
                            <h3 className="box">{review.text}</h3>
                            <h4>{review.timestamp}</h4> {/* Display timestamp here */}
                            <br/>
                            <div>
                            <h4>Comments:</h4>
                            <br/>
                            <CommentList r_id= {review._id} />
                            <CommentInput r_id= {review._id} /><br/>
                            
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}