import orderings from '../parts/orderings'

export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  fieldsets: [
    {
      name: 'iconFS',
      title: 'Icon',
      description: 'A small SVG would be best. 1:1 aspect ratio please. https://iconmonstr.com/ is a good source.',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Network',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'handle',
      title: 'Handle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: ' ',
      type: 'image',
      fieldset: 'iconFS',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: { title: 'title', subtitle: 'handle' }
  },
  orderings: [
    ...orderings.title
  ]
}
