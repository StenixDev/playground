import "./intro.css";

import Profile from "../../img/profile.png";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro text-2xl font-bold">Hello my name is</h2>

          <h2 className="i-name font-semibold">Stenix xCode</h2>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Webmaster</div>
              <div className="i-title-item">AI Coder</div>
              <div className="i-title-item">RAG</div>
            </div>
          </div>

          <div className="i-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            explicabo, sed molestiae quidem totam id laborum quaerat blanditiis
            praesentium a, dolor inventore exercitationem accusamus aut dicta
            asperiores placeat vel iusto.
          </div>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Profile} alt="" className="i-img" />
      </div>
    </div>
  );
}
export default Intro;
