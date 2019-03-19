import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { absolute } from "../Utilities";
import TitleSlide from "./TitleSlide";
import InfoSlide from "./InfoSlide";
import StackSlide from "./StackSlide";
import VisitSlide from "./VisitSlide";

const BackButton = styled.img`
  height: 40px;
  margin-bottom: 10px;
  transition: all 0.4s;
  &:hover {
    transform: translateX(10px);
    cursor: pointer;
  }
`;

const Slide = styled.div`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-weight: 800;
  font-size: 1em;
  will-change: transform, opacity;
`;
const AnimeSlide = Slide.withComponent(animated.div);

const Main = styled.div`
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

const PageCount = styled.div`
  ${absolute};
  z-index: 11;
  color: #000;
  font-weight: 800;
  font-size: 1.5em;
  padding: 20px;
`;

export default function Slider() {
  const pages = [
    ({ style }) => (
      <AnimeSlide style={{ ...style, background: "#fff" }}>
        <TitleSlide />
      </AnimeSlide>
    ),
    ({ style }) => (
      <AnimeSlide style={{ ...style, background: "#fff" }}>
        <InfoSlide />
      </AnimeSlide>
    ),
    ({ style }) => (
      <AnimeSlide style={{ ...style, background: "#fff" }}>
        <StackSlide />
      </AnimeSlide>
    ),
    ({ style }) => (
      <AnimeSlide style={{ ...style, background: "#fff" }}>
        <VisitSlide />
      </AnimeSlide>
    )
  ];
  const [index, set] = useState(0);
  const onClick = useCallback(() => set(state => (state + 1) % 4), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(0,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-50%,0)" }
  });
  return (
    <>
      <PageCount>
        <div>
          <Link to="/">
            <BackButton
              src={require("../../images/icon-back.svg")}
              alt="back"
            />
          </Link>
        </div>
        0{index + 1}
        <span style={{ color: "#000" }}> / 04</span>
      </PageCount>
      <Main onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item];
          return <Page key={key} style={props} />;
        })}
      </Main>
    </>
  );
}
