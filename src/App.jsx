import React from "react";
import { Escena } from "./components/escena/Escena";
import { sentences as data } from "./data/sentences";

function App() {
  return (
    <div>
      {data.map((sentences) => (
        <Escena key={sentences.id} textLine={sentences.text} />
      ))}
    </div>
  );
}

export default App;
