import Header from "../components/Header";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Footer from "../components/Footer.js";
import News from "../components/News";
import logo from '../images/logo_spensa.png';
import "../style/main.css";
import "../style/responsive.css";
import { FiPhone } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { IoMdMail } from 'react-icons/io';

const Blog = () => (
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
    <Navbar className="main_nav_contaner ml-auto justify-content-end" collapseOnSelect expand="lg" bg="light" variant="light">
	  <Navbar.Brand className="header_content d-flex flex-row align-items-center pr-5">
		<div class="logo_container px-5">
			<a href="#">
			<div class="logo_text">
				<img src={logo} alt="no image" width="30" height="30"/>  SMP Negeri 1<span> Atambua</span></div>
			</a>
		</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="" id="responsive-navbar-nav">
          <Nav className="main_nav_contaner">
		      <Nav.Link href={"/"}>Home</Nav.Link>
          <Nav.Link href={"/profilSekolah"}>Profil Sekolah</Nav.Link>
          <Nav.Link className="active" href={"/blog"}>Blog</Nav.Link>
          <Nav.Link href={"/lokasi"}>Lokasi</Nav.Link>
          <Nav.Link href={"/galeri"}>Galeri</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
	</header>
    <main className="my-5 py-5">
      {/* <Container className="h-100"> */}
            <News />
      {/* </Container> */}
    </main>

    <Footer />
  </>
);

export default Blog;