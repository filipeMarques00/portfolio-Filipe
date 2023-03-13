import Avatar from "../images/filipe.jpg"
import '../styles/components/sidebar.sass';
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

const Bar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Filipe" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href="https://drive.google.com/drive/folders/1B3MiCKxf-Z_SzWORjzfCpzAYHPlTVJgi?usp=sharing" className="btn">Download Curriculo</a>
    </aside>
  );
};

export default Bar