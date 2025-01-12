import React from "react";
import "./Button.css"; // Plik stylów dla naszego przycisku

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger"; // Typ przycisku
  size?: "small" | "medium" | "large";
  children: React.ReactNode; // Tekst lub elementy w środku przycisku
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  ...props
}) => {
  return (
    <button className={`button ${variant} ${size}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
