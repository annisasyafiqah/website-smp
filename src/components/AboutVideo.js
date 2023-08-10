import React from 'react';
import "../style/main.css";
import "../style/responsive.css";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const AboutVideo = () => {
  return (

    <div className="card feature mb-3">
      <div className="card-body feature_background" style={{ backgroundImage: 'url(images/Upacara.jpg)' }}></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <h2 className="section_title">Identitas SMP Negeri 1 Atambua</h2>
              <div className="section_subtitle">
                <p>
                  Informasi umum mengenai SMP Negeri 1 Atambua. Informasi lebih lengkap dapat dilihat pada laman <a href="https://dapo.kemdikbud.go.id/sekolah/BF381B07FADFCB7BE6CD">dapo.kemdikbud.go.id</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row feature_row">
          {/* Feature Content */}
          <div className="col-lg-6 feature_col">
              {/* Accordions */}
              <MDBAccordion className="border mt-5" borderless initialActive={1}>
                <MDBAccordionItem collapseId={1} headerTitle='Nama Sekolah'>
                 Sekolah Menengah Pertama Negeri 1 Atambua
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle='NPSN'>
                50301397
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle='Akreditasi'>
                  Akreditasi A
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={4} headerTitle='SK Pendirian Sekolah'>
                1089/S.K/B.III/65/1966
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={5} headerTitle='Alamat'>
                Jl. Adi Sucipto, Atambua, Belu, East Nusa Tenggara 85711, Manumutin, Kec. Kota Atambua, Kabupaten Belu, Nusa Tenggara Tim.
                </MDBAccordionItem>
              </MDBAccordion>
          </div>

          {/* Feature Video */}
          <div className="col-lg-6 feature_col">
            <div className="feature_video d-flex flex-column align-items-center justify-content-center pt-5">
            <iframe
              className="responsive-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lccAIaEBwiE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVideo;
