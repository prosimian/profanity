import React from 'react'
import portableText from './parts/portableText'

const SubheadStyle = props => {
  const css = {
    color: 'slategray',
    display: 'block',
    fontSize: '1.3em',
    fontWeight: 'bold',
    marginTop: '-1.5rem',
    marginBottom: '1rem'
  }
  return <span style={css}>{props.children}</span>
}

const Centered = props => {
  const css = {
    display: 'block',
    textAlign: 'center'
  }
  return <span style={css}>{props.children}</span>
}

const CenteredLarge = props => {
  const css = {
    color: 'darkslategray',
    display: 'block',
    fontSize: '1.3em',
    fontWeight: 'bold',
    textAlign: 'center'
  }
  return <span style={css}>{props.children}</span>
}

const CenteredJumbo = props => {
  const css = {
    color: 'olive',
    display: 'block',
    fontSize: '1.8em',
    fontWeight: 'bold',
    textAlign: 'center'
  }
  return <span style={css}>{props.children}</span>
}

export default {
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      ...portableText,
      styles: [
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        {
          title: 'Subheading',
          value: 'subhead',
          blockEditor: {
            render: SubheadStyle
          }
        },
        {
          title: 'Centered',
          value: 'centered',
          blockEditor: {
            render: Centered
          }
        },
        {
          title: 'Centered - Large',
          value: 'centeredLarge',
          blockEditor: {
            render: CenteredLarge
          }
        },
        {
          title: 'Centered - Jumbo',
          value: 'centeredJumbo',
          blockEditor: {
            render: CenteredJumbo
          }
        }
      ]
    },
    { type: 'address' },
    { type: 'cards' },
    { type: 'cardsPages' },
    { type: 'cta' },
    { type: 'code' },
    { type: 'form' },
    { type: 'gallery' },
    { type: 'picture' },
    { type: 'quote' },
    { type: 'socialList' },
    { type: 'video' }
  ]
}
