import S from '@sanity/desk-tool/structure-builder'
import { previewView } from '../helpers'

import multiDoc from './multiDoc'
import singleDoc from './singleDoc'

// Icons
import {
  MdBookmark,
  MdCheckBox,
  MdHome,
  MdList,
  MdMenu,
  MdLanguage,
  MdSettings,
  MdSubject,
  MdWarning
} from 'react-icons/md'

const previewTypes = ['article', 'home', 'page']

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (previewTypes.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      previewView(schemaType)
    ])
  }

  return S.document()
}

export default () =>
  S.list()
    .title('profanity')
    .id('content')
    .items([

      singleDoc('Home', 'home', MdHome, 'home'),

      S.divider(),

      multiDoc('Pages', 'page', MdBookmark),

      S.divider(),

      multiDoc('Articles', 'article', MdSubject),
      singleDoc('Article Index', 'articleIndex', MdList),

      S.divider(),

      multiDoc('Categories', 'category', MdCheckBox),
      singleDoc('Category Index', 'categoryIndex', MdList),

      S.divider(),

      S.listItem()
        .title('Global')
        .icon(MdLanguage)
        .child(
          S.list()
            .title('Global')
            .items([
              singleDoc('Settings / SEO', 'siteSettings', MdSettings),
              singleDoc('404 Page', 'pageNotFound', MdWarning),
              S.divider(),
              multiDoc('Social', 'social', MdSubject),
              S.divider(),
              singleDoc('Menu - Header', 'navPrimary', MdMenu),
              singleDoc('Menu - Footer', 'navSecondary', MdMenu)
            ])
        )
    ])
