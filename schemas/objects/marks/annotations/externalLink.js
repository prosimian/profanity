import React from 'react'

export default {
  name: 'link',
  title: 'External Link',
  type: 'object',
  fields: [
    {
      name: 'href',
      title: 'URL',
      type: 'url'
    },
    {
      name: 'blank',
      title: 'Open link in new tab',
      type: 'boolean',
      initialValue: true
    }
  ],
  blockEditor: {
    icon: () => <div>🌏</div>,
    render: ({ children }) => <span>{children}🌏</span>
  }
}
