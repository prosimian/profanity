export default {
  name: 'navSecondary',
  title: 'Navigation: Secondary',
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
