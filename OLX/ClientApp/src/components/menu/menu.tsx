import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import "bootstrap";
import works from "../../images/icon/works.png";
import jobs from "../../images/icon/jobs.png";
import car from "../../images/icon/car.png";
import hous from "../../images/icon/house_line.png";
import mouse from "../../images/icon/mouse.png";
import shirt from "../../images/icon/t_shirt.png";
import coffee from "../../images/icon/coffee.png";
import ring from "../../images/icon/ring.png";
import pazle from "../../images/icon/pazle.png";
import "./menu.css";


const Menu = () => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button text-menu"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Категорії
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="nav flex-column ">
                <li className="nav-item">
                  <a
                    className="nav-link active kategory "
                    aria-current="page"
                    href="#"
                  >
                    <img src={works} className="icon-menu"></img>
                    Робота
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link kategory "
                    aria-current="page"
                    href="#"
                  >
                    <img src={jobs} className="icon-menu"></img>
                    Тварини
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link kategory" href="#">
                    <img src={car} className="icon-menu"></img>
                    Авто
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link kategory " href="#">
                    <img src={hous} className="icon-menu"></img>
                    Нерухомість
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link kategory" href="#">
                    <img src={mouse} className="icon-menu"></img>
                    Електроніка
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link kategory" href="#">
                    <img src={shirt} className="icon-menu"></img>
                    Мода та стиль
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link kategory" href="#">
                    <img src={coffee} className="icon-menu"></img>
                    Хоббі, відпочинок та спорт
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link kategory" href="#">
                    <img src={ring} className="icon-menu"></img>
                    Бізнес та послуги
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link kategory" href="#">
                    <img src={pazle} className="icon-menu"></img>
                    Дитячий світ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed text-menu"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Фільтр
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Від
              <input
                className="form-control "
                type="text"
                placeholder="10 грн"
                aria-label="10 грн"
              ></input>
              до
              <input
                className="form-control"
                type="text"
                placeholder="100 грн"
                aria-label="100 грн"
              ></input>
              <input
                type="range"
                className="form-range"
                min="0"
                max="5"
                id="customRange2"
              ></input>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed text-menu"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Обране
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">body_content</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed text-menu"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Стан
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />{" "}
                Нове
              </div>

              <div>
                <input
                  className="form-check-input "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />{" "}
                Вживане
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed text-menu"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Колір
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />{" "}
                Білий
              </div>

              <div>
                <input
                  className="form-check-input "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />{" "}
                Чорний
              </div>
              <div>
                <input
                  className="form-check-input "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />{" "}
                Коричневий
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;