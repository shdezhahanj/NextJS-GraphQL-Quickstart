import classNames from 'classnames';
import type { FC } from 'react';

interface IProps {
	options: {
		text: string;
		value: string;
	}[];
	defaultValue?: string | number;
	disabled?: boolean;
	className?: string;
	onChange?: (_: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectBox: FC<IProps> = ({
	className,
	options,
	disabled,
	onChange,
	defaultValue,
}) => {
	return (
		<select
			className={classNames('bg-transparent', className)}
			onChange={onChange}
			defaultValue={defaultValue}
			disabled={disabled}
		>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.text}
				</option>
			))}
		</select>
	);
};
