import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  color: ${props => props.theme.primaryText};
`;
export const LogoLink = styled(Link)`
  display: inline-block;
  margin-bottom: 80px;
`;
export const LogoImg = styled.img`
  height: 38px;
`;

export const PageTitle = styled.div`
  font-weight: 300;
  opacity: 0.5;
  font-size: 1.2em;
  margin-bottom: 10px;
`;

export const HeaderText = styled.div`
  font-weight: 700;
  font-size: 2.5em;
  margin-bottom: 40px;
`;
