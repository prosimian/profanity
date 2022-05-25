import S from '@sanity/desk-tool/structure-builder'

export default function multiDoc (text, type, icon) {
  return S.listItem()
    .title(text)
    .icon(icon)
    .schemaType(type)
    .child(S.documentTypeList(type).title(text))
}
