import { type AvailableIcons, Icon, Typography } from '@/components';
import classNames from 'classnames';
import { type FC, type InputHTMLAttributes, forwardRef } from 'react';
import { Feedback } from './Feedback';

const { Text } = Typography;
export type InputType =
	| 'email'
	| 'number'
	| 'password'
	| 'search'
	| 'tel'
	| 'text';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	value?: string;
	placeholder?: string;
	status?: 'error' | 'default';
	type?: InputType;
	required?: boolean;
	disabled?: boolean;
	feedback?: string;
	className?: string;
	inputClassName?: string;
	rightIcon?: {
		name: AvailableIcons;
		click?: () => void;
		className?: string;
	};
	leftIcon?: {
		name: AvailableIcons;
		click?: () => void;
		className?: string;
	};
}
export const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
	(
		{
			id,
			label,
			value,
			type = 'text',
			placeholder = 'Enter',
			feedback,
			status = 'default',
			className = 'w-full',
			inputClassName = '',
			rightIcon,
			leftIcon,
			required = false,
			disabled = false,
			...rest
		},
		ref,
	) => {
		const inputStyles = classNames(
			`w-full h-[44px] px-3 appearance-none border rounded-xl bg-input text-regular align-middle inline-block 
      placeholder:text-placeholder focus:outline-none  focus-visible:outline-none focus-visible:shadow
      disabled:!opacity-70 disabled:pointer-events-none`,
			status === 'error' ? 'border-danger' : 'border-regular',
			rightIcon && 'pr-[40px]',
			leftIcon && 'pl-[40px]',
			inputClassName,
		);
		return (
			<div
				className={classNames(
					'relative flex flex-col justify-start',
					className,
				)}
			>
				{label && (
					<label htmlFor={id} className="mb-2 text-right">
						<Text>{label}</Text>
						{required && <Text className="mx-1">*</Text>}
					</label>
				)}
				<div className="relative flex">
					<input
						id={id}
						ref={ref}
						value={value}
						placeholder={placeholder}
						type={type}
						className={inputStyles}
						disabled={disabled}
						{...rest}
					/>

					{leftIcon?.name && (
						<button
							onClick={leftIcon?.click}
							type="button"
							className={classNames(
								'absolute left-0 top-1/2 flex aspect-[1/1] h-full w-auto -translate-y-1/2 items-center justify-center',
								!leftIcon?.click && 'cursor-text',
								leftIcon.className,
							)}
						>
							<Icon
								name={leftIcon.name}
								size="20px"
								className={disabled ? 'opacity-30' : ''}
							/>
						</button>
					)}

					{rightIcon?.name && (
						<button
							onClick={rightIcon?.click}
							type="button"
							className={classNames(
								'absolute right-0 top-1/2 flex aspect-[1/1] h-full w-auto -translate-y-1/2 items-center justify-center',
								!leftIcon?.click && 'cursor-text',
								rightIcon.className,
							)}
						>
							<Icon
								name={rightIcon.name}
								size="20px"
								className={disabled ? 'opacity-30' : ''}
							/>
						</button>
					)}
				</div>
				{feedback && (
					<Feedback
						className={'pl-3 pt-[2px]'}
						data={feedback}
						isError={status === 'error'}
						isDisabled={disabled}
					/>
				)}
			</div>
		);
	},
);

Input.displayName = 'Input';
