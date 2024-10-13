import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./button.css";

const Button = ({ text, type, width }) => {
  return (
    <AwesomeButton className={`rounded-full ${width && "w-full"}`} type={type}>
      {text}
    </AwesomeButton>
  );
};

export default Button;
