import fields from '../parts/fields'

export default {
  name: 'articleIndex',
  title: 'Article Index',
  type: 'document',
  fields: [
    fields.title,
    fields.subtitle,
    fields.summary,
    fields.metaDescription
  ],
  preview: {
    prepare: _ => ({ title: 'Article Index' })
  }
}
