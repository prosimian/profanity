export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fieldsets: [
    {
      name: 'imageFS',
      title: 'SEO Image',
      description: 'Best results occur when the image is at least 1200x675 pixels (16:9 aspect ratio) and the focal content is centered.',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'logoFS',
      title: 'Logo',
      description: 'Will also be used in structured data (https://tinyurl.com/1cvntdgt). Must be a minimum of 112x112 pixels.',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string'
    },
    {
      name: 'summary',
      title: 'SEO Description',
      type: 'text',
      description: 'Best kept between 100-300 characters.',
      rows: 5
    },
    {
      name: 'picture',
      title: ' ',
      type: 'image',
      fieldset: 'imageFS'
    },
    {
      name: 'logo',
      title: ' ',
      type: 'image',
      fieldset: 'logoFS'
    },
    {
      name: 'useLogoInNav',
      type: 'boolean',
      title: 'Use Logo in Main Navigation',
      description: 'If checked, the logo will be used as the main menu link to the home page. Otherwise, the Site Title will be used.',
      initialValue: false
    },
    {
      name: 'hideSite',
      title: 'Hide Site',
      type: 'boolean',
      description: 'When this is true, every page will get a "robots" meta tag with a content value of "noindex". And the sitemap will not be generated. Useful for development or private sites.',
      initialValue: true
    }
  ]
}
