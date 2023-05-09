import { WelcomeTitle, WelcomeP, WelcomeButton, Background } from "../styled";

export const Welcome = ({ next }) => {
  return (
    <div>
      <WelcomeTitle>La historia d'un heroi</WelcomeTitle>
      <WelcomeP>
        Visita aquesta història interactiva on pots navegar per les escenes
        clicant els botons Següent i Anterior.
      </WelcomeP>
      <WelcomeButton onClick={next}>Començar</WelcomeButton>
    </div>
  );
};
