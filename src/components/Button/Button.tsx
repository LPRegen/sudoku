import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: string;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};
