import "./footer.css";
import inst from '../../../images/icon/inst.png';
import fb from '../../../images/icon/fb.png';
import app_store from '../../../images/icon/google_play.png';
import google_play from '../../../images/icon/app_store.png';


const DefaultFooter = () => {
  return (

    <footer className="text-center text-lg-start text-muted footer-container">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4">
              <h6 className="footer-company">
                @all.in.ua
              </h6>
              <p className="footer-name">
                Одяг, взуття, аксесуари за доступною ціною. Всі права захищені.
              </p>  
              <p>
                  <img className="footer-logo" src={app_store}></img>
                  <img className="footer-logo" src={google_play}></img>
              </p>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              <p>
                <a href="#!" className="footer-ref">Політика конфіденційності</a>
              </p>
              <p>
                <a href="#!" className="footer-ref">Договір-оферта</a>
              </p>
              <p>
                <a href="#!" className="footer-ref">Контакти</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              <h6 className="footer-ref">
                Ми в соц. мережах
                <p>
                  <a href="#!"><img src={fb}></img></a>
                  <a href="#!"><img src={inst}></img></a>
                </p>
              </h6>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default DefaultFooter;
