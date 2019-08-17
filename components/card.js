import React from "react";

function Card(props) {
  return (
    <article className="bg-yellow-400 p-4 md:p-8 border-black my-4">
      {props.children}
    </article>
  );
}

export default Card;
