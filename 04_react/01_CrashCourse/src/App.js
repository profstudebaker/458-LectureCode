import "./styles.css";
import styled from "styled-components";
// when we use components defined in other files,
// we have to import them first with a relative path
import Link from "./components/Link";

export default function App() {
  return (
    <LinkList>
      {/* 
      Here we render our Link component 
      and pass in the desired values 
      as properties (or "props") 

      We could render the same component with 
      as many different variations as we want 
      (and we will get into dynamically rendering
        lists of data later on)
      */}
      <Link
        title="Zen and the Art of Building Web Apps"
        submitter="murphyonline"
      />
      <Link
        title="10 hour edit of otters holding hands"
        submitter="murphyonline"
      />
    </LinkList>
  );
}

/* This is a styled component,
   using the library styled-components,
   a widely used "CSS-in-JS" library that
   allows you to modularize your styled
   the same way you modularize your markup
   into small, isolated components.

   It uses a JS template string (similar to python f strings)
   so you can pass in variables to your CSS
*/
const LinkList = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
