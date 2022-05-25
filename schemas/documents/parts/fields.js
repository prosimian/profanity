export default {

  categories: {
    name: 'categories',
    title: 'Categories',
    type: 'array',
    of: [
      {
        type: 'reference',
        to: [
          { type: 'category' }
        ]
      }
    ]
  },

  content: {
    name: 'content',
    title: 'Content',
    type: 'content'
  },

  contentSections: {
    name: 'contentSections',
    title: 'Content Sections',
    type: 'array',
    of: [{ type: 'contentSection' }]
  },

  date: {
    name: 'date',
    title: 'Publish Date',
    type: 'date',
    validation: Rule => Rule.required(),
    initialValue: _ => (new Date()).toISOString().split('T')[0]
  },

  featuredImage: {
    name: 'featuredImage',
    title: 'Featured Image',
    type: 'pictureBasic',
    description: 'Displays in page header, linked cards, and index lists. Will also be used for SEO and social media sharing. Best results occur when the image is at least 1200x675 pixels (16:9 aspect ratio) and the focal content is centered.'
  },

  hideHeader: {
    name: 'hideHeader',
    title: 'Hide Header',
    type: 'boolean',
    description: 'Check this to hide the title, subtitle, summary, and featured image on the page. These elements will still be used when needed in cards. Useful on pages with custom layouts.',
    initialValue: false
  },

  hidePage: {
    name: 'hidePage',
    title: 'Hide Page',
    type: 'boolean',
    description: 'Check this to hide this page from search bots. It will have a meta robots noindex tag and be excluded from sitemap.xml.',
    initialValue: false
  },

  metaDescription: {
    name: 'metaDescription',
    title: 'Meta Description',
    type: 'text',
    rows: 5,
    description: 'https://moz.com/learn/seo/meta-description'
  },

  slug: {
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    description: 'The slug is: /the-part-of-the-url-after-the-domain-name. Click Generate to create a slug after you enter a title in the Title field above. Don\'t change the slug after the page has been published to the site.',
    options: {
      source: 'title',
      maxLength: 96
    },
    validation: Rule => Rule.required()
  },

  subtitle: {
    name: 'subtitle',
    title: 'Subtitle',
    type: 'string'
  },

  summary: {
    name: 'summary',
    title: 'Summary',
    type: 'text',
    rows: 5
  },

  title: {
    name: 'title',
    title: 'Title',
    type: 'string',
    validation: Rule => Rule.required()
  }

}
