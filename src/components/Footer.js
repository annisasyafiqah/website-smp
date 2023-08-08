import React from 'react';
import { Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_background" style={{ backgroundImage: "url(images/footer_background.png)" }}></div>
      <div className="container">
        <div className="row footer_row">
          <div className="col">
            <div className="footer_content">
              <div className="row">

                <div className="col-lg-3 footer_col">
                  {/* Footer About */}
                  <div className="footer_section footer_about">
                    <div className="footer_logo_container">
                      <a href="#">
                        <div className="footer_logo_text">SMP N 1<span> Atambua</span></div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 footer_col">
                  {/* Footer Contact */}
                  <div className="footer_section footer_contact">
                    <div className="footer_title">Hubungi Kami</div>
                    <div className="footer_contact_info">
                      <ul>
                        <li><a href="mailto:smpnatambua1@gmail.com" style={{ color: "white" }}>smpnatambua1@gmail.com</a></li>
                        <li>(0389) 21224</li>
                        <li><a href="https://goo.gl/maps/1Gfjwo1uVkVNHweC6" style={{ color: "white" }}>Jl. Adi Sucipto, Atambua, Belu, East Nusa Tenggara 85711, Manumutin, Kec. Kota Atambua, Kabupaten Belu, Nusa Tenggara Tim.</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 footer_col">
                  {/* Footer links */}
                  <div className="footer_section footer_links">
                    <div className="footer_title">Contact Us</div>
                    <div className="footer_links_container">
                      <ul>
                        <li><Nav.Link href={"/"}>Home</Nav.Link></li>
                        <li><Nav.Link href={"/profilSekolah"}>Profil</Nav.Link></li>
                        <li><Nav.Link href={"/blog"}>Kegiatan</Nav.Link></li>
                        <li><Nav.Link href={"/galeri"}>Galeri</Nav.Link></li>
                        <li><Nav.Link className="active"href={"/info"}>Info Tambahan</Nav.Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row copyright_row">
          <div className="col">
            <div className="copyright d-flex flex-lg-row flex-column align-items-center justify-content-start">
              <div className="cr_text">
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserve
              </div>
              <div className="ml-lg-auto cr_links">
                <ul className="cr_list">
                  <li><a href="#">Copyright notification</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
