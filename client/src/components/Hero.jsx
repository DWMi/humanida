import { HiOutlineBriefcase } from "react-icons/hi2";
import "./styles/hero.css";

const Hero = (props) => {
  return (
    <div className="heroCon">
      <div className="textCon">
        <h1 style={{ padding: 10 }}>{props.titel}</h1>
        <p style={{ padding: 10 }}>{props.text}</p>
      </div>
      {props.animate ? (
        <HiOutlineBriefcase id="icon" color="black" size={150} />
      ) : undefined}
    </div>
  );
};

export default Hero;
