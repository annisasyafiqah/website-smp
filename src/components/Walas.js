import Carousel from 'react-bootstrap/Carousel';
import Gambar1 from "../images/walas.jpg";
import Gambar2 from "../images/walas2.jpg";
import "../style/main.css"

const customCarouselStyles = {
  control: {
    borderRadius: '50%',
    backgroundColor: '#FFC107',
    width: '45px',
    height: '45px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '100px', // Adjust the font size for a smaller icon
    lineHeight: 0,
    color: 'black', 
  },
};
function DarkVariantExample() {
  return (
    <>
    <Carousel data-bs-theme="dark"
         nextIcon={
          <span style={customCarouselStyles.control}>
            <span style={Object.assign({}, customCarouselStyles.icon, { fontSize: '30px' })}>&#8250;</span>
          </span>
        }
        prevIcon={
          <span style={customCarouselStyles.control}>
            <span style={Object.assign({}, customCarouselStyles.icon, { fontSize: '30px' })}>&#8249;</span>
          </span>
        }>
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
