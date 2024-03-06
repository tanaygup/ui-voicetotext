import React from "react";
import styled from "styled-components";
import Chat from './Chat';
import Sidebar from './Sidebar'; // Import the Sidebar component

const Container = styled.div`
  display: flex; /* Use flexbox to arrange children */
`;

const HeaderContainer = styled.header`
  width: calc(100% - 250px); /* Adjust width to accommodate sidebar */
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0; /* Remove default margin */
  }

  ul li {
    display: inline-block;
    margin-right: 1rem;
  }

  ul li a {
    color: #fff;
    text-decoration: none;
  }
`;

const MainContent = styled.main`
  width: calc(100% - 250px); /* Adjust width to accommodate sidebar */
  padding: 2rem;
`;

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

function App() {
  return (
    <Container>
      <Sidebar /> {/* Add the Sidebar component here */}
      <HeaderContainer>
        <h1>Otter.ai</h1>
        <Navigation>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </Navigation>
      </HeaderContainer>
      <MainContent>
        <h2>Welcome to Otter.ai</h2>
        <p>Your go-to platform for transcription and note-taking.</p>
        <Chat />
      </MainContent>
      <FooterContainer>
        <p>&copy; 2024 Otter.ai</p>
      </FooterContainer>
    </Container>
  );
}

export default App;
