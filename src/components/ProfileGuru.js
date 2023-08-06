import React from 'react';
import "../style/main.css";
import "../style/responsive.css";
import KepalaPerpus from "../images/ibugita.jpg"
// import Kurikulum from "../images/Upacara.jpg"
import Osis from "../images/paksem.jpg"
import Kesiswaan from "../images/paksem.jpg"
import snp from "../images/pakgradus.jpg"
import kurikulum from "../images/pakjon.jpg"


const Profile = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <h2 className="section_title">Guru dan Tugas Tambahan</h2>
            </div>
          </div>
        </div>
        <div className="row team_row">

          {/* Team Item 1 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src={KepalaPerpus} alt="kepala perpustakaan" /></div>
              <div className="team_body">
                <div className="team_title px-2"><a href="#">Dra. Bergita Kapa</a></div>
                <div className="team_subtitle">Kepala Perpustakaan</div>
              </div>
            </div>
          </div>

          {/* Team Item 2 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src={kurikulum} alt="wakasek urusan kurikulum" /></div>
              <div className="team_body">
                <div className="team_title px-2"><a href="#">Yosep Klau Bria, S.Pd<br/></a></div>
                <div className="team_subtitle">Kepala Laboratorium</div>
              </div>
            </div>
          </div>

          {/* Team Item 3 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src={Kesiswaan} alt="wakases urusan kesiswaan" /></div>
              <div className="team_body">
                <div className="team_title px-2"><a href="#">Khadijah Haris, S.Pd</a></div>
                <div className="team_subtitle">Kurikulum</div>
              </div>
            </div>
          </div>

          {/* Team Item 4 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src={snp} alt="wakases urusan sarana dan prasarana" /></div>
              <div className="team_body">
                <div className="team_title px-2"><a href="#">Yanuarius Bartholomeus Mau, S.Pd.Gr</a></div>
                <div className="team_subtitle">Kurikulum</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row team_row">

          {/* Team Item 1 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src={Osis} alt="Osis" /></div>
              <div className="team_body">
                <div className="team_title px-2"><a href="#">Semitrianus Naklui, S.Pd</a></div>
                <div className="team_subtitle">Pembina Osis</div>
              </div>
            </div>
          </div>

          {/* Team Item 2 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src={kurikulum} alt="wakasek urusan kurikulum" /></div>
              <div className="team_body">
                <div className="team_title px-2"><a href="#">Felix Elmi Taek, S.Pd<br/></a></div>
                <div className="team_subtitle">Pembina Osis</div>
              </div>
            </div>
          </div>

          {/* Team Item 3 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src={Kesiswaan} alt="wakases urusan kesiswaan" /></div>
              <div className="team_body">
                <div className="team_title px-2"><a href="#">Julieta Hoar Soares, S.Pd</a></div>
                <div className="team_subtitle">UKS</div>
              </div>
            </div>
          </div>

          {/* Team Item 4 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image img-fluid"><img src={snp} alt="wakases urusan sarana dan prasarana" /></div>
              <div className="team_body">
                <div className="team_title px-2"><a href="#">Armandina V. Lopez, S.Pd</a></div>
                <div className="team_subtitle">Laboratorium Komputer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
