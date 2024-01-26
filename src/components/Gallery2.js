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
import Gambar42 from "../images/jalansantai1.jpg"
import Gambar43 from "../images/jalansantai2.jpg"
import Gambar44 from "../images/jalansantai3.jpg"
import Gambar45 from "../images/hut1.jpg"
import Gambar46 from "../images/hut2.jpg"
import Gambar47 from "../images/hut3.jpg"
import Gambar48 from "../images/hut4.jpg"
import Gambar49 from "../images/hut5.jpg"
import Gambar50 from "../images/rekoleksi1.jpg"
import Gambar51 from "../images/rekoleksi2.jpg"
import Gambar52 from "../images/rekoleksi3.jpg"
import Gambar53 from "../images/rekoleksi4.jpg"
import Gambar54 from "../images/rekoleksi5.jpg"
import Gambar55 from "../images/evalbulanan1.jpg"
import Gambar56 from "../images/evalbulanan2.jpg"
import Gambar57 from "../images/evalbulanan3.jpg"
import Gambar58 from "../images/evalbulanan4.jpg"
import Gambar59 from "../images/rakom1.jpg"
import Gambar60 from "../images/rakom2.jpg"
import Gambar61 from "../images/rakom3.jpg"
import Gambar62 from "../images/rakom4.jpg"
import Gambar63 from "../images/rakom5.jpg"
import Gambar64 from "../images/hargucara1.jpg"
import Gambar65 from "../images/hargucara2.jpg"
import Gambar66 from "../images/hargucara3.jpg"
import Gambar67 from "../images/hargucara4.jpg"
import Gambar68 from "../images/hargucara5.jpg"
import Gambar69 from "../images/hargucara6.jpg"
import Gambar70 from "../images/hargucara7.jpg"
import Gambar71 from "../images/hargucara8.jpg"
import Gambar72 from "../images/hariguru1.jpg"
import Gambar73 from "../images/hariguru2.jpg"
import Gambar74 from "../images/hariguru3.jpg"
import Gambar75 from "../images/hariguru4.jpg"
import Gambar76 from "../images/hariguru5.jpg"
import Gambar77 from "../images/hariguru6.jpg"
import Gambar78 from "../images/hariguru7.jpg"
import Gambar79 from "../images/hariguru8.jpg"
import Gambar80 from "../images/hariguru9.jpg"
import Gambar81 from "../images/hariguru10.jpg"
import Gambar82 from "../images/eval1.jpg"
import Gambar83 from "../images/eval2.jpg"
import Gambar84 from "../images/eval3.jpg"
import Gambar85 from "../images/eval4.jpg"
import Gambar86 from "../images/eval5.jpg"
import Gambar87 from "../images/eval6.jpg"
import Gambar88 from "../images/eval7.jpg"
import Gambar89 from "../images/tebe6.jpg"
import Gambar90 from "../images/tebe7.jpg"
import Gambar91 from "../images/tebe8.jpg"
import Gambar92 from "../images/tebe9.jpg"
import Gambar93 from "../images/tebe10.jpg"
import Gambar94 from "../images/rpass1.jpg"
import Gambar95 from "../images/rpass2.jpg"
import Gambar96 from "../images/rpass3.jpg"
import Gambar97 from "../images/rpass4.jpg"
import Gambar98 from "../images/rpass5.jpg"
import Gambar99 from "../images/rpass6.jpg"
import Gambar100 from "../images/rpass7.jpg"
import Gambar101 from "../images/cleaning1.jpg"
import Gambar102 from "../images/cleaning2.jpg"
import Gambar103 from "../images/cleaning3.jpg"
import Gambar104 from "../images/cleaning4.jpg"
import Gambar105 from "../images/cleaning5.jpg"
import Gambar106 from "../images/cleaning6.jpg"
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

      {/* -------------KOLOM BARU ------------------ */}
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
                src={Gambar101}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar102}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar103}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar104}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar105}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar106}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </MDBCol>
{/* -------------KOLOM BARU ------------------ */}
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
                src={Gambar94}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar95}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar96}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar97}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar98}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar99}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar100}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </MDBCol>
{/* -------------KOLOM BARU ------------------ */}
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
                src={Gambar89}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar90}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar91}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar92}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar93}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </MDBCol>
{/* -------------KOLOM BARU ------------------ */}
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
                src={Gambar82}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar83}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar84}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar85}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar86}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar87}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar88}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </MDBCol>
{/* -------------KOLOM BARU ------------------ */}
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
                src={Gambar72}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar73}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar74}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar75}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar76}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar77}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar78}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar79}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar80}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar81}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </MDBCol>
{/* -------------KOLOM BARU ------------------ */}
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
                src={Gambar64}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar65}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar66}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar67}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar68}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar69}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar70}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar71}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </MDBCol>
      {/* -------------KOLOM BARU ------------------ */}
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
                src={Gambar59}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar60}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar61}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar62}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar63}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </MDBCol>
{/* -------------KOLOM BARU ------------------ */}
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
                src={Gambar55}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar56}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar57}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar58}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </MDBCol>
{/* -------------KOLOM BARU ------------------ */}
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
                src={Gambar50}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar51}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar52}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar53}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar54}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </MDBCol>

      {/* ----------- KOLOM BARU ---------- */}
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
                src={Gambar42}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar43}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar44}
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
                src={Gambar45}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar46}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar47}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar48}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item className='w-100 shadow-1-strong rounded mb-4'>
                <img
                className="d-block w-100 rounded mb-4"
                src={Gambar49}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
      </MDBCol>

      {/* -------------KOLOM BARU ------------------ */}
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