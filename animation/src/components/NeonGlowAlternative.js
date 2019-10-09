import React from "react";
import styled from "styled-components";
import { flicker } from "../utils/animations";

const StyledH1 = styled.h1`
  font-size: 80px;
  font-family: "Poppins", sans-serif;
  text-transform: bold, italic;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ea00d9, 0 0 30px #ff0080,
    0 0 40px #0abdc6, 0 0 55px #711c91, 0 0 75px #ff0080;
  text-align: center;
`;

const StyledSpan = styled.span`
  animation: ${flicker} 1s 1 both;
  animation-iteration-count: 200;
`;
const StyledSpan2 = styled.span`
  animation: ${flicker} 2s 1 both;
  animation-iteration-count: 200;
`;

export default function NeonGlowAlternative() {
  return (
    <StyledH1>
      <StyledSpan>P</StyledSpan>at<StyledSpan2>c</StyledSpan2>h N
      <StyledSpan2>o</StyledSpan2>t<StyledSpan>e</StyledSpan>s
    </StyledH1>
  );
}
