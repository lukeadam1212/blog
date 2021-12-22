import React from "react";
import styled from "styled-components";

// components
import customData from "../data";

// style
const StyledHomeScreen = styled.main`
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  section {
    width: 80vw;
    height: 88vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .home-top {
      z-index: 1;
      height: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      padding-top: 4rem;
      .circle {
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        background-color: #5526c4;
        position: absolute;
        z-index: 1;
        left: 25%;
        top: 8%;
      }
      .top-text {
        position: relative;
        z-index: 2;
      }
      h1 {
        text-transform: uppercase;
        font-size: 3rem;
        width: 20%;
        text-align: left;
        line-height: 3.5rem;
      }
      p {
        text-align: left;
        width: 80%;
        line-height: 1.5rem;
      }
    }
    .home-bottom {
      height: 35%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .square {
        height: 9rem;
        width: 1.1rem;
        background-color: #5526c4;
      }
      p {
        text-align: left;
        width: 85%;
        line-height: 1.5rem;
      }
    }
  }
`;
const HomeScreen = () => {
  return (
    <StyledHomeScreen>
      <section>
        <div className="home-top">
          <div className="circle"></div>
          <div className="top-text">
            <h1>{customData.homeScreen.homeTopTitle}</h1>
            <p>{customData.homeScreen.homeTopText}</p>
          </div>
        </div>
        <div className="home-bottom">
          <div className="square"></div>
          <p>{customData.homeScreen.homeBottomText}</p>
        </div>
      </section>
    </StyledHomeScreen>
  );
};

export default HomeScreen;
