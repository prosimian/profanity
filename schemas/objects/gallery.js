export default {
  name: 'gallery',
  title: 'Gallery',
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
      of: [{ type: 'picture' }]
    }
  ],
  preview: {
    select: {
      title: 'previewTitle',
      items: 'items'
    },
    prepare: ({ title = 'UNTITLED', items = [] }) => {
      const count = items.length
      const subtitle = `${count} ITEM${count !== 1 ? 'S' : ''}`

      return {
        title: `GALLERY: ${title}`,
        subtitle
      }
    }
  }
}
