import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import "bootstrap";
import logo from "../../images/logoo.png";
import works from "../../images/icon/works.png";
import jobs from "../../images/icon/jobs.png";
import car from "../../images/icon/car.png";
import hous from "../../images/icon/house_line.png";
import mouse from "../../images/icon/mouse.png";
import shirt from "../../images/icon/t_shirt.png";
import coffee from "../../images/icon/coffee.png";
import ring from "../../images/icon/ring.png";
import pazle from "../../images/icon/pazle.png";
import card from "../../images/ph2.png";
import card_plas from "../../images/icon/plas_to.png";
import card_h from "../../images/icon/h_to.png";
import "./style.css";
<<<<<<< HEAD
import Card from "../Card/card";
import Nav2 from "../Nav2/nav2";
import Menu from "../menu/menu";
=======
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
//import "./iconstyle.css";
>>>>>>> 2f20cd298fdb9b058225ce5d1bc7e1888d957e53

const HomePage = () => {
  const dispatch = useDispatch();
  //  const {list} = useSelector(state => state.adv);
  const { list } = useTypedSelector((store) => store.adv);
  const { AdvAll } = useActions();
  useEffect(() => {
    try {
      AdvAll();
    }
    catch (error) {
      console.log("Server error global");
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Головна</title>
      </Helmet>

      <div className="container active">
        <div className="row">
          <div className="col-3 rounded-3 border border-warning">
            <Menu/>            
          </div>
          <div className="col-9">
            <div className="row">
              <div className="container">
                <form className="d-flex">
                  <input
                    className="form-control me-2 border-warning"
                    type="search"
                    placeholder="Пошук"
                    aria-label="Пошук"
                  />
                </form>
                <div>
                  <a href="/register">
                    <img className="baner" src={logo} alt="baner"></img>
                  </a>
                  <div className="text_karesel">VIP-оголошення</div>
<<<<<<< HEAD
                  <Card />
=======
                  <div className="row">
                    {
                      list.map((adv: any, index: any) => {
                        return (
                          <div className="card col-4">
                            <div className="row">
                              <img className="card-image" src={"https://localhost:44334/images/" + adv.image} />
                              {/* <img src={card} className="card-img-top" alt="photo" /> */}
                              <div className="card-body col">
                              </div>
                              <div className="row">
                                <div className=" col-9">
                                  <h5 className="card-title">{adv.name}</h5>
                                  <p className="card-text">{adv.description}</p>
                                  <p className="card-text2">{adv.price}</p>
                                </div>
                                <div className=" col-3 ">
                                  <a href="#" className="btn " >
                                    <img src={card_plas} alt="+"></img>
                                  </a>
                                  <a href="#" className="btn ">
                                    <img src={card_h} alt="like"></img>
                                  </a></div></div>
                            </div>
                          </div>

                        );
                      })
                    }
                  </div>
>>>>>>> 2f20cd298fdb9b058225ce5d1bc7e1888d957e53
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Nav2 />
            <div>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
