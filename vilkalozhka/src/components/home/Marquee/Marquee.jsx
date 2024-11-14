

import img1 from "../../../assets/images/marquee/1.png";
import img2 from "../../../assets/images/marquee/2.png";
import img3 from "../../../assets/images/marquee/3.png";
import img4 from "../../../assets/images/marquee/4.png";
import img5 from "../../../assets/images/marquee/5.png";
import img6 from "../../../assets/images/marquee/6.png";
import img7 from "../../../assets/images/marquee/7.png";
import img8 from "../../../assets/images/marquee/8.png";

import "../Marquee/marquee.scss";

const Marquee = () => {
  return (
    <>
      <div className="marquee">
        <div className="top">
        <img src={img1} alt="image" />
        <img src={img2} alt="image" />
        <img src={img3} alt="image" />
        <img src={img4} alt="image" />
        <img src={img1} alt="image" />
        <img src={img2} alt="image" />
        <img src={img3} alt="image" />
        <img src={img4} alt="image" />
        </div>
       
      </div>
      <div className="marquee">
        <div className="bottom">
        <img src={img5} alt="image" />
        <img src={img6} alt="image" />
        <img src={img7} alt="image" />
        <img src={img8} alt="image" />
        <img src={img5} alt="image" />
        <img src={img6} alt="image" />
        <img src={img7} alt="image" />
        <img src={img8} alt="image" />
        </div>
      </div>
    </>
  );
};
export default Marquee;
