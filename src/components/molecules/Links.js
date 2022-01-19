import React from "react";

import styled from "styled-components";

export default function Links() {
  return (
    <LinksWrapper>
      <img src="assets/Spotify_logo.svg" alt="" />
      <img src="assets/ApplePodcast.svg" alt="" />
      <img src="assets/GoodlePodcasts.svg" alt="" />
      <img src="assets/PocketCasts.svg" alt="" />
    </LinksWrapper>
  );
}

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
  margin-top: 32px;
  & img {
    height: 17px;
    width: auto;
  }
  @media (min-width: 768px) {
    order: 4;
    width: auto;
    height: 29px;
    gap: 40px;
    margin-top: 64px;
    justify-content: flex-start;

    align-self: start;
    & img {
      height: 29px;
      width: auto;
    }
  }
`;
