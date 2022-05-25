import fields from '../parts/fields'

export default {
  name: 'categoryIndex',
  title: 'Category Index',
  type: 'document',
  fields: [
    fields.title,
    fields.subtitle,
    fields.summary,
    fields.metaDescription
  ],
  preview: {
    prepare: _ => ({ title: 'Category Index' })
  }
}
