import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
	experimental: {
		turbo: {
			rules: {
				'*.scss': {
					loaders: ['sass-loader'],
					as: '*.css',
				},
			},
		},
	},
};

export default withNextIntl(nextConfig);
