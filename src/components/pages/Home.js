
import styled from "styled-components";
import Food from "../Food/Food";

const HomePage = styled.main`
  margin-top: 10rem;
`;
const Home = () => {
  return (
    <HomePage>
      <Food />
    </HomePage>
  );
};

export default Home;
