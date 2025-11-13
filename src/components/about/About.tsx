import "./about.css";
import Award from "../../img/award.png";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg">x</div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/1540983/pexels-photo-1540983.jpeg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ex
          accusamus repudiandae, alias rerum est dolorum repellat sit tempora
          corrupti qui minus velit, nemo et voluptate perspiciatis, laboriosam
          assumenda. Aliquid!
        </p>

        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          dignissimos, vero voluptate harum quibusdam aliquam mollitia dolor
          nemo qui possimus aliquid facere labore vitae consequuntur modi quos
          quod sequi nulla?
        </p>

        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">The Award Title</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto molestiae adipisci magnam possimus, aperiam tempora
              nobis! Rerum dolorem laborum eaque reiciendis eveniet laudantium
              omnis porro tempora, illo in ipsum iure!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
