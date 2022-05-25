import fields from '../parts/fields'

export default {
  name: 'pageNotFound',
  title: 'Page Not Found',
  type: 'document',
  fields: [
    fields.title,
    fields.subtitle,
    fields.summary,
    fields.featuredImage,
    fields.content,
    fields.hideHeader
  ],
  preview: {
    prepare: _ => ({ title: '404 Page' })
  }
}
