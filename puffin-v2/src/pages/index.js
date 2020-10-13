import React from 'react';

import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import * as Sentry from '@sentry/react';

Sentry.init({
     dsn: "https://901016d24f914c26baa6baeb659ab046@o396771.ingest.sentry.io/5304658"
 });



const features = [
  {
    title: <>Introductions</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Find informations about TradlyPlatform, API and it's ecosystem. Plus info on sandbox access, testing your apps, and how we deploy into app stores.

      </>
    ),
  },
  {
    title: <>Use Cases & Features</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Explore what you can do with TradlyPlatform infrastructure with different industry examples. And see through all the features available under SuperAdmin and Apps .</>
    ),
  },
  {
    title: <>How to Guides</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Already using our infrastructure? Read step by step information on configuring your SuperAdmin dashboard to suit your business + Extensions integrations. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`TradlyPlatform Portal - Docs - Guides`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
