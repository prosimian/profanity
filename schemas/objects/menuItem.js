export default {
  title: 'Menu Item',
  name: 'menuItem',
  type: 'object',
  fields: [
    {
      name: 'menuItemTitle',
      title: 'Menu Item Title',
      type: 'string',
      description: 'The text users see and click on. E.g. "About".',
      validation: Rule => Rule.required()
    },
    {
      name: 'pageRef',
      title: 'Page',
      type: 'reference',
      description: 'Select a Page from the CMS.',
      to: [
        { type: 'article' },
        { type: 'articleIndex' },
        { type: 'category' },
        { type: 'categoryIndex' },
        { type: 'home' },
        { type: 'page' }
      ],
      validation: Rule => Rule.error('Menu Page is required.').required()
    }
  ],
  preview: {
    select: {
      title: 'menuItemTitle',
      ref: 'pageRef'
    },
    prepare: ({ title, ref }) => (
      { title: ref ? title : 'Please select a page to link to.' }
    )
  }
}
