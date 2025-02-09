import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { type LocaleType, routing } from '@/i18n/routing';
import { Providers } from '@/providers';
import { GeistSans } from 'geist/font/sans';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Next js Quickstart',
	description:
		'Next.js Quickstart is a modern, full-stack web application template designed to help you get started quickly with Next.js and Redux Toolkit. This project offers a powerful, scalable foundation for building dynamic and performant web applications using the latest technologies.',
};

interface LayoutProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
	const { locale } = await params;

	if (!routing.locales.includes(locale as LocaleType)) {
		notFound();
	}

	const messages = await getMessages();
	return (
		<html lang={locale} className={`${GeistSans.variable} antialiased`}>
			<body>
				<Providers>
					<NextIntlClientProvider messages={messages}>
						{children}
					</NextIntlClientProvider>
				</Providers>
			</body>
		</html>
	);
}
