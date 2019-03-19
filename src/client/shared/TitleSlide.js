import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  Component
} from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

const TitleText = styled.div`
  width: 100%;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity, height;
  white-space: nowrap;
  cursor: pointer;
  line-height: 80px;
  @media (max-width: 700px) {
    font-size: 4em;
  }
  @media (max-width: 500px) {
    font-size: 3em;
  }
`;
const AnimTitle = TitleText.withComponent(animated.div);

export default function TitleSlide() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#23b8f0"
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#ee0979" },
      { transform: "perspective(600px) rotateX(0deg)" }
    ],
    leave: [
      { color: "#ee0979" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 }
    ],
    update: { color: "#000" }
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(["Career", "2019", "Planner"]), 1000)
    );
    ref.current.push(setTimeout(() => set(["Career", "Planner"]), 5000));
    ref.current.push(
      setTimeout(() => set(["Career", "2019", "Planner"]), 8000)
    );
  }, []);

  useEffect(() => void reset(), []);
  return (
    <div>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <AnimTitle key={key} style={rest} onClick={reset}>
          <animated.div
            style={{ overflow: "hidden", height: innerHeight, fontWeight: 800 }}
          >
            {item}
          </animated.div>
        </AnimTitle>
      ))}
    </div>
  );
}
