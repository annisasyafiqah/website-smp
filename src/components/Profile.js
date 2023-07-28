import React from 'react';
import "../style/main.css";
import "../style/responsive.css";

const Profile = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <h2 className="section_title">Profil Kepala Sekolah dan Jajarannya</h2>
            </div>
          </div>
        </div>
        <div className="row team_row">

          {/* Team Item 1 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image"><img src="images/team_1.jpg" alt="" /></div>
              <div className="team_body">
                <div className="team_title"><a href="#">Jacke Masito</a></div>
                <div className="team_subtitle">Kepala Sekolah</div>
              </div>
            </div>
          </div>

          {/* Team Item 2 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image"><img src="images/team_2.jpg" alt="" /></div>
              <div className="team_body">
                <div className="team_title"><a href="#">William James</a></div>
                <div className="team_subtitle">Wakasek Urusan Kurikulum</div>
              </div>
            </div>
          </div>

          {/* Team Item 3 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image"><img src="images/team_3.jpg" alt="" /></div>
              <div className="team_body">
                <div className="team_title"><a href="#">John Tyler</a></div>
                <div className="team_subtitle">Wakasek Urusan Kurikulum</div>
              </div>
            </div>
          </div>

          {/* Team Item 4 */}
          <div className="col-lg-3 col-md-6 team_col">
            <div className="team_item">
              <div className="team_image"><img src="images/team_4.jpg" alt="" /></div>
              <div className="team_body">
                <div className="team_title"><a href="#">Veronica Vahn</a></div>
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
