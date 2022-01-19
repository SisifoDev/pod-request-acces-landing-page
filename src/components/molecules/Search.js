import React from "react";
import Button from "../atoms/Button";
import styled from "styled-components";
import Input from "../atoms/Input";

export default function Search() {
  return (
    <SearchWrapper>
      <Input />
      <Button>Request Access</Button>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  margin-top: 48px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    align-self: flex-start;
    margin-top: 40px;
    padding: 0;
  }
`;
