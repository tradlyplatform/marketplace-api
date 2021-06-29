import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Introductions',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Find informations about TradlyPlatform, API and it's ecosystem. Plus info on sandbox access, testing your apps, and how we deploy into app stores.
      </>
    ),
  },
  {
    title: 'Use Cases & Features',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Explore what you can do with TradlyPlatform infrastructure with different industry examples. And see through all the features available under SuperAdmin and Apps .
      </>
    ),
  },
  {
    title: 'How to Guides',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Already using our infrastructure? Read step by step information on configuring your SuperAdmin dashboard to suit your business + Extensions integrations.
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
