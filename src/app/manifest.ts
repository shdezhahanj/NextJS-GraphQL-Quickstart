import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Next.js Graphql quickstart PWA',
		short_name: 'NextPWA',
		description:
			'A fast, offline-capable Progressive Web App (PWA) built with Next.js and GraphQL for optimal performance, SEO, and user experience across all devices.',
		start_url: '/',
		display: 'standalone',
		orientation: 'portrait',
		background_color: '#ffffff',
		theme_color: '#50bfe8',
		icons: [
			{
				src: '/icon-72x72.png',
				sizes: '72x72',
				type: 'image/png',
			},
			{
				src: '/assets/img/icon-96x96.png',
				sizes: '96x96',
				type: 'image/png',
			},
			{
				src: '/assets/img/icon-128x128.png',
				sizes: '128x128',
				type: 'image/png',
			},
			{
				src: '/assets/img/icon-144x144.png',
				sizes: '144x144',
				type: 'image/png',
			},
			{
				src: '/assets/img/icon-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/assets/img/icon-384x384.png',
				sizes: '384x384',
				type: 'image/png',
			},
			{
				src: '/assets/img/icon-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	};
}
