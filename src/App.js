import React from "react";

function Food({ name }) {
  return <h1>I like {name} </h1>;
}

const foodILike = [
  { name: "steak" },
  { name: "chicken" },
  { name: "sandwich" },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} />
      ))}
    </div>
  );
}

export default App;
