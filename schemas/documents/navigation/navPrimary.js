export default {
  name: 'navPrimary',
  title: 'Navigation: Primary',
  type: 'document',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'menuItem' }],
      description: 'Add items to the this Menu.'
    }
  ]
}
