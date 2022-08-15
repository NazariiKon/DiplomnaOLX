import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import EclipseWidget from '../../common/eclipse';
import Search from '../../Search/search';
import card_plas from "../../../images/icon/plas_to.png";
import card_h from "../../../images/icon/h_to.png";
import './index.css'

const ProfilePage = () => {
  const { GetProfileData } = useActions();
  const { vipList } = useTypedSelector((store) => store.adv);
  const { VipAdv } = useActions();
  useEffect(() => {
    try {
      VipAdv();
    } catch (error) {
      console.log("Server error global");
    }
  }, []);
  const { profile: { email, photo }, loading } = useTypedSelector(store => store.profile);
  useEffect(() => {
    GetProfileData();
  }, [GetProfileData]);

  return (
    <div>
      <Helmet>
        <title>Профіль</title>
      </Helmet>

      <div className="row">
        <div className="">
          <Search />
        </div>
      </div>
      
      <div className="container py-5 ">
        {loading && <EclipseWidget />}
        {!loading && (
          <>
            <div className="row">
              <div className="col-3">
                <img src={"https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png"}
                  className="rounded-circle user" alt="user">
                </img>

              </div>
              <div className="col-9">
                <div className="inf">
                  <p className="user_name">{email}</p>
                  <div className="user_inf">
                    <p>125 підписників</p>
                    <p>Був(-ла) в мережі 12 хв. тому</p>
                  </div>
                </div>

              </div>
            </div><div className="row">
              <div className="mt-5">
                <code className="text-rec mx-5">Оголошення</code>
                <code className="text-rec-gray mx-5">Відгуки</code>
                <code className="text-rec-gray mx-5">Підписки</code>
              </div>
            </div>
            <div className="row mt-5 mx-4">
                        {
                          vipList.map((adv: any, index: any) => {
                            return (
                              <div className="card-vip col-2 mx-3">
                                <div className="row">
                                  <img className="card-image" role="button" src={"/images/" + adv.image} />
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
                                        <a href="#" className="btn ">
                                          <img src={card_h} alt="like"></img>
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
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
