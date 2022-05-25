import { blockPreview } from '../../src/helpers'

export default {
  name: 'cards',
  title: 'Cards',
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
            name: 'content',
            title: 'Content',
            type: 'portableTextBasic'
          }
        ],
        preview: {
          select: { title: 'title', content: 'content' },
          prepare: ({ title = 'Untitled', content }) => ({
            title,
            subtitle: blockPreview(content, 'Please enter some content.')
          })
        }
      }]
    }
  ],
  preview: {
    select: { title: 'previewTitle' },
    prepare: ({ title = 'UNTITLED' }) => ({ title: `CARDS: ${title}` })
  }
}
