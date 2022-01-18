import React from "react";
import ApplePodcast from "../atoms/ApplePodcast";
import styled from "styled-components";
import SpotifyPodcast from "../atoms/SpotifyPodcast";
import GooglePodcast from "../atoms/GooglePodcast";
import Pocketcast from "../atoms/Pocketcast";

export default function Links() {
  return (
    <LinksWrapper>
      <SpotifyPodcast />
      <ApplePodcast />
      <GooglePodcast />
      <Pocketcast />
    </LinksWrapper>
  );
}

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
  margin: 32px 0 0 0;
`;
