import React from 'react';
import "../style/main.css"
import "../style/responsive.css"

const FeaturesSection = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <h2 className="section_title">Selamat datang di Website SMP Negeri 1 Atambua</h2>
              <div className="section_subtitle">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu.
                  Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row features_row">
          {/* Features Item */}
          <div className="col-lg-3 feature_col">
            <div className="feature text-center trans_400">
              <div className="feature_icon">
                <img src="images/icon_1.png" alt="Gambar 1" />
              </div>
              <h3 className="feature_title">The Experts</h3>
              <div className="feature_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 feature_col">
            <div className="feature text-center trans_400">
              <div className="feature_icon">
                <img src="images/icon_1.png" alt="Ganbar 2" />
              </div>
              <h3 className="feature_title">The Experts</h3>
              <div className="feature_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 feature_col">
            <div className="feature text-center trans_400">
              <div className="feature_icon">
                <img src="images/icon_1.png" alt="Gambar 3" />
              </div>
              <h3 className="feature_title">The Experts</h3>
              <div className="feature_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 feature_col">
            <div className="feature text-center trans_400">
              <div className="feature_icon">
                <img src="images/icon_1.png" alt="Gambar 4" />
              </div>
              <h3 className="feature_title">The Experts</h3>
              <div className="feature_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
