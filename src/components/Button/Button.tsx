import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: string;
  handleClick: () => void;
}

export const Button = ({ children, handleClick }: ButtonProps) => {
  return <button onClick={handleClick}>{children}</button>;
};
