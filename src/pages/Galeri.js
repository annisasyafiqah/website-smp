import Header from "../components/Header";
import SideCard from "../components/SideCard";
import FeaturesSection from "../components/FeaturesSection.js";
import PopularCourses from "../components/PopularCourses.js";
import Footer from "../components/Footer.js";

const Galeri = () => (
  <>
    <Header />

    <main className="my-5 py-5">
      {/* <Container className="h-100"> */}
            <FeaturesSection />
            <PopularCourses />
      {/* </Container> */}
    </main>

    <Footer />
  </>
);

export default Galeri;