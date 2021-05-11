import S from '@sanity/desk-tool/structure-builder';
import { IoGridOutline } from 'react-icons/io5';

const hiddenDocTypes = (listItem) => !['page'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Website')
    .items([
      // Home Page
      S.listItem()
        .title('Pages')
        .icon(IoGridOutline)
        .child(S.document().schemaType('page').documentId('page')),
      // Everything else
      ...S.documentTypeListItems().filter((item) => hiddenDocTypes(item)),
    ]);
