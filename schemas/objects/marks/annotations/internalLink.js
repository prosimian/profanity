import React from 'react'

export default {
  name: 'internalLink',
  type: 'object',
  title: 'Internal Link',
  fields: [
    {
      name: 'pageRef',
      type: 'reference',
      title: 'Page to link to',
      to: [
        { type: 'article' },
        { type: 'articleIndex' },
        { type: 'category' },
        { type: 'categoryIndex' },
        { type: 'home' },
        { type: 'page' }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'fragment',
      title: 'Link to Section',
      type: 'string',
      description: 'Use this if you want to link to a section in a page. E.g. https://this-site.com/#special goes to the "special" section of the home page. In this case, you want to enter "special" here (without the quotes). Make sure the section of the page actually has a Section Identifier.'
    }
  ],
  blockEditor: {
    icon: () => <div>🔗</div>,
    render: ({ children }) => <span>{children}🔗</span>
  }
}
