import React from "react";

function Food({ fav }) {
  console.log(fav);
  return <h1>I like {fav} </h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food fav="kimchi" />
      <Food fav="staek" />
      <Food fav="pasta" />
      <Food fav="sandwich" />
    </div>
  );
}

export default App;
