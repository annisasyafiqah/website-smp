import Header from "../components/Header";
import SideCard from "../components/SideCard";
import FeaturesSection from "../components/FeaturesSection.js";
import PopularCourses from "../components/PopularCourses.js";
import Footer from "../components/Footer.js";
import About from "../components/About";
import Profile from "../components/Profile";
import AboutVideo from "../components/AboutVideo";

const ProfilSekolah = () => (
  <>
    <Header />

    <main className="my-5 py-5">
      {/* <Container className="h-100"> */}
      <AboutVideo />
      <Profile />
      {/* </Container> */}
    </main>

    <Footer />
  </>
);

export default ProfilSekolah;