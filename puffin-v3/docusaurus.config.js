/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'TradlyPlatform - Guides - Knowledge Base',
  tagline: 'Empowering you with platform infrastructure',
  url: 'https://portal.tradly.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'TRADLY-PLATFORM', // Usually your GitHub org/user name.
  projectName: 'puffin', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-143764314-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      apiKey: '46e3a046b3ec681ea19c49ac9eb069a9',
      indexName: 'tradly_platform',
      contextualSearch: false,
      appId: 'BH4D9OD16A',
      
    },
    navbar: {
      title: 'Tradly Platform',
      logo: {
        alt: 'Tradly Platform Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/TRADLY-PLATFORM',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'introduction',
          label: 'Docs',
        },  
        
        {to: '/blog', label: 'Blog', position: 'left'},
        
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
          title: 'Submit',
          items: [
            {
              label: 'Technical Enquiry',
              href: 'https://community.tradly.app',
            },
            {
              label: 'Submit Bug',
              href: 'https://tradly.atlassian.net/servicedesk/customer/portals',
            },
            {
              label: 'Feature Request',
              href: 'https://community.tradly.app',
            },
          ],
        },
        {
          title: 'Important Links',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'API Reference',
              href: 'https://developer.tradly.app/',
            },
            {
              label: 'Video Tutorials',
              href: 'https://www.youtube.com/playlist?list=PLiKQzSFReAziYUvOKfUPxglX-HOhWabVi',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tradly Platform (Product of iStrata Digital Sdn. Bhd.)`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
          'https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v3/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
          'https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v3/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
