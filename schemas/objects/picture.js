import React from 'react'
import { blockPreview } from '../../src/helpers'

export default {
  name: 'picture',
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
    },
    {
      name: 'caption',
      title: 'Caption/Attribution',
      type: 'portableTextBasic',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      caption: 'caption',
      imageUrl: 'asset.url'
    },
    prepare: ({ caption, imageUrl }) => ({
      media: <img src={imageUrl} />,
      title: blockPreview(caption, 'NO CAPTION')
    })
  }
}
