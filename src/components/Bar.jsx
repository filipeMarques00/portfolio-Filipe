import Avatar from "../images/filipe.jpg"
import '../styles/components/sidebar.sass';
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

const Bar = () => {
  return (
    <aside id="sidebar">
    <div class="container">
      <div class="box">
        <div class="imgBox">
          <img
            src={Avatar}
            alt=""
          />
        </div>
        <div class="content">
          <h2>
            Filipe<br />
            <span>Desenvolvedor</span>
          </h2>
        </div>
      </div>
      <SocialNetworks/>
        <InformationContainer/>
        <a href="https://drive.google.com/drive/folders/1B3MiCKxf-Z_SzWORjzfCpzAYHPlTVJgi?usp=sharing" className="btn">Download Curriculo</a>
    </div>
    </aside>
  );
};

export default Bar