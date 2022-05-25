export default {
  name: 'cardsPages',
  title: 'Cards - Pages',
  type: 'object',
  fields: [
    {
      description: 'For the editor preview. Only appears here in the editor.',
      name: 'previewTitle',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            description: 'Create a card to link to an existing page. You can override the page\'s Title, Picture, and/or Summary by adding content to the fields below.',
            name: 'pageRef',
            title: 'Page Reference',
            type: 'reference',
            to: [
              { type: 'article' },
              { type: 'category' },
              { type: 'page' }
            ],
            validation: Rule => Rule.required()
          },
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'picture',
            title: 'Picture',
            type: 'pictureBasic'
          },
          {
            name: 'summary',
            title: 'Summary',
            type: 'text'
          }
        ],
        preview: {
          select: { title: 'title', pageTitle: 'pageRef.title' },
          prepare: ({ title, pageTitle }) => ({
            title: title || pageTitle || 'Untitled'
          })
        }
      }]
    }
  ],
  preview: {
    select: { title: 'previewTitle' },
    prepare: ({ title = 'UNTITLED' }) => ({ title: `CARDS - PAGES: ${title}` })
  }
}
