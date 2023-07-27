import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};
