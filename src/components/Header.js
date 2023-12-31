import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo_spensa.png";
import { IoMdMail } from 'react-icons/io';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/main.css";
import "../style/responsive.css";
const customToggleStyles = {
	toggle: {
	  backgroundColor: 'yellow',
	  border: 'none',
	},
  };
export default function App() {
  return (
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
									{/* <FiPhone size={20} style={{ color: "white" }}/> */}
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
		<div class="logo_container mx-5">
			<a>
			<div className="logo_text">
				<img src={logo} alt="no image" width="30" height="30"/>  SMP Negeri 1<span> Atambua</span>
			</div>
			</a>
		</div>
      </Navbar.Brand>
      <Navbar.Toggle
	  	className="toggle_button" // Add this class to the toggle button
          aria-controls="responsive-navbar-nav"
          style={customToggleStyles.toggle} // Apply the custom style
      />
      <Navbar.Collapse className="" id="responsive-navbar-nav">
        <Nav className="main_nav_contaner">
		  <Nav.Link className="active" href={"/"}>Home</Nav.Link>
          <Nav.Link href={"/profilSekolah"}>Profil Sekolah</Nav.Link>
          <Nav.Link href={"/blog"}>Blog</Nav.Link>
          <Nav.Link href={"/lokasi"}>Lokasi</Nav.Link>
          <Nav.Link href={"/galeri"}>Galeri</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
	</header>
  );
}