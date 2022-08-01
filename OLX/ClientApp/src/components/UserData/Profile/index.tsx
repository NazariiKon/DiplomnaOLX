import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import EclipseWidget from '../../common/eclipse';
import './index.css'

const ProfilePage = () => {
  const { GetProfileData } = useActions();
  const { profile: { email, photo}, loading } = useTypedSelector(store => store.profile);
  useEffect(() => {
    GetProfileData();
  }, [GetProfileData]);

  return (
    <section>
      <Helmet>
        <title>Профіль</title>
      </Helmet>
      <div className="container py-5 ">
        <h2 className="text-center pb-5">Мій профіль</h2>
        {loading && <EclipseWidget />}
        {!loading && (
          <div>
            <img
              src={
                !photo.endsWith("image/300_")
                  ? `https://vovalohika.tk/images/300_${photo}`
                  : "https://mdbootstrap.com/img/Photos/new-templates/bootstrap-chat/ava3.png"
              }
              alt="avatar"
              className="img-fluid"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfilePage;
