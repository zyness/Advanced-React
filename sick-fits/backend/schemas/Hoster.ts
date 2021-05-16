import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { isSignedIn, permissions } from '../access';

export const Hoster = list({
  access: {
    create: isSignedIn,
    read: () => true,
    update: permissions.canManageProducts,
    delete: permissions.canManageProducts,
  },
  fields: {
    name: text(),
    // hoster: relationship({ ref: 'Video.hoster' }),
    link: text(),
    param: text(),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'link', 'param'],
    },
  },
});
