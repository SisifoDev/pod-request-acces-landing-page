import React from "react";
import Button from "../atoms/Button";
import styled from "styled-components";

export default function Search() {
  return (
    <SearchWrapper>
      <Button>Request Access</Button>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  margin-top: 48px;
  padding: 0;
`;
