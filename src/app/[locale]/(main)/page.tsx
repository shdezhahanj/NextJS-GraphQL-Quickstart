'use client';
import { Icon, Loading, Typography } from '@/components';
import { defaultButtonClasses } from '@/components/atoms/Button/Button';
import IconBox from '@/components/molecules/IconBox/IconBox';
import { GetSentences } from '@/graphql/gql/main-gql';
import { FEATURES } from '@/utils/constants';
import { useQuery } from '@apollo/client';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

export default function HomePage() {
	const t = useTranslations('HomePage');
	const { data, loading } = useQuery(GetSentences, {
		fetchPolicy: 'network-only',
	});

	return (
		<div className="mx-auto flex w-full max-w-4xl flex-col justify-center gap-6 p-8 text-center">
			<Typography.Title level="h1">{t('title')}</Typography.Title>
			<Typography.Paragraph>{t('description')}</Typography.Paragraph>
			{!loading ? (
				<div className="mx-auto w-full flex flex-col gap-6 rounded-xl border border-regular bg-background-component p-10">
					<Typography.Paragraph className="text-lg">
						{data?.sentence?.quote}
					</Typography.Paragraph>
					<Typography.Text className="text-lg">
						{data?.sentence?.author}
					</Typography.Text>
				</div>
			) : (
				<Loading />
			)}

			<div className="grid  grid-cols-2 sm:grid-cols-4 gap-4">
				{FEATURES.map((item) => (
					<IconBox key={item.id} icon={item.icon} title={item.title} />
				))}
			</div>
			<a
				href="https://github.com/shdezhahanj/nextjs-graphql-quickstart"
				target="_blank"
				className={classNames(
					'mx-auto cursor-pointer justify-between',
					defaultButtonClasses.outlined.primary,
				)}
				rel="noreferrer"
			>
				<Icon name="GitHub" className="my-auto mr-4" size="2em" />
				<span className="my-auto">Source Code</span>
			</a>
		</div>
	);
}
