export default {
  date: [
    {
      title: 'Date, Asc',
      name: 'dateAsc',
      by: [
        { field: 'date', direction: 'asc' }
      ]
    },
    {
      title: 'Date, Desc',
      name: 'dateDesc',
      by: [
        { field: 'date', direction: 'desc' }
      ]
    }
  ],
  slug: [
    {
      title: 'Slug, A-Z',
      name: 'slugAsc',
      by: [
        { field: 'slug.current', direction: 'asc' }
      ]
    },
    {
      title: 'Slug, Z-A',
      name: 'slugDesc',
      by: [
        { field: 'slug.current', direction: 'desc' }
      ]
    }
  ],
  title: [
    {
      title: 'Title, A-Z',
      name: 'titleAsc',
      by: [
        { field: 'title', direction: 'asc' }
      ]
    },
    {
      title: 'Title, Z-A',
      name: 'titleDesc',
      by: [
        { field: 'title', direction: 'desc' }
      ]
    }
  ]
}
