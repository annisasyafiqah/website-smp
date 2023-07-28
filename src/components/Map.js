import React, { useState, useMemo } from 'react';
import "../style/main.css";
import "../style/responsive.css";
const Lokasi = () => {
  const [isActive, setIsActive] = useState(true);

  const classes = useMemo(() => `${!isActive ? 'closed' : ''} card-body px-0`, [isActive]);

  return (
    <div className='container'>
      <section className='mx-auto my-5'>
        <div className='card map-card'>
          <div
            id='map-container-google-1'
            className='z-depth-1-half map-container'
            style={{ height: '500px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.702565905708!2d124.89268011092882!3d-9.090836593891062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cffbe5b2cdc6b0d%3A0xe39b261358134b30!2sSMP%20Negeri%201%20Atambua!5e0!3m2!1sen!2sid!4v1690516080587!5m2!1sen!2sid"
              width="1090"
              height="350"
              style={{ border: 0, display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh", }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Embed"
            ></iframe>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Lokasi;