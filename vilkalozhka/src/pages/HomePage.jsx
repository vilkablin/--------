import Intro from "../components/home/Intro/Intro";
import RecepiesSlider from "../components/home/RecepiesSlider/RecepiesSlider";
import Marquee from "../components/home/Marquee/Marquee";
import Faq from "../components/home/FAQ/Faq";

const HomePage = () => {
  return (
    <>
      <Intro />
      <RecepiesSlider/>
      <Marquee/>
      <Faq/>
    </>
  );
};

export default HomePage;
