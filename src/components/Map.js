import React, { useState, useMemo } from 'react';
import "../style/map.css"
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className="map">
    <div className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title_container text-center">
              <h2 className="section_title">Lokasi Sekolah</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MDBRow className='w-100 justify-content-center mt-0'>
      <MDBCol lg='4' className='my-4'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15758.810030102739!2d124.8952604!3d-9.0908419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cffbe5b2cdc6b0d%3A0xe39b261358134b30!2sSMP%20Negeri%201%20Atambua!5e0!3m2!1sen!2sid!4v1690753922513!5m2!1sen!2sid'
          className='w-100'
          height='400'
          loading='lazy'
        ></iframe>
      </MDBCol>
      <MDBCol lg='6' className='my-3 d-flex align-items-center'>
        <div>
          <h6>Detail Lokasi SMP Negeri 1 Atambua</h6>
          <p>
          Jl. Adi Sucipto, Atambua, Belu, Nusa Tenggara Timur 85711, Manumutin, Kecamatan Kota Atambua, Kabupaten Belu, Nusa Tenggara Timur.
          </p>
          <p>
          Lokasi tersebut terletak di kota Atambua, Kabupaten Belu, Provinsi Nusa Tenggara Timur, Indonesia.
          </p>
          <p>
          Referensi lokasi: <br/>

          - Berhadapan dengan SMA Negeri 1 Atambua<br/>
          - Berbatasan langsung dengan SDI Tenubot
          </p>
        </div>
      </MDBCol>
    </MDBRow>

  </div>
  );
}