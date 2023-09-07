import React from 'react';
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import "../style/main.css";
import "../style/responsive.css";
import Gambar1 from "../images/rapateval.jpg"
import Gambar2 from "../images/rapateval2.jpg"
import Gambar3 from "../images/rapateval3.jpg"
import Gambar4 from "../images/rapateval4.jpg"
import Gambar5 from "../images/rapateval5.jpg"
import Gambar6 from "../images/rapateval6.jpg"
import Gambar7 from "../images/rapateval7.jpg"
import Gambar8 from "../images/mpls.jpg"
import Gambar9 from "../images/mpls2.jpg"
import Gambar10 from "../images/mpls3.jpg"
import Gambar11 from "../images/mpls4.jpg"
import Gambar12 from "../images/mpls5.jpg"
import Gambar13 from "../images/pramuka.jpg"
import Gambar14 from "../images/pramuka1.jpg"
import Gambar15 from "../images/pramuka2.jpg"
import Gambar16 from "../images/pramuka3.jpg"
import Gambar17 from "../images/pramuka4.jpg"
import Gambar18 from "../images/obkt.jpg"
import Gambar19 from "../images/obkt2.jpg"
import Gambar20 from "../images/obkt3.jpg"
import Gambar21 from "../images/obkt4.jpg"
import Gambar22 from "../images/obkt5.jpg"
import Gambar23 from "../images/harpendik.jpg"
import Gambar24 from "../images/harpendik2.jpg"
import Gambar25 from "../images/harpendik3.jpg"
import Gambar26 from "../images/harpendik4.jpg"
import Gambar27 from "../images/harpendik5.jpg"
import Gambar28 from "../images/harpendik6.jpg"
import Gambar29 from "../images/harpendik7.jpg"
import Gambar30 from "../images/harpendik8.jpg"
import Gambar31 from "../images/p5.jpg"
import Gambar32 from "../images/p5-1.jpg"
import Gambar33 from "../images/p5-2.jpg"
import Gambar34 from "../images/p5-3.jpg"
import Gambar35 from "../images/p5-4.jpg"
import Gambar36 from "../images/p5-siswa.jpg"
import Gambar37 from "../images/p5-siswa2.jpg"
import Gambar38 from "../images/p5-siswa3.jpg"
import Gambar39 from "../images/p5-siswa4.jpg"
import Gambar40 from "../images/p5-siswa5.jpg"
import Gambar41 from "../images/p5-siswa6.jpg"
import Gambar42 from "../images/p5-siswa7.jpg"
import Gambar43 from "../images/p5-siswa8.jpg"
import Gambar44 from "../images/p5-siswa9.jpg"
import Carousel from 'react-bootstrap/Carousel';


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
      fontSize: '200px', // Mengubah ukuran ikon menjadi lebih besar
      lineHeight: 0, // Untuk menghapus spasi ekstra yang disebabkan oleh metrik font
      color: 'black', // Mengubah warna ikon menjadi hitam
    },
  };

export default function App() {
  return (
    <MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
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
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar4}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar5}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar7}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </MDBCol>
            <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
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
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar8}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar9}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar10}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar11}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar12}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
      </MDBCol>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
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
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar13}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar14}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar15}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar16}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar17}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </MDBCol>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
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
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar18}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar19}
                alt="Second slide"
                />
                <div className="overlay d-block w-100"></div>
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar20}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar21}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar22}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
      </MDBCol>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
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
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar23}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar24}
                alt="Second slide"
                />
                <div className="overlay d-block w-100"></div>
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar25}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar26}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar27}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar28}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar29}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar30}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar30}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar30}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
      </MDBCol>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
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
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar31}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar32}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar33}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar34}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar35}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
      </MDBCol>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
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
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar36}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar37}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar38}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar39}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar40}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
      </MDBCol>

    </MDBRow>
  );
}