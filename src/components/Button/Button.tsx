import React from 'react';
import './Button.styles.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className="btn">
      {children}
    </button>
  );
};
