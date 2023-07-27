import { Container, Row, Col } from "reactstrap";

import Post from "./components/Post";
import Header from "./components/Header";
import SideCard from "./components/SideCard";
import FeaturesSection from "./components/FeaturesSection"

const App = () => (
  <>
    <Header />

    <main className="my-5 py-5">
      <Container className="h-100">
            <SideCard />
            <FeaturesSection />
      </Container>
    </main>
  </>
);

export default App;