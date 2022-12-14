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