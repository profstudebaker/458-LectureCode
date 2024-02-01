import styled from "styled-components";

// every react component automatically receives a "children" prop
export default function Aside({ children }) {
  return (
    <AsideWrapper>
      <Note>Take Note</Note>
      {/* We can render all of the nested JSX by rendering the children like so */}
      {children}
    </AsideWrapper>
  );
}

const AsideWrapper = styled.aside`
  width: 100%;
  padding: 20px;
  background-color: rgb(187 247 208);
  color: rgb(20 83 45);
  border-left: 10px solid rgb(20 83 45);

  /* This is a way to reference all the direct children of the styled component 
      and should only be used sparingly
  */
  & > * {
    margin: 0;
  }
`;

const Note = styled.p`
  text-transform: uppercase;
  font-size: 0.7rem;
  margin: 0;
`;
