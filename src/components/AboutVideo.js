import React from 'react';
import "../style/main.css";
import "../style/responsive.css";


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
            <div className="feature_content">
              {/* Accordions */}
              <div class="accordion accordion-borderless pt-5" id="accordionFlushExampleX">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOneX">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="flush-collapseOneX" aria-expanded="true" aria-controls="flush-collapseOneX">
                        Nama
                    </button>
                    </h2>
                    <div id="flush-collapseOneX" class="accordion-collapse collapse show"
                    aria-labelledby="flush-headingOneX" data-mdb-parent="accordionFlushExampleX">
                    <div class="accordion-body">
                        Sekolah Menengah Pertama Negeri 1 Atambua
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwoX">
                    <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#flush-collapseTwoX" aria-expanded="false" aria-controls="flush-collapseTwoX">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="flush-collapseTwoX" class="accordion-collapse collapse" aria-labelledby="flush-headingTwoX"
                    data-mdb-parent="#accordionFlushExampleX">
                    <div class="accordion-body">
                        Placeholder content for this accordion, which is intended to demonstrate the
                        <code>.accordion-flush</code> class. This is the second item's accordion body.
                        Let's imagine this being filled with some actual content.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThreeX">
                    <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#flush-collapseThreeX" aria-expanded="false" aria-controls="flush-collapseThreeX">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="flush-collapseThreeX" class="accordion-collapse collapse" aria-labelledby="flush-headingThreeX"
                    data-mdb-parent="#accordionFlushExampleX">
                    <div class="accordion-body">
                        Placeholder content for this accordion, which is intended to demonstrate the
                        <code>.accordion-flush</code> class. This is the third item's accordion body.
                        Nothing more exciting happening here in terms of content, but just filling up
                        the space to make it look, at least at first glance, a bit more representative
                        of how this would look in a real-world application.
                    </div>
                    </div>
                </div>
                </div>
            </div>
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
