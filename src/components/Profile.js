import React from 'react';
import "../style/main.css";
import "../style/responsive.css";
import KepalaSekolah from "../images/bukepsek.jpg"
// import Kurikulum from "../images/Upacara.jpg"
import Kesiswaan from "../images/paksem.jpg"
import snp from "../images/pakgradus.jpg"


const Profile = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <h2 className="section_title">Profil Kepala Sekolah dan Staf</h2>
            </div>
          </div>
        </div>
        <div className="row team_row">

          {/* Team Item 1 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src={KepalaSekolah} alt="kepala sekolah" /></div>
              <div className="team_body">
                <div className="team_title px-2"><a href="#">Maria Magdalena Amann, S.Pd</a></div>
                <div className="team_subtitle">Kepala Sekolah</div>
              </div>
            </div>
          </div>

          {/* Team Item 2 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src={KepalaSekolah} alt="wakasek urusan kurikulum" /></div>
              <div className="team_body">
                <div className="team_title px-2"><a href="#">Yohanes Nahak</a></div>
                <div className="team_subtitle">Wakasek Urusan Kurikulum</div>
              </div>
            </div>
          </div>

          {/* Team Item 3 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src={Kesiswaan} alt="wakases urusan kesiswaan" /></div>
              <div className="team_body">
                <div className="team_title px-2"><a href="#">Semitrianus Naklui, S.Pd</a></div>
                <div className="team_subtitle">Wakasek Urusan Kesiswaan</div>
              </div>
            </div>
          </div>

          {/* Team Item 4 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src={snp} alt="wakases urusan sarana dan prasarana" /></div>
              <div className="team_body">
                <div className="team_title px-2"><a href="#">Gerardus Saka Taek, S.Pd</a></div>
                <div className="team_subtitle">Wakasek Urusan Sarana & Prasarana</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row team_row">

          {/* Team Item 1 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src="images/bukepsek.jpg" alt="" /></div>
              <div className="team_body">
                <div className="team_title"><a href="#">Dra. Bergita Kapa</a></div>
                <div className="team_subtitle">Kepala Perpustakaan</div>
              </div>
            </div>
          </div>

          {/* Team Item 2 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src="images/.jpg" alt="" /></div>
              <div className="team_body">
                <div className="team_title"><a href="#">Yosep Klau Bria, S.Pd</a></div>
                <div className="team_subtitle">Kepala Laboratorium</div>
              </div>
            </div>
          </div>

          {/* Team Item 3 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src="images/team_3.jpg" alt="" /></div>
              <div className="team_body">
                <div className="team_title"><a href="#">Semitrianus Naklui, S.Pd</a></div>
                <div className="team_subtitle">Wakasek Urusan Kesiswaan</div>
              </div>
            </div>
          </div>

          {/* Team Item 4 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image"><img src="images/team_4.jpg" alt="" /></div>
              <div className="team_body">
                <div className="team_title"><a href="#">Gerardus Saka Taek, S.Pd</a></div>
                <div className="team_subtitle">Wakasek Urusan Sarana & Prasarana</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
