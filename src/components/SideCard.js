import Carousel from 'react-bootstrap/Carousel';
import Gambar1 from "../images/spensa.jpg";
import Gambar2 from "../images/harpendik23.jpg";
import Gambar3 from "../images/paskibra23.jpg";
import Gambar4 from "../images/mpls2023.jpg";
import Gambar5 from "../images/pramuka2023.jpg";
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
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
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
