import React from 'react';
import "../style/main.css"
import "../style/responsive.css"
import Gambar1 from "../images/KuMer.jpg";
import Gambar2 from "../images/Upacara.jpg";
import Gambar3 from "../images/obkt.jpg";
import Gambar4 from "../images/pramuka2023.jpg";


const FeaturesSection = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <h2 className="section_title">Fasilitas dan Ekstrakurikuler</h2>
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
          <div className="col-lg-3 col-md-6 team_col">
            <div className="feature text-center trans_400">
              <div className="feature_icon py-0">
                <img src={Gambar1} alt="Gambar 1" width="300" height="150" />
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
                <img src={Gambar2} alt="Gambar 2" width="300" height="150"/>
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
              <img src={Gambar3} alt="Gambar 3" width="300" height="150"/>
              </div>
              <div className="feature_text pt-4">
              <h3 className="feature_title">Sosialisasi</h3>
                <p>SMP Negeri 1 mengadakan sosialisasi kepada warga sekolah</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 feature_col">
            <div className="feature text-center trans_400">
              <div className="feature_icon">
              <img src={Gambar4} alt="Gambar 4" width="300" height="150"/>
              </div>
              <div className="feature_text pt-4">
              <h3 className="feature_title">Pramuka</h3>
                <p>SMP Negeri 1 Atambua aktif melaksanakan kegiatan pramuka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
