import React, { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {
  // const description = `${info.substring(0,200)}....`;

  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info + `...` : `${info.substring(0, 200)}....`;
  const readMoreHandler = () => {
    if (readmore == false) {
      setReadmore(true);
    } else {
      setReadmore(false);
    }
    // setReadmore(!setReadmore);
  };

  return (
    <>
      <div className="w-[22rem]  shadow-md">
        <div className="p-[1.5rem]">

        <div className="tour-info">
          <img src={image} alt="" className="h-[18rem] w-[22rem]" />
          <div className="tour-details">
            <h4 className='text-green-500 font-bold'> ₹{price}</h4>
            <h4 className="tour-name text-black-500 font-extrabold text-2xl">{name}</h4>
          </div>

          <div className="description">
            {description}
            <span className='text-red-500' style={{cursor:'pointer'}} onClick={readMoreHandler}>
              {readmore ? "showless" : "readmore"}
            </span>
          </div>
        </div>
        <button
          className="mt-[1rem] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            removeTour(id);
          }}
          >
          Not intrested
        </button>
          </div>
      </div>
    </>
  );
}
export default Card;
