import "./App.css";
import Logo from "./components/atoms/Logo";
import styled from "styled-components";
import Title from "./components/atoms/Title";
import Paragraph from "./components/atoms/Paragraph";
import Links from "./components/molecules/Links";
import Search from "./components/molecules/Search";

function App() {
  return (
    <>
      <BgWrapper />
      <Header>
        <Logo />
      </Header>
      <Main>
        <MainContent>
          <Title>
            Publish your podcasts <strong>everywhere.</strong>
          </Title>
          <Paragraph>
            Upload your audio to Pod with a single click. We’ll then distribute
            your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket
            Casts and more!
          </Paragraph>
        </MainContent>
        <Links />
        <Search />
      </Main>
    </>
  );
}

export default App;

const BgWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow-x: hidden;
  &::before {
    content: " ";
    display: block;

    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.06;
    background-image: url("./assets/mobile/image-host.jpg");
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
      opacity: 1;
      z-index: -1;
      position: relative;
      left: 20%;

      background-size: 65%;
    }
  }
`;

const Header = styled.header`
  padding-top: 62px;
  display: flex;
  place-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 39px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 57px;

  padding: 0 24px;

  @media (min-width: 768px) {
    background-color: var(--black);
    justify-content: flex-start;
    width: 680px;
    height: 609px;
    margin: 177px 0 0 0;
    padding: 31px 0;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (min-width: 768px) {
    padding: 0 39px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
