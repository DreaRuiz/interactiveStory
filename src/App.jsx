import React from "react";
import { useState } from "react";
import Escena from "./components/escena/Escena";
import { sentences as data, sentences } from "./data/sentences";
import { Button } from "./styled";
import { Welcome } from "./components/Welcome";
import { ShowImage } from "./components/escena/Escena";

function App() {
  const [position, setPosition] = useState(1);

  function ActiveNext() {
    if (position < sentences.length) {
      setPosition(position + 1);
    }
    if (position >= sentences.length) {
      setPosition(1);
    }
  }

  function ActiveBack() {
    if (position <= sentences.length) {
      setPosition(position - 1);
    }

    if (position === 1) {
      setPosition(4);
    }
  }

  let [initialPage, setPage] = useState(true);
  const nextPage = () => {
    setPage(false);
  };

  return initialPage === true ? (
    <Welcome next={nextPage} />
  ) : (
    <>
      <div>
        <Button onClick={() => ActiveBack()}>Anterior</Button>
        <Button onClick={() => ActiveNext()}>Següent</Button>
      </div>
      {data.map((sentences) => (
        <Escena
          key={sentences.id}
          id={sentences.id}
          image={sentences.img}
          textLine={sentences.text}
          position={position}
        />
      ))}

      <ShowImage />
    </>
  );
}

export default App;
