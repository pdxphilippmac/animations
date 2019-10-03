import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  z-index: 10;
  flex-shrink: 0;
  font-size: 28px;
  align-items: center;
  background-color: ${props => props.theme.main};
  text-transform: uppercase;

  text-shadow: 5px 5px 5px purple;
  height: 80px;
  justify-content: center;
  padding: 20px;
`;

function Header() {
  return (
    <StyledHeader>
      <div class="wrapper">
        <div class="neon-wrapper">
          <span class="txt">Gaming Api</span>
          <span class="gradient"></span>
          <span class="dodge"></span>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
