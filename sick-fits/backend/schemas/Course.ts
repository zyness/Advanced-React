import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn, rules } from '../access';

export const Course = list({
  // TODO:
  access: {
    create: isSignedIn,
    update: isSignedIn,
    delete: rules.canManageProducts,
    read: rules.canManageProducts,
  },
  fields: {
    name: text({
      isRequired: true,
    }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
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
    price: integer(),
    items: relationship({ ref: 'Video', many: true}),
  },
});
