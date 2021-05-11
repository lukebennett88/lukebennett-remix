// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';
// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';

// We import object and document schemas
import blockContent from './block-content';
import modules from './modules';
import page from './page';
import post from './post';
import richText from './rich-text';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    modules,
    page,
    post,
    richText,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
});
