import { Typography } from '@/components';
import classNames from 'classnames';
import type { FC } from 'react';

const { Text } = Typography;
interface IFeedback {
	isError: boolean;
	isDisabled: boolean;
	data: string;
	className?: string;
}
export const Feedback: FC<IFeedback> = ({
	isError,
	isDisabled,
	data,
	className,
}) => {
	const color = isDisabled
		? 'opacity-70 text-regular'
		: isError
			? 'text-danger'
			: 'text-regular';
	return (
		<Text className={classNames('w-full text-right', color, className)}>
			{data}
		</Text>
	);
};
