import Header from "../components/Header";
import Footer from "../components/Footer.js";
import News from "../components/News";

const Blog = () => (
  <>
    <Header />

    <main className="my-5 py-5">
      {/* <Container className="h-100"> */}
            <News />
      {/* </Container> */}
    </main>

    <Footer />
  </>
);

export default Blog;