export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'text',
      rows: 5
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string'
    },
    {
      title: 'Author Info',
      name: 'authorInfo',
      type: 'string'
    },
    {
      title: 'Author Link',
      name: 'authorLink',
      type: 'url'
    }
  ],
  preview: {
    select: { title: 'author' },
    prepare: ({ title = 'Please enter an author' }) => ({
      title: `QUOTE: ${title}`
    })
  }
}
