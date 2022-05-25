export default {
  name: 'socialList',
  title: 'Social List',
  type: 'object',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'boolean',
      description: 'A list of social media links will be inserted in the page at this point. Make sure you\'ve populated some Social docs in the Global section.',
      initialValue: true,
      readOnly: true
    }
  ],
  preview: { prepare: _ => ({ title: 'SOCIAL LIST' }) }
}
