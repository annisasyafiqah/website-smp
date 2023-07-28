import React from 'react';
import "../style/main.css"
import "../style/responsive.css"
import Gambar1 from "../KuMer.jpg";
import Gambar2 from "../Upacara.jpg";
import Gambar3 from "../KuMer.jpg";
import Gambar4 from "../KuMer.jpg";


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
                Dalam menjalankan kegiatannya, SMP NEGERI I ATAMBUA berada di bawah naungan Kementerian Pendidikan dan Kebudayaan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row features_row">
          {/* Features Item */}
          <div className="col-lg-3 feature_col">
            <div className="feature text-center trans_400">
              <div className="feature_icon pt-0">
                <img src={Gambar1} alt="Gambar 1" width="170" height="85" />
              </div>
              <div className="feature_text pt-3">
              <h3 className="feature_title">Kurikulum Merdeka</h3>
                <p>SMP Negeri 1 sudah menerapkan Kurikulum Merdeka</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 feature_col">
            <div className="feature text-center trans_400">
              <div className="feature_icon">
                <img src={Gambar2} alt="Gambar 2" width="170" height="95"/>
              </div>
              <div className="feature_text pt-4">
              <h3 className="feature_title">Upacara Bendera</h3>
                <p>SMP Negeri 1 melaksanakan upacara bendera setiap senin pagi</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 feature_col">
            <div className="feature text-center trans_400">
              <div className="feature_icon">
              <img src={Gambar3} alt="Gambar 3" width="170" height="95"/>
              </div>
              <div className="feature_text pt-4">
              <h3 className="feature_title">The Experts</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 feature_col">
            <div className="feature text-center trans_400">
              <div className="feature_icon">
              <img src={Gambar4} alt="Gambar 4" width="170" height="95"/>
              </div>
              <div className="feature_text pt-4">
              <h3 className="feature_title">The Experts</h3>
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
