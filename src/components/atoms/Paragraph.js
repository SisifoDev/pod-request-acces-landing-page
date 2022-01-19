import React from "react";
import styled from "styled-components";

export default function Paragraph({ children }) {
  return <ParagraphStyled>{children}</ParagraphStyled>;
}

const ParagraphStyled = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  text-align: center;

  color: var(--lightGray);

  @media (min-width: 768px) {
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    text-align: left;
    display: inline-block;
    width: 80%;
  }
`;
