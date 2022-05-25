import S from '@sanity/desk-tool/structure-builder'
import Iframe from 'sanity-plugin-iframe-pane'

export function blockPreview (text = [], emptyText = 'NO TEXT ENTERED') {
  const firstBlock = text.find(block => block._type === 'block')
  return firstBlock
    ? firstBlock.children
        .filter(child => child._type === 'span')
        .map(span => span.text)
        .join('')
    : emptyText
}

export function previewView (doc) {
  // Put your site here to get the previews working
  const previewUrlBase = 'https://example.com'

  const previewUrl = ({ _type, slug }) => {
    let url = ''

    switch (_type) {
      case 'article':
        url = '/articles/' + slug.current
        break
      case 'home':
        url = ''
        break
      default:
        url = '/' + slug.current
    }

    return previewUrlBase + url + '/preview'
  }

  return S.view
    .component(Iframe)
    .options({
      url: doc => previewUrl(doc),
      reload: {
        button: true
      }
    })
    .title('Preview')
}
