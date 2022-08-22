import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import "bootstrap";
import logo from "../../images/logoo.png";
import card_plas from "../../images/icon/plas_to.png";
import card_h from "../../images/icon/h_to.png";
import left from "../../images/icon/left.png";
import right from "../../images/icon/right.png";
import girl from "../../images/girl.png";
import box from "../../images/box.png";
import union from "../../images/Union.png";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Menu from "../menu/menu";
import Search from "../Search/search";
//import "./iconstyle.css";

const HomePage = () => {
  //  const {list} = useSelector(state => state.adv);
  const [advDetails, setAdvDetails] = useState<any>(null);
  const { list } = useTypedSelector((store) => store.adv);
  const { vipList } = useTypedSelector((store) => store.adv);
  const { AdvAll, VipAdv, VipAdvBack, CartAdd} = useActions();
  useEffect(() => {
    try {
      AdvAll();
      VipAdv();
    } catch (error) {
      console.log("Server error global");
    }
  }, []);

  const addToLike = (id: number) => {
    try {
      CartAdd(id);
    } catch (error) {
      console.log("Server error global");
    }
  };
  const onNextVipHandler = () => {
    try {
      VipAdv();
    } catch (error) {
      console.log("Server error global");
    }
  };
  const onBackVipHandler = () => {
    try {
      VipAdvBack();
    } catch (error) {
      console.log("Server error global");
    }
  }
  const onShowDetailsHandler = (adv: any) => {
    setAdvDetails(adv)
    console.log(adv);
  }

  return (
    <>
      <Helmet>
        <title>Головна</title>
      </Helmet>

      <div className="">
        <div className="row mx-2">
          <div className="col-3 rounded-3 border-warning pl-5">
            <Menu />
          </div>
          <div className="col-9">
            <div className="row">
              <div className="">
                <Search />
                <div>
                  {advDetails ? (
                    <div>
                      <a className="ml-auto p-2" role="button" onClick={() => setAdvDetails(null)}><img src={left}></img></a>
                      <div className="detail col-lg-11 mx-auto">
                        <div className="row">
                          <div className="col-6 detail-imageCard">
                            <img className="detail-image" src={"/images/" + advDetails.image} alt="noImage" />
                          </div>
                          <div className="col-6 mx-4 my-4">
                            <div className="row">
                              <div className="col-10">
                                <p className="detail-title mb-0">{advDetails.name}</p>
                                <p className="detail-text mb-5">{advDetails.description}</p>
                                <p className="detail-text2 mb-5">{advDetails.price} грн</p>
                                <p className="detail-title mb-1">Опис</p>
                                <div className="detail-tag text-center mb-2">
                                  <p className="detail-tag-text m-1">Жінкам</p>
                                </div>
                                <p className="detail-tag-desc mt-3 mb-5">{advDetails.description}</p>
                              </div>
                              <div className="col-2">
                                <a href="#" className="btn " >
                                  <img src={card_plas} alt="+"></img>
                                </a>
                                <a href="#" className="btn">
                                  <img src={card_h} alt="like" onClick={() => addToLike(advDetails.id)}></img>
                                </a>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className="row mt-5 mx-3">
                          <div className="col-6 row">
                            <div className="col-3">
                              <img className="detail-imageProfil" src={girl}></img>
                            </div>
                            <div className="col-9">
                              <p className="detail-profileText mb-1">Maria_ry</p>
                              <p className="detail-profileText-dataReg">На all in з 2019 р.</p>
                            </div>
                          </div>
                          <div className="col-6"></div>
                        </div>

                        <div className="row mt-5 mx-3">
                          <div className="col-6">
                            <p className="detail-staticText">Про користувача</p>
                            <div className="row">
                              <div className="col-2">
                                <img src={union}></img>
                              </div>
                              <div className="col-10">
                                <p className="detail-aboutProfile">2 позитивних відгуки</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-2">
                                <img src={box}></img>
                              </div>
                              <div className="col-10">
                                <p className="detail-aboutProfile">3 успішних доставки</p>
                              </div>
                            </div>
                            <a className="detail-text3 text-decoration-none">Усі оголошення автора</a>
                            <br />
                            <div className="mt-3">
                              <button className="detail-button">Телефон</button>
                              <button className="detail-button mx-4">Повідомлення</button>
                            </div>
                          </div>
                          <div className="col-6">
                            <p className="detail-staticText">Місцезнаходження</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <a>
                        <img className="baner" src={logo} alt="baner"></img>
                      </a>
                      <div className="my-4 d-flex">
                        <code className="text_karesel">VIP-оголошення</code>
                        <a className="ml-auto p-2" role="button" onClick={onBackVipHandler}><img src={left}></img></a>
                        <a className="ml-auto p-2" role="button" onClick={onNextVipHandler}><img src={right}></img></a>
                      </div>


                      <div className="row">
                        {
                          vipList.map((adv: any, index: any) => {
                            return (
                              <div className="card-vip col-2">
                                <div className="row">
                                  <img className="card-image" role="button" onClick={() => onShowDetailsHandler(adv)} src={"/images/" + adv.image} />
                                  {/* <img src={card} className="card-img-top" alt="photo" /> */}
                                  <div className="card-body col">
                                    <div className="row">
                                      <div className="col-9">
                                        <h5 className="card-title-vip">{adv.name}</h5>
                                        <p className="card-text-vip">{adv.description}</p>
                                        <p className="card-text2-vip">{adv.price} грн</p>
                                      </div>
                                      <div className=" col-3 ">
                                        <a href="#" className="btn " >
                                          <img src={card_plas} alt="+"></img>
                                        </a>
                                        <a className="btn">
                                          <img src={card_h} alt="like" onClick={() => addToLike(adv.id)}></img>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            );
                          })
                        }
                      </div>
                    </div>
                  )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <code className="text-rec mx-5">Рекомендоване</code>
          <code className="text-rec-gray mx-5">Нове</code>
          <code className="text-rec-gray mx-5">Вживане</code>
        </div>

        <div className="row px-3">
          {
            list.map((adv: any, index: any) => {
              return (
                <div className="card col-4">
                  <div className="row">
                    <img className="card-image" role="button" onClick={() => onShowDetailsHandler(adv)} src={"/images/" + adv.image} />
                    {/* <img src={card} className="card-img-top" alt="photo" /> */}
                    <div className="card-body col">
                      <div className="row">
                        <div className="col-9">
                          <h5 className="card-title">{adv.name}</h5>
                          <p className="card-text">{adv.description}</p>
                          <p className="card-text2">{adv.price} грн</p>
                        </div>
                        <div className=" col-3 ">
                          <a href="#" className="btn " >
                            <img src={card_plas} alt="+"></img>
                          </a>
                          <a href="#" className="btn ">
                            <img src={card_h} alt="like" onClick={() => addToLike(adv.id)}></img>
                          </a></div></div>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
};
export default HomePage;
