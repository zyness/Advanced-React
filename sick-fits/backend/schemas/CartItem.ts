import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn, permissions, rules } from '../access';

export const CartItem = list({
  access: {
    create: isSignedIn,
    read: rules.canOrder,
    update: rules.canOrder,
    delete: rules.canOrder,
  },
  ui: {
    listView: {
      initialSort: {
        field: 'user',
        direction: 'ASC',
      },
      initialColumns: ['product', 'quantity', 'user']

    },
  },
  
  fields : {
    quantity: integer({
      defaultValue: 1,
      isRequired: true
    }),
    product: relationship({ref: 'Product'}),
    user: relationship({ref: 'User.cart'})
  },
});
