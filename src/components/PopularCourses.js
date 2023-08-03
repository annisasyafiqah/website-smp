import React from 'react';
import "../style/main.css"
import Gambar from "../images/Upacara.jpg";
const PopularCourses = () => {
  return (
    <section class="mb-5 mb-lg-10">
      <h3 class="fw-bold text-center mb-5">Visi dan Misi SMP N 1 Atambua</h3>

      <div class="row gx-xl-5">
        <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">

          <div class="card">
            <div class="card-header text-center pt-4 ">
              <p class="text-uppercase">
                <strong>Visi</strong>
              </p>
            </div>
            <div class="card-body">

              <p>"Beriman, Berkarakter, Cerdas, Terampil, dan Mandiri"</p>
            </div>
          </div>

        </div>

        <div class="col-lg-6 col-md-6 mb-4 mb-lg-0">

          <div class="card">
            <div class="card-header text-center pt-4">
              <p class="text-uppercase">
                <strong>Misi</strong>
              </p>
            </div>
            <div class="card-body">
              <p>1. Menanamkan Keimanan, Ketakwaan Melalui Pengalaman Ajaran Agama <br/> 2. Mengembangkan Organisasi Sekolah Yang Terus Belajar (Learning Organization)<br/>3. Meningkatkan Profesionalisme dan Kompetensi Pendidik dan Tenaga Kependidikan<br/>4. Menjalin Kerjasama Yang Harmonis Antar Warga Sekolah Dengan Lembaga Lain Yang Terkait<br/>5. Membina Kemandirian Peserta Didik Melalui Kegiatan Pembiasaan Dan Pengembangan Diri Yang Terencana dan Berkesinambungan<br/>6. Meningkatkan Kesadaran Warga Sekolah Untuk Memelihara Lingkungan Sekolah<br/>7. Meningkatkan Apre... Warga Sekolah Untuk Melestarikan Budaya Lokal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;