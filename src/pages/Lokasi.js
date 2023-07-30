import { MDBContainer } from 'mdb-react-ui-kit';
import { Nav, Navbar} from "react-bootstrap";
import Footer from "../components/Footer.js";
import Map from "../components/Map.js";
import logo from '../images/logo_spensa.png';
import "../style/main.css";
import "../style/responsive.css";
import { FiPhone } from 'react-icons/fi';
import { IoMdMail } from 'react-icons/io';
const Lokasi = () => (
	
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
								<div class="top_bar_login mx-auto">
									<div class="login_button"><a href="#">Login</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>				
		</div>
		<Navbar className="main_nav_container pl-lg-5" collapseOnSelect expand="lg" bg="light" variant="light">
			<Navbar.Brand className="header_content d-flex flex-row align-items-center">
				<MDBContainer fluid className="logo_container justify-content-start" style={{ width: '100%' }}>
				<a href="#">
					<div className="logo_text" style={{ fontSize: '3vw' }}>
					<img src={logo} alt="no image" className="img-fluid" style={{ maxWidth: '40px', height: 'auto' }} /> SMP Negeri 1<span> Atambua</span>
					</div>
				</a>
				</MDBContainer>
			</Navbar.Brand>
			<MDBContainer className="mx-3 w-auto">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" className='justify-content-center' />
			<Navbar.Collapse className="pl-lg-5 justify-content-center" id="responsive-navbar-nav">
					<Nav className="main_nav_contaner pl-lg-5 justify-content-center">
					<Nav.Link href={"/"}>Home</Nav.Link>
					<Nav.Link href={"/profilSekolah"}>Profil Sekolah</Nav.Link>
					<Nav.Link href={"/blog"}>Blog</Nav.Link>
					<Nav.Link className="active" href={"/lokasi"}>Lokasi</Nav.Link>
					<Nav.Link href={"/galeri"}>Galeri</Nav.Link>
					</Nav>
			</Navbar.Collapse>
			</MDBContainer>
		</Navbar>
	</header>
    <main className="flex">
      {/* <Container className="h-100"> */}
      <div class="container">
      <Map />
      </div>
            
      {/* </Container> */}
    </main>

    <Footer />
  </>
);

export default Lokasi;