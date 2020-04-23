import React, { InputHTMLAttributes, useCallback, useState } from 'react';

import { IconBaseProps } from 'react-icons';

import './input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [className, setClassName] = useState('');
  const setFocus = useCallback(() => {
    setClassName('focused');
  }, []);

  const setBlur = useCallback(() => {
    setClassName('');
  }, []);

  return (
    <div className={`input-container ${className}`}>
      {Icon && <Icon size={20} />}
      <input
        onBlur={setBlur}
        onFocus={setFocus}
        placeholder="placeholder"
        {...rest}
      />
    </div>
  );
};

export default Input;
