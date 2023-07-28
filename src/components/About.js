import React from 'react';
import "../style/main.css";
import "../style/responsive.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <h2 className="section_title">Selamat Datang di ebsite SMP Negeri 1 Atambua</h2>
              <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu Vestibulum</p></div>
            </div>
          </div>
        </div>
        <div className="row about_row">

          {/* About Item 1 */}
          <div className="col-lg-4 about_col about_col_left">
            <div className="about_item">
              <div className="about_item_image"><img src="images/about_1.jpg" alt="" /></div>
              <div className="about_item_title"><a href="#">Our Stories</a></div>
              <div className="about_item_text">
                <p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
              </div>
            </div>
          </div>

          {/* About Item 2 */}
          <div className="col-lg-4 about_col about_col_middle">
            <div className="about_item">
              <div className="about_item_image"><img src="images/about_2.jpg" alt="" /></div>
              <div className="about_item_title"><a href="#">Our Mission</a></div>
              <div className="about_item_text">
                <p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
              </div>
            </div>
          </div>

          {/* About Item 3 */}
          <div className="col-lg-4 about_col about_col_right">
            <div className="about_item">
              <div className="about_item_image"><img src="images/about_3.jpg" alt="" /></div>
              <div className="about_item_title"><a href="#">Our Vision</a></div>
              <div className="about_item_text">
                <p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
