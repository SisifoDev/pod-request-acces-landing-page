import "./App.css";
import Logo from "./components/atoms/Logo";
import styled from "styled-components";
import Title from "./components/atoms/Title";
import Paragraph from "./components/atoms/Paragraph";
import Links from "./components/molecules/Links";

function App() {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Main>
        <Title>
          Publish your podcasts <strong>everywhere.</strong>
        </Title>
        <Paragraph>
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </Paragraph>
        <Links />
      </Main>
    </>
  );
}

export default App;

const Header = styled.header`
  padding-top: 62px;
  display: flex;
  place-content: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 57px;
  gap: 16px;
  padding: 0 24px;
`;
