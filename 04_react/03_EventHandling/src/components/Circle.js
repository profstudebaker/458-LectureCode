/* 

  You have to import the useState function when
  you want to write components with state

*/
import { useState } from "react";
import styled from "styled-components";

export default function Circle({ defaultRadius }) {
  /* 
    State 
    - used to give a component a piece of internal data
    - whenever we update state, it trigger a re-render 
    - const [STATE_VARIABLE_NAME, STATE_MUTATOR_FUNCTION] = useState(INITIAL_VALUE)
    - state is a constant, you can only update state using the muator function
    */
  // use whatever is passed in as a prop for defaultRadius
  // as the initial value for our state radius
  const [radius, setRadius] = useState(defaultRadius);

  return (
    <Wrapper style={{ "--radius": radius + "px" }}>
      <div class="circle"></div>
      <button onClick={() => setRadius(radius + 10)}>Grow</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .circle {
    background-color: deeppink;
    height: var(--radius);
    width: var(--radius);
    border-radius: 50%;
  }
`;
