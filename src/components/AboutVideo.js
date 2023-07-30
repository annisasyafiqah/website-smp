import React from 'react';
import "../style/main.css";
import "../style/responsive.css";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const AboutVideo = () => {
  return (

    <div className="card feature">
      <div className="card-body feature_background" style={{ backgroundImage: 'url(images/Upacara.jpg)' }}></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <h2 className="section_title">Identitas SMP Negeri 1 Atambua</h2>
              <div className="section_subtitle">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat,
                  sapien ultrices fermentum congue, quam velit venenatis sem
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row feature_row">
          {/* Feature Content */}
          <div className="col-lg-6 feature_col">
              {/* Accordions */}
              <MDBAccordion className="border mt-5"borderless initialActive={1}>
                <MDBAccordionItem collapseId={1} headerTitle='Nama Sekolah'>
                 Sekolah Menengah Pertama Negeri 1 Atambua
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle='Akreditasi'>
                  Akreditasi A
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle='Alamat'>
                  Jalan adisucipto
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={4} headerTitle='Alamat'>
                  Jalan adisucipto
                </MDBAccordionItem>
              </MDBAccordion>
          </div>

          {/* Feature Video */}
          <div className="col-lg-6 feature_col">
            <div className="feature_video d-flex flex-column align-items-center justify-content-center pt-5">
              {/* Replace the iframe with the YouTube embed code */}
              <iframe
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
