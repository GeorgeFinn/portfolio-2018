import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled(Link)`
  background-image: linear-gradient(
    to right,
    ${props => props.theme.gradientOne} 0%,
    ${props => props.theme.gradientTwo} 51%,
    ${props => props.theme.gradientOne} 100%
  );
  color: #fff;
  background-size: 200% auto;
  transition: all 0.5s;
  padding: 20px 25px;
  border-radius: 10px;
  margin-bottom: 100px;
  display: inline-block;
  vertical-align: middle;
  &:hover {
    background-position: right center;
  }
`;
export const ButtonImage = styled.img`
  vertical-align: middle;
  transition: all 0.5s;
  ${ButtonContainer}:hover & {
    transform: translateX(10px);
  }
`;

export const TitleText = styled.div`
  display: inline-block;
  font-weight: 200;
  font-size: 1em;
  margin-right: 40px;
`;
