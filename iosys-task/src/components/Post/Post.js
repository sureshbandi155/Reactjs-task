import React from 'react';
import './Post.css';

const post = (props) => {
    return (
        <div className="post">
            <div className="card">
                <div className="img-sec">
                    <a data-fancybox="" href={props.popup}>
                        <img src={props.img} alt="Book_1" title="Book_1" />
                    </a>
                </div>
                <div className="text-sec">
                    <h2>{props.heading}</h2>
                    <p>{props.para}</p>
                    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Read More..</a>
                    <div className="icon">
                        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                            <img src={"assets/Images/Down_arrow.svg"} alt="Down_arrow" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default post;