import React, { useCallback, ButtonHTMLAttributes } from 'react';
import './button.scss';
import { IconBaseProps } from 'react-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'large';
  icon?: React.ComponentType<IconBaseProps>;
  border?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  children,
  size = 'small',
  border = false,
  ...rest
}) => {
  const createClassName = useCallback(() => {
    let sizeButton = '';
    let borderButton = '';

    if (size === 'small') {
      sizeButton = 'small-button';
    } else if (size === 'large') {
      sizeButton = 'large-button';
    }

    if (border === true) {
      borderButton = ' border-button';
    } else {
      borderButton = '';
    }

    return sizeButton + borderButton;
  }, [size, border]);

  const className = createClassName();

  return (
    <button className={className} type="button" {...rest}>
      {children}
      {Icon && <Icon size={20} />}
    </button>
  );
};

export default Button;
