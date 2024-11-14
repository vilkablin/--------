import Container from "../../Сontainer/Сontainer";
import { Link } from "react-router-dom";

import img1 from "../../../assets/images/intro/titleImage.png";
import img2 from "../../../assets/images/intro/chef.png";
import img3 from '../../../assets/images/intro/rightImg.png';
import img5 from '../../../assets/images/intro/right_1240.png';
import img4 from '../../../assets/images/intro/orangeBlock.png';

import './Intro.scss'

const Intro = () => {
  return (
    <Container>
      <div className="intro__inner">
      
          <div className="intro__title">
            <div className="title__top">
              <img src={img1} alt="titleImage" />
              <h1>Вкусная жизнь</h1>
            </div>
            <h1 className="title__bottom">
              начинается <span>здесь</span>
            </h1>
          </div>
          <div className="left__block">
            <p>Сезон овощей</p>
            <button>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.63005 2.67479C1.61325 2.31749 1.73904 1.96814 1.97977 1.70357C2.2205 1.439 2.55645 1.28088 2.91375 1.26397L14.3474 0.724525C14.7047 0.707722 15.0541 0.833516 15.3186 1.07425C15.5832 1.31498 15.7413 1.65093 15.7582 2.00823L16.2977 13.4419C16.3082 13.7954 16.1794 14.139 15.9391 14.3985C15.6988 14.6581 15.3662 14.8128 15.0129 14.8295C14.6596 14.8462 14.3138 14.7234 14.0502 14.4876C13.7865 14.2519 13.6259 13.922 13.6031 13.569L13.2172 5.38823L2.69881 16.9482C2.45803 17.2129 2.12199 17.371 1.76462 17.3879C1.40725 17.4047 1.05782 17.2789 0.7932 17.0382C0.528578 16.7974 0.370442 16.4613 0.353582 16.104C0.336721 15.7466 0.462517 15.3972 0.703294 15.1325L11.2217 3.57253L3.04088 3.95849C2.68358 3.9753 2.33423 3.8495 2.06966 3.60878C1.80509 3.36805 1.64696 3.03209 1.63005 2.67479Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="recepies__block">
            <span>500</span>
            <p>рецептов</p>
          </div>
          <div className="intro__categories">
            <Link to="/">Обеды</Link>
            <Link to="/">Веган</Link>
            <Link to="/">Завтраки</Link>
            <Link to="/">Закуски</Link>
            <Link to="/">Соусы</Link>
            <Link to="/">Салаты</Link>
            <Link to="/">Гарниры</Link>
            <Link to="/">Десерты</Link>
          </div>
     
          <div className="intro__author">
            <img src={img2} alt="chef" />
            <Link to="/">
              <p>Стать автором </p>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.792307 1.59138C0.776316 1.36713 0.850046 1.14571 0.997283 0.975811C1.14452 0.805912 1.35321 0.701446 1.57745 0.685388L8.75346 0.172589C8.97771 0.156598 9.19913 0.230327 9.36903 0.377564C9.53893 0.524801 9.6434 0.733489 9.65945 0.957736L10.1723 8.13374C10.1842 8.35573 10.1086 8.57355 9.96151 8.74028C9.81447 8.90701 9.60781 9.00932 9.38606 9.02517C9.16432 9.04101 8.94521 8.96913 8.77595 8.825C8.60669 8.68087 8.50081 8.47603 8.48111 8.25459L8.1142 3.12016L1.68088 10.5437C1.53361 10.7136 1.32487 10.8181 1.10058 10.8341C0.876284 10.8502 0.65481 10.7764 0.484877 10.6292C0.314944 10.4819 0.210472 10.2732 0.194444 10.0489C0.178415 9.82457 0.252144 9.6031 0.39941 9.43316L6.83273 2.00962L1.6983 2.37653C1.47405 2.39252 1.25263 2.31879 1.08273 2.17156C0.912832 2.02432 0.808366 1.81563 0.792307 1.59138Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
        <img src={img3} alt="" className="img"/>
        <img src={img5} alt="" className="img_laptop"/>
    
        <div className="bottom__block">
          <img src={img4} alt="" />
        </div>
        </div>
 
    </Container>
  );
};

export default Intro;
