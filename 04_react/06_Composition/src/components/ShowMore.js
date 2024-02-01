import styled from "styled-components";
import { useState } from "react";

/* 
  Every React component gets an implicit prop named children
  that represents any content/elements nexted between the
  component's opening and closing tags
*/
export default function ShowMore({ children }) {
  const [showMore, setShowMore] = useState(false);

  const icon = !showMore ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );

  return (
    <Wrapper>
      <Button onClick={() => setShowMore(!showMore)}>
        {icon} Show {showMore ? "Less" : "More"}{" "}
      </Button>
      {showMore && children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: inherit;
  color: inherit;
  display: flex;
  gap: 5px;
  font-weight: 600;

  svg {
    height: 1rem;
    stroke-width: 4px;
  }
`;
