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
import line from "../../images/icon/line_menu.png";
import "./menu.css";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useEffect, useState } from "react";


const Menu = (updateData: any) => {
  const { categories, subcategories } = useTypedSelector((store) => store.category);
  const [active, setActive] = useState(null);
  const { CategoriesAll, Subcategories } = useActions();
  useEffect(() => {
    try {
      CategoriesAll();
    } catch (error) {
      console.log("Server error global");
    }
  }, []);

  const getSubcategoriesById = (id: number, title: string) => {
    try {
      updateData.updateData(id, title);
    } catch (error) {
      console.log("Server error global");
    }
  }

  return (
    <>
      <div className="accordion filter" id="accordionExample">
        <div className="" id="categories">
          <h2 className="accordion-header" id="headingOne">
            <div className="row p-4">
              <div className="col-9">
                <a
                  className="text-menu ext-decoration-none text-reset"
                >
                  Категорії
                </a>
              </div>
              <div className="col-2 text-center">
                <a type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  <img src={line}></img>
                </a>
              </div>
            </div>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="nav flex-column px-3">
                {
                  categories.map((category: any, index: any) => {
                    return (
                      <li key={index} className="nav-item">
                        <a
                          aria-current="page"
                          // onClick={() => getSubcategoriesById(category.id)}
                          href={`#${category.title}`}
                          className={`kategory nav-link ${active == category.title && 'kategory active'}`}
                          onClick={() => { setActive(category.title); getSubcategoriesById(category.id, category.title); }}
                        >
                          <img src={"/images/" + category.image} className="icon-menu"></img>
                          {category.title}
                        </a>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="accordion-header" id="headingTwo">
            <div className="row p-4">
              <div className="col-9">
                <a
                  className="text-menu ext-decoration-none text-reset"
                >
                  Фільтр
                </a>
              </div>
              <div className="col-2 text-center">
                <a type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo">
                  <img src={line}></img>
                </a>
              </div>
            </div>
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
        <div className="">
          <h2 className="accordion-header" id="headingThree">
            <div className="row p-4">
              <div className="col-9">
                <a
                  className="text-menu ext-decoration-none text-reset"
                >
                  Обране
                </a>
              </div>
              <div className="col-2 text-center">
                <a type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree">
                  <img src={line}></img>
                </a>
              </div>
            </div>
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
        <div className="">
          <h2 className="accordion-header" id="headingFour">
            <div className="row p-4">
              <div className="col-9">
                <a
                  className="text-menu ext-decoration-none text-reset"
                >
                  Стан
                </a>
              </div>
              <div className="col-2 text-center">
                <a type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour">
                  <img src={line}></img>
                </a>
              </div>
            </div>
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
        <div className="">
          <h2 className="accordion-header" id="headingFive">
            <div className="row p-4">
              <div className="col-9">
                <a
                  className="text-menu ext-decoration-none text-reset"
                >
                  Колір
                </a>
              </div>
              <div className="col-2 text-center">
                <a type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive">
                  <img src={line}></img>
                </a>
              </div>
            </div>
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

