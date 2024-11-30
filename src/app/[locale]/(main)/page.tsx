'use client';
import { useTranslations } from 'next-intl';
import { useQuery } from '@apollo/client';
import { GetSentences } from '@/graphql/gql/main-gql';
import { Icon, Loading, Typography } from '@/components';
import classNames from 'classnames';
import { defaultButtonClasses } from '@/components/atoms/Button/Button';

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
        <div className="mx-auto flex max-w-lg flex-col gap-6 rounded-xl border border-regular bg-background-component p-10">
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
      <a
        href="https://github.com/shdezhahanj/nextjs-graphql-quickstart"
        target="_blank"
        className={classNames(
          'mx-auto w-mm cursor-pointer justify-between',
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
