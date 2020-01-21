import React from 'react';
import './Post.css';

const post = (props) => {
return(
    <div className="post">
        <div className="card">
            <div className="img-sec">
            <a data-fancybox="" data-width="263" data-height="348" href={props.popup}> 
                <img src={props.popup} alt="Book_1" title="Book_1" />
                </a>
            </div>
            <div className="text-sec">
            <h2>{props.heading}</h2>
            <p>{props.para}</p>
            <a href="hello">Read More..</a>
            <div className="icon">
<img src={"assets/Images/Down_arrow.svg"} alt="Down_arrow"/>
            </div>
            </div>
        </div>
    </div>
)

}
export default post;