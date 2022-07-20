import { Helmet } from "react-helmet";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useEffect } from "react";
import Menu from "../menu/menu";
import './style.css'
import card_plas from "../../images/icon/plas_to.png";
import card_h from "../../images/icon/h_to.png";

const LoginPage: React.FC = () => {
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
                    <div className="col-xxl-4">
                        <form className="d-flex">
                            <input
                                className="form-control me-2 border-warning"
                                type="search"
                                placeholder="Пошук"
                                aria-label="Пошук"
                            />
                        </form>
                    </div>
                    <div>
                        <p className="title mx-auto mt-5">Обрані оголошення</p>
                        <div className="mt-5">
                            <code className="text-rec mx-5">Обрані оголошення</code>
                            <code className="text-rec-gray mx-5">Недавно переглянуті</code>
                        </div>
                    </div>

                    <div className="row px-3">
                    </div>
                </div>
            </div>

        </>
    );
};
export default LoginPage;
