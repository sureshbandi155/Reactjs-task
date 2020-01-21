import React from 'react';
import Header from '../../components/Header/Header';
import './Videos.css';


const videos = () => {
    return(
       <div>
           <Header />
           <div className="videos">
           <div className="wrapper">
            <p>Hay am from videos Component</p>
        </div>
           </div>
       </div>
    )
}
export default videos;