import { IoDocumentTextOutline as icon } from 'react-icons/io5';

export default {
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  icon,
  fields: [
    {
      name: 'blockContent',
      title: 'Block Content',
      type: 'blockContent',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Rich Text',
      };
    },
  },
};
