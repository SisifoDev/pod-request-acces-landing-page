import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return <Heading1>{children}</Heading1>;
};

export default Title;

const Heading1 = styled.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 38px;
  /* or 146% */

  text-align: center;
  text-transform: uppercase;

  color: var(--green);
  & strong {
    color: var(--white);
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 38px;
    @media (min-width: 768px) {
      text-align: left;
      font-size: 48px;
      line-height: 56px;
    }
  }

  @media (min-width: 768px) {
    margin-top: 93px;
    text-align: left;
    font-size: 48px;
    line-height: 56px;
  }
`;
