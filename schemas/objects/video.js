export default {
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Required',
      validation: Rule => Rule.error('A Video iFrame requires a title.').required()
    },
    {
      name: 'provider',
      title: 'Video Provider',
      type: 'string',
      description: 'Required',
      options: {
        list: [
          { title: 'YouTube', value: 'youtube' },
          { title: 'Vimeo', value: 'vimeo' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      validation: Rule => Rule.error('Video Provider is required.').required()
    },
    {
      name: 'videoId',
      title: 'Video ID',
      type: 'string',
      description: 'Required',
      validation: Rule => Rule.error('Video ID is required.').required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'provider'
    },
    prepare ({ title = 'Untitled', subtitle = 'No provider selected' }) {
      return { title, subtitle: subtitle.toUpperCase() }
    }
  }
}
