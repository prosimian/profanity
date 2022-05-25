import fields from '../parts/fields'

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    fields.contentSections
  ],
  preview: {
    prepare: _ => ({ title: 'Home Page' })
  }
}
