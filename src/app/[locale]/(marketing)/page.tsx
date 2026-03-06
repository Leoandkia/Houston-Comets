import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type CometsLandingPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: CometsLandingPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'CometsPage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function CometsLandingPage(props: CometsLandingPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'CometsPage',
  });

  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 p-8 text-white shadow-lg">
        <p className="text-sm font-semibold tracking-[0.2em] text-orange-300">{t('hero_badge')}</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t('hero_title')}</h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-100">{t('hero_description')}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white/10 p-4">
            <p className="text-sm text-slate-200">{t('hero_stat_city_label')}</p>
            <p className="text-2xl font-semibold">{t('hero_stat_city_value')}</p>
          </div>
          <div className="rounded-xl bg-white/10 p-4">
            <p className="text-sm text-slate-200">{t('hero_stat_metro_label')}</p>
            <p className="text-2xl font-semibold">{t('hero_stat_metro_value')}</p>
          </div>
          <div className="rounded-xl bg-white/10 p-4">
            <p className="text-sm text-slate-200">{t('hero_stat_arena_label')}</p>
            <p className="text-2xl font-semibold">{t('hero_stat_arena_value')}</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-gray-900">{t('overview_title')}</h3>
        <p className="text-base">{t('overview_paragraph_1')}</p>
        <p className="text-base">{t('overview_paragraph_2')}</p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-gray-900">{t('market_title')}</h3>
        <ul className="list-disc space-y-2 pl-6 text-base text-gray-700">
          <li>{t('market_item_1')}</li>
          <li>{t('market_item_2')}</li>
          <li>{t('market_item_3')}</li>
          <li>{t('market_item_4')}</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-gray-900">{t('pestle_title')}</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-gray-200 p-4">
            <h4 className="text-lg font-semibold">{t('pestle_political_title')}</h4>
            <p className="text-base text-gray-700">{t('pestle_political_text')}</p>
          </article>
          <article className="rounded-xl border border-gray-200 p-4">
            <h4 className="text-lg font-semibold">{t('pestle_economic_title')}</h4>
            <p className="text-base text-gray-700">{t('pestle_economic_text')}</p>
          </article>
          <article className="rounded-xl border border-gray-200 p-4">
            <h4 className="text-lg font-semibold">{t('pestle_social_title')}</h4>
            <p className="text-base text-gray-700">{t('pestle_social_text')}</p>
          </article>
          <article className="rounded-xl border border-gray-200 p-4">
            <h4 className="text-lg font-semibold">{t('pestle_technology_title')}</h4>
            <p className="text-base text-gray-700">{t('pestle_technology_text')}</p>
          </article>
          <article className="rounded-xl border border-gray-200 p-4">
            <h4 className="text-lg font-semibold">{t('pestle_legal_title')}</h4>
            <p className="text-base text-gray-700">{t('pestle_legal_text')}</p>
          </article>
          <article className="rounded-xl border border-gray-200 p-4">
            <h4 className="text-lg font-semibold">{t('pestle_environment_title')}</h4>
            <p className="text-base text-gray-700">{t('pestle_environment_text')}</p>
          </article>
        </div>
      </section>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="text-2xl font-bold text-blue-950">{t('why_title')}</h3>
        <p className="text-base text-blue-950">{t('why_paragraph_1')}</p>
        <p className="text-base text-blue-950">{t('why_paragraph_2')}</p>
      </section>
    </div>
  );
}
