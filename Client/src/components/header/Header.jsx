import "./Header.css";
import headerPic from "../../assets/HeaderPic.png";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Crystine Daily</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={headerPic} alt="Header Picture" />
    </div>
  );
}
