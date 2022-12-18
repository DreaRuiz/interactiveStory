# EXERCISE 1

### ESCENA
```jsx
import { sentences as data } from "../../data/sentences"; // Importo 
import { useState, useEffect } from "react";

export function Escena() { // Creo la funció escena i li dic que em retorni una frase
  return (
    <div>El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial</div>
  )
}
```


### APP
```jsx
import React from 'react'
import {Escena} from './components/escena/Escena' // Importo el componenet `escena`.

// La funció App retorna el componenet `escena`(que conté la frase).
function App() {
  return (
    <>
     <Escena/>
    </>
  )
}
export default App
```


# EXERCISE 2

### ESCENA
La funció `escena` reb el `textLine` i retorna el que ha de mostrar (el `textLine` en un `p`)
```jsx
export function Escena({ textLine }) {
  return <p>{textLine}</p>; 
}
```

### APP
```jsx
import React from "react";
import { Escena } from "./components/escena/Escena";
import { sentences as data } from "./data/sentences";

function App() {

  return (
    <div>
      {data.map((sentences) => (   //  Un cop per cada element de l'array: 
        <Escena key={sentences.id} textLine={sentences.text}/> // Porta'm un TEXTLINE construit a ESCENA que tindrà el text dels obj. de l'array sentences.
      ))}
    </div>
  );
}
export default App;
```


# EXERCISE 3

### ESCENA
```jsx
import { Border } from "../../styled" // Importo el component `Border`.

export function Escena({ textLine }) {
  return (
    <div>
      <Border>{textLine}</Border> // Afegeixo el component que he creat a `styled` (que contindrà el `textLine`)
    </div>
  );
}
```

### STYLED
```js
import styled from 'styled-components' // Importo de styled-components (programa per fer components d'estil)

// Creo una caixa (li dic com ha de ser d'acord a les normes del styled-components) i la guardo dins de `Border` (component que després exporto a `escena`). 
export const Border = styled.p` 
  height: 50px;
  border: 2px solid black;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255,255,255, .7) ;
`;
```

# EXERCISE 4

### APP

```jsx
import React from "react";
import { useState } from "react"; // Importo useState.
import Escena from "./components/escena/Escena";
import { sentences as data, sentences } from "./data/sentences"; // Importo les sentences a soles també.
import { Button } from "./styled"; // Importo Button que està a styled.


function App() {
  const [position, setPosition] = useState(1); // Faig un useState de POSITION posant el núm/posició 1. Que és la primera frase.

  function ActiveNext() { // Declaro la funció/component ActiveNext
    if (position < sentences.length) { // Si el número de position és menor al número de frases total.
      setPosition(position + 1); // Faig +1 a la position (i així el situo a la frase següent).
    
    if (position >= sentences.length) { // Si el número de position és > o = al número de frases total, vol dir que està a la última frase.
      setPosition(1); // Per tant situo la posiicó un altre cop a la primera frase.
    }
  }

  function ActiveBack() { 
    if (position <= sentences.length) {
      setPosition(position - 1);
    }

    if (position === 1) { // Si el número de posició és igual al 1 (està a la primera frase), per tirar enrrere.
      setPosition(4); // Faig que vagi a la última frase.
    }
  }

  return (
    <>
      <div>
        <Button onClick={() => ActiveBack()}>Anterior</Button> // Quan es clica el botó crida a la funció ActiveBack.
        <Button onClick={() => ActiveNext()}>Següent</Button> // Quan es clica el botó crida a la funció ActiveNext.
      </div>

      <div>
        {data.map((sentences) => (
          <Escena
            key={sentences.id}
            id={sentences.id} // Creo el prop ID que correspon a la id de l'objecte situat a l'array per passar-li a Escena. (Perquè no em deixa passar-li a app la ID de key (normes de React))
            textLine={sentences.text}
            position={position} // Creo el prop POSITION amb la info de la posició per passar-li a Escena.
          />
        ))}
      </div>
    </>
  );
}
}

export default App;
```

### ESCENA
```jsx
import { Border } from "../../styled";

function Escena({ textLine, id, position }) { // Afefeixo el prop: id i position (que està definit a APP)
  return (
    <div>
      <Border active={position === id ? true : false}> // Li dic que si el comptador és igual a la id (per tant està en la frase que toca) canvii l'estat a true i si no a false. (Que a través de styled pintarà la frase d'un color o d'un altre)
      {textLine}</Border>
    </div>
  );
}

export default Escena;
```

### STYLED
  ` background-color: ${ ({active}) => active ? 'pink' : 'white' } `
  Amb això indico que si el component BORDER està ACTIVE (const decalrada a Escena), pinti el component de rosa i si no està activa el pinti de blanc.

```jsx
import styled from 'styled-components'

export const Border = styled.p`
  height: 50px;
  border: 2px solid #8EC3B0;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-family: Arial;
  background-color: ${ ({active}) => active ? 'pink' : 'white' } 
`;

export const Button = styled.p`
    height: 20px;
    width: 40%;
    border-radius: 15px;
    background-color: #DEF5E5;
    color: #8EC3B0;
    margin: 5px;
    padding: 15px 32px;
    display: flex;
    text-align: center;
    text-decoration: none;
    justify-content: center;
    display: inline-block;
    font-size: 16px;
    font-family: Arial;
`;
```
# EXERCISE 5

### APP
```jsx
import React from "react";
import { useState } from "react";
import Escena from "./components/escena/Escena";
import { sentences as data, sentences } from "./data/sentences";
import { Button } from "./styled";
import { Welcome } from './components/Welcome' // Importo el component Welcome

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

  let [initialPage, setPage] = useState(true); // Faig un useState en TRUE per quan s'inicii la pàgina amb Welcome.

  const nextPage = () => { // Creo la funció de SEGÜENT pàgina que fa que l'estat sigui FALSE i per tant no surti la pàgina de Welcome.
    setPage(false);
  };


  return initialPage === true ? ( // Li dic que retorno segons un condicional. Si initialPage és true, ha de mostrar la Welcome
      <Welcome next={nextPage} />
  ) : ( // Si el condicional és fals, ha de mostrar la pàgina de la història.
    <>
      <div>
        <Button onClick={() => ActiveBack()}>Anterior</Button>
        <Button onClick={() => ActiveNext()}>Següent</Button>
      </div>

      <div>
        {data.map((sentences) => (
          <Escena
            key={sentences.id}
            id={sentences.id}
            textLine={sentences.text}
            position={position}
          />
        ))}
      </div>
    </>
  );
}

export default App;
```

### WELCOME
```jsx
import { WelcomeTitle, WelcomeP, WelcomeButton } from "../styled";

export const Welcome = ({ next }) => { // Creo el componenet i li passo per prop NEXT (que serà el que necessito per sortir d'aquesta pàgina).
  
  return (
    <div>
      <WelcomeTitle>La historia de d'un heroi</WelcomeTitle> // Afegeixo l'estil WelcomeTitle
      <WelcomeP> // Afegeixo l'estil WelcomeP
        Visita aquesta història interactiva on pots navegar per les escenes clicant els
        botons Següent i Anterior.
      </WelcomeP>
      <WelcomeButton onClick={next}>Començar</WelcomeButton> // Afegeixo l'estil WelcomeButton
    </div>
  );
};
```

### STYLED
```js
 export const WelcomeTitle = styled.h1`
  magin: 50px;
  color: #4fa095;
  margin-left: 25%;
  margin-right: 25%;
  padding: 15px 32px;
  display: flex;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  display: inline-block;
  font-size: 50px;
  font-family: Arial;
  justify: center;
`;
export const WelcomeP = styled.p`
  color: #8ec3b5;
  margin-left: 25%;
  margin-right: 25%;
  display: flex;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  display: inline-block;
  font-size: 20px;
  font-family: Arial;
  justify: center;
`;

export const WelcomeButton = styled.p`
  height: 20px;
  width: 40%;
  margin-left: 25%;
  margin-right: 25%;
  border-radius: 15px;
  background-color: #4fa095;
  color: #def5e5;
  padding: 15px 32px;
  display: flex;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  display: inline-block;
  font-size: 16px;
  font-family: Arial;
`;
```
