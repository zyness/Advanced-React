import { relationship, select, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import { isSignedIn, permissions } from '../access';

export const Video = list({
  access: {
    create: isSignedIn,
    read: () => true,
    update: permissions.canManageProducts,
    delete: permissions.canManageProducts,
  },
  fields: {
    internname: text(),
    name: text(),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    created: timestamp(),
    rating: text(),
    hoster: relationship({ ref: 'Hoster' }),
    videoId: text(),
    status: select({
      options: [
        { 
          label: 'Sichtbar für Admin',
          value: 'ADMINONLY' },
        {
          label: 'Sichtbar für Alle',
          value: 'ALL',
        },
        {
          label: 'Sichtbar für VIP',
          value: 'VIP',
        },
      ],
      defaultValue: 'ADMINONLY',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'rating'],
    },
  },
});
