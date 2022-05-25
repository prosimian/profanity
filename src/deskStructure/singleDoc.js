import S from '@sanity/desk-tool/structure-builder'
import { previewView } from '../helpers'

export default function singleDoc (text, type, icon, preview) {
  const views = [S.view.form()]
  if (preview) views.push(previewView(preview))

  return S.listItem()
    .title(text)
    .schemaType(type)
    .icon(icon)
    .child(
      S.document()
        .title(text)
        .schemaType(type)
        .documentId(type)
        .views(views)
    )
}
