import Carousel from 'react-bootstrap/Carousel';
import Gambar1 from "../images/Jadpel.jpg";
import Gambar2 from "../images/Jadpel2.jpg";
import Gambar3 from "../images/Jadpel3.jpg";
import Gambar4 from "../images/NamaGuru.jpg";
import Gambar5 from "../images/Waktu.jpg";
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
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
}
    

export default DarkVariantExample;
