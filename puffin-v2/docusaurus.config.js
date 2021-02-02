module.exports = {
  title: 'Tradly Platform',
  tagline: 'Empowering you with platform infrastructure',
  url: 'https://portal.tradly.app',
  baseUrl: '/',
  favicon: 'img/favicon.svg',
  organizationName: 'TRADLY-PLATFORM', // Usually your GitHub org/user name.
  projectName: 'puffin', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    "googleAnalytics": {
      "trackingID": "UA-143764314-1",
      "anonymizeIP": true
    },
    gtag: {
      trackingID: 'UA-143764314-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      apiKey: '46e3a046b3ec681ea19c49ac9eb069a9',
      indexName: 'tradly_platform',
      appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    navbar: {
      title: 'Tradly Platform',
      logo: {
        alt: 'Tradly Platform Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        },
        
        {
          href: 'https://github.com/TRADLY-PLATFORM/puffin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Superadmin',
              to: 'docs/superadmin',
            },
            {
              label: 'User Apps',
              to: 'docs/appfeatures',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Technical Enquiry',
              href: 'https://github.com/TRADLY-PLATFORM/puffin/issues/new',
            },
            {
              label: 'Submit Bug',
              href: 'https://github.com/TRADLY-PLATFORM/puffin/issues/new?assignees=&labels=&template=bug_report.md&title=',
            },
            {
              label: 'Feature Request',
              href: 'https://github.com/TRADLY-PLATFORM/puffin/issues/new?assignees=&labels=&template=feature_request.md&title=',
            },
            {
              label: 'Product Roadmap',
              href: 'https://github.com/TRADLY-PLATFORM/puffin/projects/1',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/TRADLY-PLATFORM/puffin',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tradly Platform. A product of iStrata Digital Sdn. Bhd.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/',
      
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
