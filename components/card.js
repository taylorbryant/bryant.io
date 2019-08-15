import React from "react";

function Card(props) {
  return (
    <article className="bg-yellow-400 p-4 md:p-8 border-black my-4">
      <h2 className="font-black text-2xl mb-2">{props.heading}</h2>
      <p className="text-lg">{props.body}</p>
    </article>
  );
}

export default Card;