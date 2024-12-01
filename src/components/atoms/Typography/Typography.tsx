import classNames from 'classnames';
import Link from 'next/link';
import type { FC, HTMLAttributeAnchorTarget, ReactNode } from 'react';

export const titleLevelOptions = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
type TitleLevelType = (typeof titleLevelOptions)[number];

export interface ITypography {
	className?: string;
	children?: ReactNode | string;
}
const Paragraph: FC<ITypography> = ({ children, className, ...rest }) => {
	return (
		<p className={classNames('text-base', className)} {...rest}>
			{children}
		</p>
	);
};

const Text: FC<ITypography> = ({ children, className, ...rest }) => {
	return (
		<span className={classNames('text-base', className)} {...rest}>
			{children}
		</span>
	);
};

export interface ITitle extends ITypography {
	level: TitleLevelType;
}

const Title: FC<ITitle> = ({ level, className, ...rest }) => {
	const HeadingTag = level;
	const defaultSize = {
		h1: 'text-4xl font-semibold',
		h2: 'text-3xl font-semibold',
		h3: 'text-2xl font-semibold',
		h4: 'text-xl font-semibold',
		h5: 'text-lg font-semibold',
		h6: 'text-base font-semibold',
	};
	return (
		<HeadingTag
			className={classNames(defaultSize[level], className)}
			{...rest}
		/>
	);
};

export interface ILink extends ITypography {
	href: string;
	target?: HTMLAttributeAnchorTarget;
}
const TextLink: FC<ILink> = ({
	children,
	className,
	href,
	target = '_self',
	...rest
}) => {
	return (
		<Link
			href={href}
			target={target}
			className={classNames('text-base', className)}
			{...rest}
		>
			{children}
		</Link>
	);
};

export const Typography = { Paragraph, Text, Title, TextLink };
