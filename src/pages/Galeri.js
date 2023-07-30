import Gallery from "../components/Gallery";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from 'reactstrap'; 
import Footer from "../components/Footer.js";
import logo from '../images/logo_spensa.png';
import "../style/main.css";
import "../style/responsive.css";
import { FiPhone } from 'react-icons/fi';
import { IoMdMail } from 'react-icons/io';
import { MDBContainer } from 'mdb-react-ui-kit';

const Galeri = () => (
  <>
    <header class="header">
      <div class="top_bar">
			<div class="top_bar_container">
				<div class="container">
					<div class="row">
						<div class="col">
							<div class="top_bar_content d-flex flex-row align-items-center ">
								<ul class="top_bar_contact_list justify-content-start ">
									<li><div class="question">Punya pertanyaan terkait SMP Negeri 1 Atambua?</div></li>
									<li>
									<FiPhone size={20} style={{ color: "white" }}/>
										<div>(0389)21224</div>
									</li>
									<li>
									<IoMdMail size={20} style={{ color: "white" }}/>
										<div>smpnatambua1@gmail.com</div>
									</li>
								</ul>
								{/* <div class="top_bar_login mx-auto">
									<div class="login_button"><a href="#">Login</a></div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>				
		</div>
		<Navbar className="main_nav_contaner w-100 pt-0" collapseOnSelect expand="lg" bg="light" variant="light">
			<Navbar.Brand className="header_content d-flex flex-row align-items-center">
				<MDBContainer fluid className="logo_container justify-content-start" style={{ width: '100%' }}>
				<a href="#">
					<div className="logo_text" style={{ fontSize: 'clamp(20px, 2vw, 40px)'}}>
					<img src={logo} alt="no image" className="img-responsive" style={{ minWidth: '20px', maxWidth: '40px'}} /> SMP Negeri 1<span> Atambua</span>
					</div>
				</a>
				</MDBContainer>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-4 justify-content-end" />
			<Navbar.Collapse className="mx-4 pl-lg-5 justify-content-center" id="responsive-navbar-nav">
					<Nav className="main_nav_contaner pl-lg-5 justify-content-end">
					<Nav.Link href={"/"}>Home</Nav.Link>
					<Nav.Link href={"/profilSekolah"}>Profil</Nav.Link>
					<Nav.Link href={"/blog"}>Kegiatan</Nav.Link>
					<Nav.Link href={"/lokasi"}>Lokasi</Nav.Link>
					<Nav.Link className="active" href={"/galeri"}>Galeri</Nav.Link>
					</Nav>
			</Navbar.Collapse>
		</Navbar>
	</header>
    <main className="my-5 py-5 mt-5">
      <Container className="h-100 pt-5 mt-5">
            <Gallery />
      </Container>
    </main>

    <Footer />
  </>
);

export default Galeri;