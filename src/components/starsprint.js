import axios from "axios";
import React from "react";
// import CommentInput from "./commentInput";
// import CommentList from "./commentList";
import './ReviewHub.css'

export default class Avgstars extends React.Component{
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
    // StarRating = ({ rating }) => {
    //     const stars = [];
      
    //     for (let i = 1; i <= 5; i++) {
    //       const isFilled = i <= rating;
    //       const starColor = isFilled ? '#ffd700' : '#ccc';
    //       stars.push(
    //         <span key={i} style={{ color: starColor }}>★</span>
    //       );
    //     }
      
    //     return <div>{stars}</div>;
    //   };

    componentDidMount(){
        this.loadReviews();
    }

    render(){
        return(
            <div>
                {this.state.reviews.map((review) => {
                    return(
                        <div>
                            <h6>Rating: {review.rating}/5</h6> 
                        </div>
                    )
                })}
            </div>
        )
    }
}