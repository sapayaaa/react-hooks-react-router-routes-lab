import React from "react";
import { actors } from "../data";

function Actors() {
  let idCounter = 0;
  const actorList = actors.map((actor) =>{
    const moviey = (actor.movies).map((mov) => <li key={++idCounter}>{mov}</li>)

    return(
      <div key={++idCounter}>
        <h1>{actor.name}</h1>
        <ul>{moviey}</ul>
      </div>
    )
  })
  return <div>
    <h1>Actors Page</h1>
    <ul>{actorList}</ul>
  </div>;
}

export default Actors;