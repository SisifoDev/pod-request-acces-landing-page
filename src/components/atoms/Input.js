import React from "react";
import styled from "styled-components";

export default function Input() {
  return (
    <InputWrapper>
      <InputStyled type="text" placeholder="Email address" />
    </InputWrapper>
  );
}

const InputWrapper = styled.form`
  width: 100%;
  height: 46px;
  background: var(--darkGray);
  border-radius: 28px;
  opacity: 0.5;
  @media (min-width: 768px) {
    height: 56px;
    width: 427px;
    margin: 0;
    padding: 0;
  }
`;

const InputStyled = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  background: transparent;
  border-radius: 28px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
  /* identical to box height, or 200% */
  padding: 9px 32px;
  color: #ffffff;

  mix-blend-mode: normal;

  outline-offset: unset;

  @media (min-width: 768px) {
    align-self: flex-start;
  }
`;
