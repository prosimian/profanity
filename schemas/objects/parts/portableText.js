import ExternalLink from '../marks/annotations/externalLink'
import InternalLink from '../marks/annotations/internalLink'

export default {
  type: 'block',
  styles: [],
  lists: [
    { title: 'Bulleted', value: 'bullet' },
    { title: 'Numbered', value: 'number' }
  ],
  marks: {
    decorators: [
      { title: 'Strong', value: 'strong' },
      { title: 'Emphasis', value: 'em' }
    ],
    annotations: [
      ExternalLink,
      InternalLink
    ]
  }
}
