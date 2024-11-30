import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface IProps {
  children?: string | ReactNode;
  className?: string;
  variant?: 'contained' | 'outlined';
  color?: 'primary';
  onClick?: () => void;
}

export const Button: FC<IProps> = ({
  children,
  variant,
  color,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        defaultButtonClasses.base,
        variant && color && defaultButtonClasses[variant][color],
        className,
      )}
    >
      {children}
    </button>
  );
};
export const defaultButtonClasses = {
  base: 'appearance-none ',
  contained: {
    primary:
      'flex rounded-xl px-6 py-[10px] h-[57px] text-lg font-medium justify-center text-center bg-primary text-regular text-nowrap',
  },
  outlined: {
    primary:
      'flex rounded-xl px-6 py-[10px] h-[57px] text-lg font-medium justify-center text-center bg-transparent border-2 border-primary text-primary text-nowrap',
  },
};
