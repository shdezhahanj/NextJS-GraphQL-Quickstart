import type { FC, SVGProps } from 'react';
import { Icons } from './Icons';

export type AvailableIcons = keyof typeof Icons;

export type IIcon = {
	name: AvailableIcons;
	size?: string;
	className?: string;
} & SVGProps<SVGSVGElement>;

export const Icon: FC<IIcon> = ({ name, size = '1em', className, ...rest }) => {
	const sizes = { width: size, height: size };
	const IconName = Icons[name];
	return (
		<IconName
			role="img"
			aria-label={name}
			className={className}
			{...sizes}
			{...rest}
		/>
	);
};
