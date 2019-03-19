import React, { Component } from "react";
import styled from "styled-components";
import anime from "animejs";
import "./SmartHomeProject.css";

const SmartHome = styled.div`
  background: #f36072;
  color: #252423;
  width: 100%;
  height: 350px;
  transition: all 0.4s;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  &:hover {
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transform: translateY(-10px);
  }
  margin-bottom: 50px;
`;

const StaggerVisualizer = styled.div`
  transform-origin: left top;
  width: 1100px;
  height: 500px;
  position: absolute;
  @media (max-width: 770px) {
    display: none;
  }
`;
const DotsWrapper = styled.div`
  transform: translateZ(0);
  position: relative;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Dot = styled.div`
  position: relative;
  z-index: 1;
  width: 23px;
  height: 23px;
  margin: 16px;
  border-radius: 50%;
  background-color: transparent;
  background-image: linear-gradient(150deg, #ffffff 8%, #d3cdc6 100%);
`;
const Cursor = styled.div`
  position: absolute;
  top: 0px;
  width: 37px;
  height: 37px;
  margin: 9px;
  background-color: white;
  border-radius: 50%;
`;

const SmartHomeTitle = styled.div`
  position: absolute;
  z-index: 100;
  font-weight: 800;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 50px;
  color: white;
`;

const TitleText = styled.div`
  font-size: 2.5em;
  font-weight: 800;
`;
const DateText = styled.div`
  font-weight: 600;
  margin-left: 50px;
`;
var animation;
class SmartHomeProject extends Component {
  componentDidMount() {
    function fitElementToParent(el, padding) {
      var timeout = 10;
      function resize() {
        if (timeout) clearTimeout(timeout);
        anime.set(el, { scale: 1 });
        var pad = padding || 0;
        var parentEl = el.parentNode;
        var elOffsetWidth = el.offsetWidth - pad;
        var parentOffsetWidth = parentEl.offsetWidth;
        var ratio = parentOffsetWidth / elOffsetWidth;
        timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
      }
      resize();
      window.addEventListener("resize", resize);
    }
    var staggerVisualizerEl = document.querySelector(".stagger-visualizer");
    var dotsWrapperEl = staggerVisualizerEl.querySelector(".dots-wrapper");
    var dotsFragment = document.createDocumentFragment();
    var grid = [20, 10];
    var cell = 55;
    var numberOfElements = grid[0] * grid[1];

    var paused = true;
    fitElementToParent(staggerVisualizerEl, 0);
    for (var i = 0; i < numberOfElements; i++) {
      var dotEl = document.createElement("div");
      dotEl.classList.add("dot");
      dotsFragment.appendChild(dotEl);
    }
    dotsWrapperEl.appendChild(dotsFragment);
    var index = anime.random(0, numberOfElements - 1);
    anime.set(".stagger-visualizer .cursor", {
      translateX: anime.stagger(-cell, { grid: grid, from: index, axis: "x" }),
      translateY: anime.stagger(-cell, { grid: grid, from: index, axis: "y" }),
      translateZ: 0,
      scale: 1.5
    });
    function play() {
      paused = false;
      if (animation) animation.pause();

      var nextIndex = anime.random(0, numberOfElements - 1);

      animation = anime
        .timeline({
          easing: "easeInOutQuad",
          complete: play
        })
        .add({
          targets: ".stagger-visualizer .cursor",
          keyframes: [
            { scale: 0.75, duration: 120 },
            { scale: 2.5, duration: 220 },
            { scale: 1.5, duration: 450 }
          ],
          duration: 300
        })
        .add(
          {
            targets: ".stagger-visualizer .dot",
            keyframes: [
              {
                translateX: anime.stagger("-2px", {
                  grid: grid,
                  from: index,
                  axis: "x"
                }),
                translateY: anime.stagger("-2px", {
                  grid: grid,
                  from: index,
                  axis: "y"
                }),
                duration: 100
              },
              {
                translateX: anime.stagger("4px", {
                  grid: grid,
                  from: index,
                  axis: "x"
                }),
                translateY: anime.stagger("4px", {
                  grid: grid,
                  from: index,
                  axis: "y"
                }),
                scale: anime.stagger([2.6, 1], { grid: grid, from: index }),
                duration: 225
              },
              {
                translateX: 0,
                translateY: 0,
                scale: 1,
                duration: 1200
              }
            ],
            delay: anime.stagger(80, { grid: grid, from: index })
          },
          30
        )
        .add(
          {
            targets: ".stagger-visualizer .cursor",
            translateX: {
              value: anime.stagger(-cell, {
                grid: grid,
                from: nextIndex,
                axis: "x"
              })
            },
            translateY: {
              value: anime.stagger(-cell, {
                grid: grid,
                from: nextIndex,
                axis: "y"
              })
            },
            scale: 1.5,
            easing: "cubicBezier(.075, .2, .165, 1)",
            delay: 300
          },
          "-=800"
        );
      index = nextIndex;
    }
    play();
  }
  componentWillUnmount() {
    animation.pause();
  }

  render() {
    return (
      <SmartHome>
        <SmartHomeTitle>
          <TitleText>Smart Home</TitleText> <DateText>2019</DateText>
        </SmartHomeTitle>
        <StaggerVisualizer className="stagger-visualizer">
          <Cursor className="cursor" />
          <DotsWrapper className="dots-wrapper" />
        </StaggerVisualizer>
      </SmartHome>
    );
  }
}

export default SmartHomeProject;
