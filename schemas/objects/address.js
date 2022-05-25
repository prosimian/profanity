import { blockPreview } from '../../src/helpers'

export default {
  name: 'address',
  title: 'Address',
  type: 'object',
  fields: [
    {
      name: 'address',
      title: 'Address',
      type: 'portableTextBasic',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: { address: 'address' },
    prepare: ({ address }) => ({
      title: `ADDRESS: ${blockPreview(address, 'Please enter an address.')}`
    })
  }
}
