import React, { useState } from "react";

function Card(id, name, info, image, price,removeTour) {
    const description = `${info.substring(0,200)}....`;
    const [readmore,setReadmore] = useState(false);
    const readMoreHandler=()=>{
        // if(readmore==false){

        //     setReadmore(true);
        // }
        // else{
        //     setReadmore(false);
        // }
        setReadmore(!setReadmore);
    }
   

  return (
    <>
      <div className="card">
        <div className="tour-info">

        <img src={image} alt="" className="image" />
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
            {description}
            <span className="read-more" onClick={readMoreHandler}>
                {readmore?'showless':'readmore'}
            </span>
        </div>
        </div>
      <button className="btn-red" onClick={()=>{removeTour(id)}}>Not intrested</button>
      </div>
    </>
  );
}
export default Card;