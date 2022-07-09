import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Головна</title>
      </Helmet>

      <div className="container">
        <div className="row">
          <div className="col-3 rounded-3 border border-warning">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Категорії
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <ul className="nav flex-column">
                    <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                        >
                          Робота
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                        >
                          Тварини
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Авто
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Нерухомість
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Електроніка
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Мода і стиль
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Хоббі, відпочинок і спорт
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Бізнес та послуги
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Дитячий світ
                        </a>
                      </li>
                    </ul>

                    {/* <Link to="/">Робота</Link>
                  <Link to="/">Тварини</Link>
                  <Link to="/">Авто</Link>
                  <Link to="/">Нерухомість</Link>
                  <Link to="/">Електроніка</Link>
                  <Link to="/">Мода і стиль</Link>
                  <Link to="/">Хоббі, відпочинок і спорт</Link>
                  <Link to="/">Бізнес та послуги</Link>
                  <Link to="/">Дитячий світ</Link> */}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Фільтр
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">Підгрупи розділу</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Обране
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">Підгрупи розділу</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFour"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Стан
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div className="accordion-body">Підгрупи розділу</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFive"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    Колір
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div className="accordion-body">Підгрупи розділу</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <img
              src="src\components\Home\Img\baner.png"
              className="img-fluid rounded-3"
              alt="baner"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
