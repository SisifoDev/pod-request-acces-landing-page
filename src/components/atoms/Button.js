import React from "react";
import styled from "styled-components";

export default function Button({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background: var(--green);
  color: var(--black);
  font-family: Chivo;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  box-shadow: 0px 25px 20px -20px rgba(84, 230, 175, 0.497913);
  border-radius: 28px;
  outline: none;
  border: none;
  width: 326px;
  height: 46px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    width: 162px;
    height: 46px;
    position: relative;
    top: 5px;
    right: 183px;
  }
`;
