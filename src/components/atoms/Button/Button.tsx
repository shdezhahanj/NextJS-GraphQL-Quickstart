import classNames from 'classnames';
import type { FC, ReactNode } from 'react';

interface IProps {
	children?: string | ReactNode;
	className?: string;
	variant?: 'contained' | 'outlined';
	color?: 'primary';
	type?: 'submit' | 'button';
	onClick?: () => void;
}

export const Button: FC<IProps> = ({
	children,
	variant,
	color,
	className,
	onClick,
	type = 'button',
}) => {
	return (
		<button
			onClick={onClick}
			className={classNames(
				defaultButtonClasses.base,
				variant && color && defaultButtonClasses[variant][color],
				className,
			)}
			type={type}
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
