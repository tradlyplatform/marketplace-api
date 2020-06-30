module.exports = {
  title: 'Tradly Platform',
  tagline: 'Empowering you with platform infrastructure',
  url: 'https://portal.tradly.app',
  baseUrl: '/',
  favicon: 'img/favicon.svg',
  organizationName: 'TRADLY-PLATFORM', // Usually your GitHub org/user name.
  projectName: 'marketplace-api', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Tradly Platform',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
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
              href: 'https://github.com/TRADLY-PLATFORM/marketplace-api/issues/new',
            },
            {
              label: 'Submit Bug',
              href: 'https://github.com/TRADLY-PLATFORM/marketplace-api/issues/new?assignees=&labels=&template=bug_report.md&title=',
            },
            {
              label: 'Feature Request',
              href: 'https://github.com/tradlyplatform/marketplace-api/issues/new?assignees=&labels=&template=feature_request.md&title=',
            },
            {
              label: 'Product Roadmap',
              href: 'https://github.com/TRADLY-PLATFORM/marketplace-api/projects/1',
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
              href: 'https://github.com/TRADLY-PLATFORM/marketplace-api',
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
            'https://github.com/TRADLY-PLATFORM/marketplace-api/edit/gh-pages/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TRADLY-PLATFORM/marketplace-api/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
