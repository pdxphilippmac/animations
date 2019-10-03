import React from "react";
import styled from "styled-components";

const StyledHeaderTwo = styled.header`
  z-index: 10;
  flex-shrink: 0;
  font-size: 28px;
  align-items: center;
  background-color: ${props => props.theme.main};
  text-transform: uppercase;
  color: palevioletred;
  text-shadow: 5px 5px 5px purple;
  height: 80px;
  justify-content: center;
  padding: 20px;
  margin: 20px;
`;

function HeaderTwo() {
  return (
    <StyledHeaderTwo>
      <div class="wrapper">
        <div class="neon-wrapper2">
          <span class="neon-txt2">Gaming Api </span>
        </div>
      </div>
    </StyledHeaderTwo>
  );
}

export default HeaderTwo;
