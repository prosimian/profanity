import fields from '../parts/fields'
import orderings from '../parts/orderings'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    fields.title,
    fields.slug,
    fields.subtitle,
    fields.summary,
    fields.metaDescription
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current' },
    prepare: ({ slug, title }) => ({
      title,
      subtitle: `/categories/${slug}/`
    })
  },
  orderings: [
    ...orderings.title
  ]
}
