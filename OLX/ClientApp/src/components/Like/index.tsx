import { Helmet } from "react-helmet";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import Menu from "../menu/menu";
import './style.css'
import card_plas from "../../images/icon/plas_to.png";
import card_h from "../../images/icon/h_add.png";
import noImage from "../../images/icon/Frame.png";
import Search from "../Search/search";

const LoginPage: React.FC = () => {
    const { likeList } = useTypedSelector((store) => store.like);
    const [active, setActive] = useState(true);
    const { CartAll, CartDelete } = useActions();
    useEffect(() => {
        try {
            CartAll();
            if (likeList.length == 0) {
                setActive(false);
            }
        } catch (error) {
            console.log("Server error global");
        }
    }, []);

    const deleteFromLike = (id:number) => {
        try {
            CartDelete(id);
        } catch (error) {
            console.log("Server error global");
          }
    }
    return (
        <>
            <Helmet>
                <title>Обрані оголошення</title>
            </Helmet>

            <div className="row">
                <div className="col-3 rounded-3 border-warning pl-5">
                    <Menu />
                </div>
                <div className="col-9">
                    <Search />
                    <div>
                        <p className="title mx-auto mt-5 text-center">Обрані оголошення</p>
                        <div className="mt-3">
                            <code className="text-rec mx-5">Обрані оголошення</code>
                            <code className="text-rec-gray mx-5">Недавно переглянуті</code>
                        </div>
                    </div>
                    <div className="row px-3">
                        { active  ?
                        ( 
                            <div>{
                            likeList.map((adv: any, index: any) => {
                                return (
                                    <div className="card col-4">
                                        <div className="row">
                                            <img className="card-image" role="button" src={"/images/" + adv.image} />
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
                                                            <img src={card_h} alt="like" onClick={() => deleteFromLike(adv.id)}></img>
                                                        </a></div></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        </div>) 
                        : 
                        (
                            <div className="text-center mt-5">
                                <h1 className="text-nonimage mt-5">Немає обраних оголошень</h1>
                                <img src={noImage}></img>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>

        </>
    );
};
export default LoginPage;
