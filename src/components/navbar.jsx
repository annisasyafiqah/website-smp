import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../logo_spensa.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
	<header class="header">
			
		<div class="top_bar">
			<div class="top_bar_container">
				<div class="container">
					<div class="row">
						<div class="col">
							<div class="top_bar_content d-flex flex-row align-items-center justify-content-start">
								<ul class="top_bar_contact_list">
									<li><div class="question">Punya pertanyaan terkait SMP Negeri 1 Atambua?</div></li>
									<li>
										<i class="fa fa-phone" aria-hidden="true"></i>
										<div>(0389) 21224</div>
									</li>
									<li>
										<i class="fa fa-envelope-o" aria-hidden="true"></i>
										<div>smpnatambua1@gmail.com</div>
									</li>
								</ul>
								<div class="top_bar_login ml-auto">
									<div class="login_button"><a href="#">Login</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>				
		</div>

		<div class="header_container">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="header_content d-flex flex-row align-items-center justify-content-start">
							<div class="logo_container">
								<a href="#">
									<div class="logo_text">
										<img src={logo}  alt="no image" width="30" height="30"/>  SMP Negeri 1<span> Atambua</span></div>
								</a>
							</div>
							<nav class="main_nav_contaner ml-auto">
								<ul class="main_nav">
									<li class="active"><a href="#">Home</a></li>
									<li><a href="about.html">Profil Sekolah</a></li>
									<li><a href="courses.html">Courses</a></li>
									<li><a href="blog.html">Blog</a></li>
									<li><a href="#">Page</a></li>
									<li><a href="contact.html">Contact</a></li>
								</ul>
							</nav>

						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    </div>
  );
};

export default Navbar;