import Carousel from 'react-bootstrap/Carousel';
import Gambar1 from "../images/NamaGuru.jpg";
import Gambar2 from "../images/Waktu.png";
import "../style/main.css"


function DarkVariantExample() {
  return (
    <>
    <Carousel
      data-bs-theme="dark"
    >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={Gambar1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
}
    

export default DarkVariantExample;
