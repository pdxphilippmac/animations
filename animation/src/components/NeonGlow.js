import React from "react";
import styled from "styled-components";
import { fadeIn } from "../utils/animations";

const StyledH1 = styled.h1`
  font-size: 80px;
  font-family: futura;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080,
    0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
  text-align: center;
  animation: ${fadeIn} 3s ease-out 1 both;
  animation-iteration-count: 20;
`;

export default function NeonGlow() {
  return <StyledH1> Update Now </StyledH1>;
}
