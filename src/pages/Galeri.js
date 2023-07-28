import Header from "../components/Header";
import Gallery from "../components/Gallery";
import { Container } from 'reactstrap'; 
import Footer from "../components/Footer.js";

const Galeri = () => (
  <>
    <Header />

    <main className="my-5 py-5 mt-5">
      <Container className="h-100 pt-5 mt-5">
            <Gallery />
      </Container>
    </main>

    <Footer />
  </>
);

export default Galeri;