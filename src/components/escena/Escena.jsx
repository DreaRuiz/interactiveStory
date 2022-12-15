import { Border } from "../../styled";

function Escena({ textLine, id, position }) {
  return (
    <div>
      <Border active={position === id ? true : false}>{textLine}</Border>
    </div>
  );
}

export default Escena;
