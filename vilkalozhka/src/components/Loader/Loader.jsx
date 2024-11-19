import "./Loader.scss";
import { Loader } from "react-loaders";

const Preloader = () => {
  return (
    <div className="loader-layout">
      <Loader innerClassName="loader" type="line-scale-pulse-out" />
    </div>
  );
};

export default Preloader;
