import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <button className={props.className}
      onClick={props.onClick}
      type={props.type || 'button'}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;