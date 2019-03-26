import React, { useState, useRef } from "react";
import styled from "styled-components";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated
} from "react-spring";

import data from "./data";

const StackContainer = styled.div`
  padding: 20px;
`;
const Container = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: repeat(2, 150px);
  grid-gap: 25px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  will-change: width, height;
  justify-content: center;
  align-content: center;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;
const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const StackTitle = styled.div``;

export default function StackSlide() {
  const [open, set] = useState(false);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { width: "100%", background: "white" },
    to: { width: open ? "100%" : "100%", background: open ? "white" : "white" }
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    delay: 500,
    trail: 400 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [transRef] : [transRef], [0, open ? 0.1 : 0.6]);
  setTimeout(
    function() {
      //Start the timer
      set(open => true);
    }.bind(this),
    700
  );

  return (
    <StackContainer>
      <h1>Technological Stack</h1>
      <Container style={{ ...rest, width: size, height: size }}>
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, background: item.css }}>
            <div>{item.name}</div>
          </Item>
        ))}
      </Container>
    </StackContainer>
  );
}
