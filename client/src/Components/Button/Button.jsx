import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./button.css";

const Button = ({ children, onPress, text, type, width }) => {
  return (
    <AwesomeButton
      onPress={onPress}
      className={`rounded-full ${width && "w-full"}`}
      type={type}
    >
      {children}
      {text}
    </AwesomeButton>
  );
};

export default Button;
