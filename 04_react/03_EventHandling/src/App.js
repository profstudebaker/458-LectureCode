import "./styles.css";
import styled from "styled-components";
import Circle from "./components/Circle";

export default function App() {
  return (
    <Wrapper>
      <Circle defaultRadius={40} />
      <Circle defaultRadius={80} />
      <Circle defaultRadius={40} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
