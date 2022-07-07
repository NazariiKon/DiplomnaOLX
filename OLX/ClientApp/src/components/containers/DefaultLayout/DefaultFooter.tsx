import "./footer.css";
const DefaultFooter = () => {
  return (

    <footer className="text-center text-lg-start text-muted footer-container">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mb-4">
              <h6 className="footer-company">
                @all.in.ua
              </h6>
              <p className="footer-name">
                Одяг, взуття, аксесуари за доступною ціною. Всі права захищені.
              </p>
              <p>
                  <a href="#!"><img src="src\components\containers\DefaultLayout\Img\app_store.png"></img></a>
                  <a href="#!"><img src="src\components\containers\DefaultLayout\Img\google_play.png"></img></a>
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
                  <a href="#!"><img src="src\components\containers\DefaultLayout\Img\inst.png"></img></a>
                  <a href="#!"><img src="src\components\containers\DefaultLayout\Img\fb.png"></img></a>
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
