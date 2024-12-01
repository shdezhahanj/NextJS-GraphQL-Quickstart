import { Typography } from '@/components';
import Image from 'next/image';
import type { FC } from 'react';

export const Footer: FC = () => {
	return (
		<footer className="flex w-full border-t border-t-black/10 bg-white py-16">
			<div className="mx-auto grid w-full max-w-4xl grid-cols-1 justify-between gap-6 sm:grid-cols-2">
				<div className="flex flex-col gap-4">
					<div className="flex gap-2">
						<Image
							src="/assets/svg/logo.svg"
							alt="logo"
							width={24}
							height={24}
						/>
						<Typography.Text className="font-medium">
							CryptoVolume
						</Typography.Text>
					</div>
					<Typography.Paragraph className="text-gray max-w-sm text-sm">
						Discover the latest crypto trends with CryptoVolume&#39;s insights.
						Stay updated on Memecoins, Stable Coins, AI, Gaming, and DeFi with
						clear visualizations.
					</Typography.Paragraph>
					<div className="hidden gap-8 sm:flex">
						<Typography.TextLink href="#" className="text-sm underline">
							Terms Of Use
						</Typography.TextLink>
						<Typography.TextLink href="#" className="text-sm underline">
							Privacy & Cookie Policies
						</Typography.TextLink>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-4">
					<ul>
						<li className="sm:text-right">
							<Typography.TextLink href="#" className="font-medium">
								Home
							</Typography.TextLink>
						</li>
						<li className="sm:text-right">
							<Typography.TextLink href="#" className="font-light">
								Crypto Blog
							</Typography.TextLink>
						</li>
						<li className="sm:text-right">
							<Typography.TextLink href="#" className="font-light">
								Contact us{' '}
							</Typography.TextLink>
						</li>
					</ul>
					<Typography.Paragraph className="hidden justify-end text-right font-light sm:flex">
						<Typography.TextLink href="#" className="mr-1 underline">
							CryptoVolume{' '}
						</Typography.TextLink>{' '}
						ⓒ 2024
					</Typography.Paragraph>
				</div>
				<div className="flex flex-col gap-2 sm:hidden">
					<Typography.TextLink href="#" className="text-sm underline">
						Terms Of Use
					</Typography.TextLink>
					<Typography.TextLink href="#" className="text-sm underline">
						Privacy & Cookie Policies
					</Typography.TextLink>
					<Typography.Paragraph className="flex text-right font-light">
						<Typography.TextLink href="#" className="mr-1 underline">
							CryptoVolume{' '}
						</Typography.TextLink>{' '}
						ⓒ 2024
					</Typography.Paragraph>
				</div>
			</div>
		</footer>
	);
};
