import "./styles.css";
import styled from "styled-components";
import LoginForm from "./components/LoginForm";
import { useState } from "react";

export default function App() {
  /* TODO: move state up to store app-wide users */
  const [users, setUsers] = useState(["murphystude", "princezuko"]);
  /* TODO: write add user function */
  function addUser(username) {
    const newUsers = [...users, username];
    setUsers(newUsers);
  }

  /* TODO: pass addUser function down, so component
  can update the state of the parent */
  return (
    <Wrapper>
      <p>Registered: {users}</p>
      <LoginForm addUser={addUser} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  background-color: var(--gray-300);
  display: grid;
  place-items: center;
  color: white;
`;
