import { Border, Container } from "../../styled";

function Escena({ textLine, id, position }) {
  return (
    <div>
      <Border active={position === id ? true : false}>{textLine}</Border>
    </div>
  );
}
export default Escena;

export function ShowImage({ position, id, image }) {
  return (
    <Container active={position === id ? true : false}> {image} </Container>
  );
}
