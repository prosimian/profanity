export default {
  name: 'form',
  title: 'Form',
  type: 'object',
  fields: [
    {
      name: 'formType',
      title: 'Form Type',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'Contact', value: 'contact' },
          { title: 'Newsletter', value: 'newsletter' }
        ],
        layout: 'radio'
      }
    }
  ],
  preview: {
    select: { type: 'formType' },
    prepare: ({ type }) => ({ title: `FORM: ${type ? type.toUpperCase() : ''}` })
  }
}
