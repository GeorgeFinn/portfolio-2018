import styled from "styled-components";

export const Heading1 = styled.h1`
  color: ${props => props.theme.primaryText};
  font-size: 4em;
  margin-bottom: 0;
`;

export const Heading2 = styled.h2`
  color: ${props => props.theme.primaryText};
  font-size: 2em;
`;

export const Heading3 = styled.h3`
  color: ${props => props.theme.primaryText};
  margin-top: 0;
  font-size: 1.5em;
  margin-bottom: 20px;
`;
export const Regular = styled.div`
  color: ${props => props.theme.primaryText};
  font-weight: 500;
  font-size: 1em;
`;
export const RegularLarge = styled.div`
  color: ${props => props.theme.primaryText};
  font-weight: 500;
  font-size: 1.5em;
`;

export const Heading4 = styled.h4`
  color: ${props => props.theme.secondary};
  font-size: 1em;
`;

export const Span3 = styled(Heading3)`
  color: ${props => props.theme.primaryText};
  display: inline-block;
  margin-right: 20px;
`;
export const SecondarySpan3 = styled(Span3)`
  color: ${props => props.theme.secondary};
`;
