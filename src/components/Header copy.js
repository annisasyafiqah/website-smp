import logo from '../images/logo_spensa.png';
import "../style/main.css";
import "../style/responsive.css";
import { FiPhone } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { IoMdMail } from 'react-icons/io';

function Header() {
    return (
    <header class="header">
			
		{/* <!-- Top Bar --> */}
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

		{/* <!-- Header Content --> */}
		<div class="header_container">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="header_content d-flex flex-row align-items-center justify-content-start">
							<div class="logo_container">
								<a href="#">
									<div class="logo_text">
										<img src={logo} alt="no image" width="30" height="30"/>  SMP Negeri 1<span> Atambua</span></div>
								</a>
							</div>
							<nav class="main_nav_contaner ml-auto">
								<ul class="main_nav mr-0">
									<li class="active">
										<NavLink to={"/"}>Home
										</NavLink></li>
									<li>
										<NavLink to={"/profilSekolah"}>Profil Sekolah
										</NavLink></li>
									<li>
										<NavLink to={"/blog"}>Kegiatan
										</NavLink></li>
									<li>
										<NavLink to={"/lokasi"}>Lokasi
										</NavLink></li>
									<li>
										<NavLink to={"/galeri"}>Galeri
										</NavLink></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    );
  }
  
  export default Header;