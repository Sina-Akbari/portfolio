import React, { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // TODO: Add variants
  variant?: string;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="flex text-primary items-center bg-background justify-center px-3 py-2 h-12 w-32 rounded-full cursor-pointer shadow-neu-base hover:shadow-neu-pressed"
      {...props}
    >
      {children}
    </button>
  );
};
