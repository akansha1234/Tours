import React, { useState } from "react";
export default function Tour({ id, name, image, info, price, removeTour }) {
  const [Read, setRead] = useState(false);
  return (
    <div className="container">
      <h1>{name}</h1>
      <img src={image} alt="places" className="images" />
      <p>
        {Read ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setRead(!Read)} className="read">
          {Read ? "Show Less" : "Read More"}
        </button>
      </p>
      <p className="price">Rs {price}</p>
      <button className="btn" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}
