export default {
  name: 'contentSection',
  title: 'Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'For CMS preview only. This isn\'t used on the site.'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'content'
    },
    {
      name: 'style',
      title: 'Style',
      type: 'string',
      description: 'CSS class names to style this section.'
    },
    {
      name: 'fragmentId',
      title: 'Section Identifier',
      type: 'string',
      description: 'Used with in-page linking. E.g. enter "contact" here (without the quotes) to enable linking to this section with https://yoursite.com/#contact'
    },
    {
      name: 'disable',
      title: 'Disable',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      disable: 'disable'
    },
    prepare (selection) {
      const { title, disable } = selection
      return {
        title: `${disable ? 'DISABLED: ' : ''}${title}`
      }
    }
  }
}
