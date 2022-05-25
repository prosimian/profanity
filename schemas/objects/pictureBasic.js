import React from 'react'

export default {
  name: 'pictureBasic',
  title: 'Picture',
  type: 'image',
  options: {
    hotspot: true,
    metadata: ['lqip', 'palette']
  },
  fields: [
    {
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: { imageUrl: 'asset.url' },
    prepare: ({ caption, imageUrl }) => ({
      media: <img src={imageUrl} />
    })
  }
}
