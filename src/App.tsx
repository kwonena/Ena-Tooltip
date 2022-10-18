import React from "react";
import Tooltip from "./Tooltip/Tooltip";
import styled from "styled-components";

function App() {
  return (
    <>
      <AppContainer>
        <Tooltip
          message={"This is message content"}
          target={""}
          position={"right"}
          trigger={"click"}
        >
          <Btn>Button</Btn>
        </Tooltip>
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Btn = styled.header`
  width: 200px;
  height: 30px;
  cursor: pointer;
`;
