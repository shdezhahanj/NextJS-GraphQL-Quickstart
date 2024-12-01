import { type AvailableIcons, Icon, Typography } from '@/components';
import type { FC } from 'react';

interface IProps {
	icon: AvailableIcons;
	title: string;
}

const IconBox: FC<IProps> = ({ icon, title }) => {
	return (
		<div className="flex flex-col py-6 px-4 w-full border border-regular bg-background-component rounded-xl gap-3 justify-center text-center">
			<Icon name={icon} size='3em' className='mx-auto'/>
			<Typography.Text>{title}</Typography.Text>
		</div>
	);
};

export default IconBox;
