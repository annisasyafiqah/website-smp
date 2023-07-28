import React from 'react';
import "../style/main.css"
const PopularCourses = () => {
  return (
    <div className="courses">
      <div className="section_background parallax-window" data-parallax="scroll" data-image-src="images/courses_background.jpg" data-speed="0.8"></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <h2 className="section_title">Visi dan Misi SMP N 1 Atambua</h2>
              <div className="section_subtitle">
              <h3 className="section_title">Visi:</h3>
                <p>"Beriman, Berkarakter, Cerdas, Terampil, dan Mandiri"</p>
              </div>
              <div className="section_subtitle">
              <h3 className="section_title">Misi:</h3>
                <p>1. Menanamkan Keimanan, Ketakwaan Melalui Pengalaman Ajaran Agama <br/> 2. Mengembangkan Organisasi Sekolah Yang Terus Belajar (Learning Organization)<br/>3. Meningkatkan Profesionalisme dan Kompetensi Pendidik dan Tenaga Kependidikan<br/>
                4. Menjalin Kerjasama Yang Harmonis Antar Warga Sekolah Dengan Lembaga Lain Yang Terkait<br/>5. Membina Kemandirian Peserta Didik Melalui Kegiatan Pembiasaan Dan Pengembangan Diri Yang Terencana dan Berkesinambungan<br/>6. Meningkatkan Kesadaran Warga Sekolah Untuk Memelihara Lingkungan Sekolah<br/>7. Meningkatkan Apre... Warga Sekolah Untuk Melestarikan Budaya Lokal    </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>

  );
};

export default PopularCourses;