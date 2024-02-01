import styled from "styled-components";
import { useState } from "react";

export default function Link({ title, submitter }) {
  /* 
    This is our reusable component.
    You can write whatever javascript logic you want
    up here. The return statement is JSX, similar to HTML
  */
  /* 
    Components can hold an internal state. 
    (again, more on this later)
    You can specify as many state objects as you want.
    These objects are CONSTANTS and not directly modifiable.
    You have to use the "set____" method to update the value,
    and this method tells React to re-render the component
  
    Note: state is not persisted after page refresh
    (we will learn how to preserve data in a few weeks)
    */
  const [upvotes, setUpvotes] = useState(0);

  return (
    <Wrapper>
      {/* We use the braces to tell React 
      we want to inject JS into the markup.
      This allows us to access the variables that were
      passed in as properties
      */}
      <UpvoteContainer onClick={() => setUpvotes(upvotes + 1)}>
        {/* This is an event handler 
              (we will learn more about these later)
              but they run a function when a specific event occurs
              In this case, we are saying
              "Every time this SVG element is clicked by a user,
              add 1 to the current value of upvotes"
          */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
        <Upvotes>{upvotes}</Upvotes>
      </UpvoteContainer>
      <div>
        <Title>{title}</Title>
        <Submitter>Submitted by {submitter}</Submitter>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --shadow-color: 0deg 0% 50%;
  --shadow-elevation-low: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.27),
    0.5px 0.9px 1.3px -0.8px hsl(var(--shadow-color) / 0.37),
    1.1px 2.2px 3.1px -1.6px hsl(var(--shadow-color) / 0.47);
  box-shadow: var(--shadow-elevation-low);
  border: 1px solid #fefefe;
  background-color: #fffffe;
  border-radius: 5px;
  color: #232323;
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const UpvoteContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: inherit;

  /* 
  You can nest your CSS in styled-component strings 
  These styles will only apply to svg elements inside
  a Wrapper of a Link component
  */
  svg {
    width: 24px;
    height: 24px;
    stroke-width: 4px;
    color: #94a1b2;
    transition: color 300ms;

    /* use the & symbol to refer to the current element */
    &:hover {
      color: #222525;
      transition: color 300ms;
    }
  }
`;

const Upvotes = styled.p`
  color: #94a1b2;
  margin: 0;
  transform: translateX(-1px);
`;

const Title = styled.h2`
  margin: 0;
`;

const Submitter = styled.h3`
  margin: 0;
  color: #078080;
  font-size: 0.8rem;
`;
