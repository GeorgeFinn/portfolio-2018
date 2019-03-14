import styled from "styled-components";
import posed from "react-pose";

export const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    x: 0,
    delay: 200,
    beforeChildren: true,
    transition: {
      opacity: { ease: "easeOut", duration: 1000 },
      default: { ease: "easeOut", duration: 300 }
    }
  },
  exit: { opacity: 0, x: -50, transition: { ease: "easeIn", duration: 200 } }
});
