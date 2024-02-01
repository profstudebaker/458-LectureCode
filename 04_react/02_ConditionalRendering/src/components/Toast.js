import styled from "styled-components";

/* 
  CONDITIONAL RENDERING
  (there are several ways to do it)

  if / else if / else statements + different returns
  or setting a component to a variable

  logical operator (statement && component)
  that renders if the condition before is true

  ternary operator ( statement ? componentIfTrue : componentIfFalse)
  allows you to provide render cases for true and false
  **** THIS IS THE PREFERED METHOD IN MOST CASES ****

  you can also use an object to pass in inline CSS variable styles
  (or just pass in as a prop to styled-components)
*/

/* TASKS 
   - create CSS variable dictionary for each case colors
   - render the appropriate icon for success or error
   - only display the message for error
   - change color based on error
   - change text of heading based on error or failure

   THEN modify the code to support an "running" case
   (blue, orange, yellow, gray, whatever)
   There should be a different icon, different foreground and background colors,
   and the title should say "Job Running!"
*/

const STYLES = {
  error: {
    "--background": "rgb(252 165 165)",
    "--foreground": "rgb(127 29 29)"
  },
  success: {
    "--background": "rgb(74 222 128)",
    "--foreground": "rgb(20 83 45)"
  },
  running: {
    "--background": "rgb(253 230 138)",
    "--foreground": "rgb(217 119 6)"
  }
};

export default function Toast({ type, message }) {
  let icon;
  if (type === "error") {
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    );
  } else if (type === "success") {
    icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  } else {
    icon = (
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    );
  }

  let title;
  if (type === "error") {
    title = "Job Failed";
  } else if (type === "success") {
    title = "Job Succeeded";
  } else {
    title = "Job Running";
  }

  return (
    <Wrapper style={STYLES[type]}>
      <div class="row">
        {icon}
        <div>
          <Heading>{title}</Heading>
          {type === "error" && <Message>{message}</Message>}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--background);
  color: var(--foreground);
  position: absolute;
  top: 10px;
  right: 10px;
  min-width: 300px;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  padding: 15px;
  border-bottom: 5px solid var(--foreground);
  .row {
    display: flex;
    gap: 20px;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

const Heading = styled.h2`
  margin: 0;
  font-size: 1.1rem;
`;

const Message = styled.p`
  margin: 0;
  text-align: left;
  padding-top: 10px;
  font-size: 0.8rem;
`;
