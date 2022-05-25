import fields from '../parts/fields'
import orderings from '../parts/orderings'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    fields.title,
    fields.slug,
    fields.subtitle,
    fields.summary,
    fields.featuredImage,
    fields.contentSections,
    fields.metaDescription,
    fields.hideHeader,
    fields.hidePage
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current' },
    prepare: ({ slug, title }) => ({
      title,
      subtitle: `/${slug}/`
    })
  },
  orderings: [
    ...orderings.slug,
    ...orderings.title
  ]
}
