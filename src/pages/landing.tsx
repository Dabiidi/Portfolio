
import Navbar from "../components/navbar";
import {
  Content,
  HomeContainer,
  Subtitle,
  Title,
} from "../components/styles/landing.style";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Title>Welcome to My Portfolio</Title>
      <Subtitle>Frontend Developer & Designer</Subtitle>
      <Content>
        <p>
          Hello! I'm [Your Name], a passionate frontend developer with a knack
          for creating beautiful and functional web applications. Check out my
          projects below and feel free to get in touch!
        </p>
      </Content>
    </HomeContainer>
  );
};

export default Home;
