import Header from "../components/Header";
import Footer from "../components/Footer.js";
import Map from "../components/Map.js";
const Lokasi = () => (
  <>
    <Header />

    <main className="my-5 py-5">
      {/* <Container className="h-100"> */}
      <div class="container w-100">
      <Map />
      </div>
            
      {/* </Container> */}
    </main>

    <Footer />
  </>
);

export default Lokasi;