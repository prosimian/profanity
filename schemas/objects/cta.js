export default {
  title: 'CTA',
  name: 'cta',
  type: 'object',
  fields: [
    {
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'pageRef',
      title: 'CTA Link',
      type: 'reference',
      to: [
        { type: 'article' },
        { type: 'articleIndex' },
        { type: 'page' }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      initialValue: 'medium',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      initialValue: 'left',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' }
        ],
        layout: 'radio'
      }
    }
  ],
  preview: {
    select: {
      text: 'ctaText',
      linkTitle: 'pageRef.title',
      linkType: 'pageRef._type',
      size: 'size',
      alignment: 'alignment',
    },
    prepare: ({
      text = '',
      linkTitle = '',
      linkType = '',
      size,
      alignment
    }) => {
      const link = linkTitle && linkType
        ? `${linkTitle} [${linkType}]`
        : ''
      return {
        title: text
          ? `CTA ${size} ${alignment}: ${text}`
          : 'Please enter your CTA text',
        subtitle: link || 'Please select a page to link to'
      }
    }
  }
}
