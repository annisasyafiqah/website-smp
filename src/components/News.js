import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBIcon,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import Carousel from 'react-bootstrap/Carousel';
import "../style/main.css";
import "../style/responsive.css";
import Gambar1 from "../images/rapateval.jpg"
import Gambar2 from "../images/rapateval2.jpg"
import Gambar3 from "../images/rapateval3.jpg"
import Gambar4 from "../images/rapateval4.jpg"
import Gambar5 from "../images/rapateval5.jpg"
import Gambar6 from "../images/rapateval6.jpg"
import Gambar7 from "../images/rapateval7.jpg"
import Gambar8 from "../images/mpls.jpg"
import Gambar9 from "../images/mpls2.jpg"
import Gambar10 from "../images/mpls3.jpg"
import Gambar11 from "../images/mpls4.jpg"
import Gambar12 from "../images/mpls5.jpg"
import Gambar13 from "../images/pramuka.jpg"
import Gambar14 from "../images/pramuka1.jpg"
import Gambar15 from "../images/pramuka2.jpg"
import Gambar16 from "../images/pramuka3.jpg"
import Gambar17 from "../images/pramuka4.jpg"
import Gambar18 from "../images/obkt.jpg"
import Gambar19 from "../images/obkt2.jpg"
import Gambar20 from "../images/obkt3.jpg"
import Gambar21 from "../images/obkt4.jpg"
import Gambar22 from "../images/obkt5.jpg"
export default function App() {
  return (
    <MDBContainer className="py-5 mt-5">
      <MDBRow className="gx-5 border-bottom pb-4 mb-5">
        <MDBCol md="6" className="mb-4">
        <Carousel data-bs-theme="dark">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={Gambar1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar6}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar7}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </MDBCol>
        <MDBCol md="6" className="mb-4">
          <span className="badge bg-warning px-2 py-1 shadow-1-strong mb-3">
            Terbaru
          </span> <br/>
          <u> 29.07.2020</u>
          <h4 className="pt-3">
            <strong>Rapat Mengenai Dana Bos Ketenagakerjaan dan Evaluasi Mingguan</strong>
          </h4>
          <p className="text-muted">
          Rapat evaluasi mingguan membahas penggunaan Dana Bos Ketenagakerjaan dan progres sekolah. Melibatkan kepala sekolah, guru, dan staf. Fokus utama pertemuan ini adalah untuk membahas penggunaan dana Bos Ketenagakerjaan secara efisien dan transparan dalam mendukung berbagai program sekolah. Selain itu, rapat evaluasi mingguan ini juga bertujuan untuk mengevaluasi progres dan pencapaian mingguan terhadap target dan tujuan sekolah yang telah ditetapkan.
          </p>
          {/* <MDBBtn className="mt-2">Baca lebih lanjut</MDBBtn> */}
        </MDBCol>
      </MDBRow>
      <MDBRow className="gx-lg-5">
        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
          <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={Gambar8}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Gambar9}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Gambar10}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Gambar11}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Gambar12}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
            <MDBRow className="mb-3">
              <MDBCol col="6">
                <a href="" className="text-info">
                  <MDBIcon fas icon="plane" className="me-1" />
                </a>
              </MDBCol>
              <MDBCol col="6" className="text-end">
                <u> 18.07.2023</u>
              </MDBCol>
            </MDBRow>
            <a href="#!" className="text-dark">
              <h5>Penutupan Masa Pengenalan Lingkungan Sekolah</h5>
              <p>
              SMP Negeri 1 Atambua melaksanakan Masa Pengenalan Lingkungan Sekolah (MPLS) dengan antusiasme tinggi untuk menyambut siswa-siswa baru. MPLS ini bertujuan memberikan pengenalan yang holistik dan menyeluruh tentang sekolah, kurikulum, fasilitas, serta kegiatan ekstrakurikuler yang tersedia. Selain itu, siswa-siswa baru juga dikenalkan dengan nilai-nilai karakter dan etika yang dijunjung tinggi di sekolah ini. SMP Negeri 1 Atambua berkomitmen untuk menciptakan lingkungan inklusif dan mendukung, sehingga siswa-siswa baru dapat tumbuh dan berkembang sebagai individu yang berkualitas dan berintegritas.
              </p>
            </a>
            <hr />
          </div>
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
          <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={Gambar13}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Gambar14}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Gambar15}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Gambar16}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Gambar17}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
            <MDBRow className="mb-3">
              <MDBCol col="6">
                <a href="" className="text-danger">
                  <MDBIcon fas icon="chart-pie" className="me-1" />
                </a>
              </MDBCol>
              <MDBCol col="6" className="text-end">
                <u> 13.05.2023</u>
              </MDBCol>
            </MDBRow>
            <a href="#!" className="text-dark">
              <h5>Upacara Pembukaan Perkemahan Dalam Rangka Pelantikan Kenaikan Tingkat Pada Gudep 01./027 01./028 Di SMPN 1 Atambua.</h5>
              <p>
              Pada SMP Negeri 1 Atambua, suasana semarak tercipta saat pelaksanaan upacara pembukaan perkemahan dalam rangka pelantikan kenaikan tingkat di Gudep 01/027 dan 01/028. Acara ini dipenuhi dengan semangat kebersamaan dan semangat petualangan, di mana para peserta, termasuk anggota pramuka dan siswa, berkumpul dengan penuh antusiasme untuk merayakan momen bersejarah ini. Upacara tersebut menjadi momentum penting dalam perjalanan pramuka dan pendidikan mereka, di mana nilai-nilai kejujuran, kerjasama, dan tanggung jawab semakin ditekankan. SMP Negeri 1 Atambua berkomitmen untuk terus mendukung perkembangan karakter positif dan kreativitas para siswa melalui kegiatan pramuka dan kegiatan lainnya, sehingga mereka dapat menjadi generasi muda yang berintegritas, berwawasan luas, dan siap menghadapi tantangan masa depan.
              </p>
            </a>
            <hr />
            
           
          </div>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-4 mb-lg-0">
          <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={Gambar18}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Gambar19}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Gambar20}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Gambar21}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Gambar22}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
            <MDBRow className="mb-3">
              <MDBCol col="6">
                <a href="" className="text-warning">
                  <MDBIcon fas icon="code" className="me-1" />
                </a>
              </MDBCol>
              <MDBCol col="6" className="text-end">
                <u> 25.05.2023</u>
              </MDBCol>
            </MDBRow>
            <a href="#!" className="text-dark">
              <h5>Penyuluhan Tentang Kenakalan Remaja dari POLRES BELU </h5>
              <p>
              Dalam suasana yang penuh interaktif dan edukatif, narasumber dari POLRES Belu berbagi informasi penting, strategi pencegahan, dan cara menjaga diri dari situasi berbahaya. Penyuluhan ini menjadi momen berharga bagi para siswa-siswi untuk mengembangkan kesadaran dan tanggung jawab sosial, sehingga mereka dapat tumbuh sebagai individu yang bertanggung jawab dan berkontribusi positif bagi masyarakat sekitar. SMP Negeri 1 Atambua mengapresiasi inisiatif POLRES Belu dalam memberikan pembelajaran penting ini dan berkomitmen untuk terus mendukung upaya pencegahan kenakalan remaja dan pembentukan karakter positif di kalangan siswa
              </p>
            </a>
            <hr />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}