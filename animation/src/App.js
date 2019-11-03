import React, { useEffect, useRef } from "react";
import { Component } from "react";
import { TweenMax, Linear } from "gsap";
import logo from "./logo.svg";
import "./App.css";
import ReactLogo from "./components/reactLogo";
import styled from "styled-components";
import Header from "./components/Header";
import HeaderTwo from "./components/HeaderTwo";
import NeonGlow from "./components/NeonGlow";
import NeonGlowAlternative from "./components/NeonGlowAlternative";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

class App extends Component {
  render() {
    return (
    
      <StyledApp>
          <h1>Test</h1>
        <HeaderTwo />
        <NeonGlow></NeonGlow>
        <Header />
        <NeonGlowAlternative />
      </StyledApp>
    );
  }
}
export default App;
