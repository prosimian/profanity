import fields from '../parts/fields'
import orderings from '../parts/orderings'

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    fields.title,
    fields.slug,
    fields.subtitle,
    fields.summary,
    fields.featuredImage,
    fields.contentSections,
    fields.date,
    fields.categories,
    fields.metaDescription,
    fields.hideHeader
  ],
  preview: {
    select: { date: 'date', slug: 'slug.current', title: 'title' },
    prepare: ({ date, slug, title }) => ({
      title,
      subtitle: `${date} - /articles/${slug}/`
    })
  },
  orderings: [
    ...orderings.date,
    ...orderings.title
  ]
}
