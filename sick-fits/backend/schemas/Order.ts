import { integer, relationship, select, text, virtual } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import formatMoney from '../lib/formatMoney';

export const Order = list({
  // TODO:
  // access:
  fields: {
    //Label for backend
    label: virtual({
      graphQLReturnType: 'String',
      resolver(item){
        return `VA modified: ${formatMoney(item.total)}`;
      }
    }),
    total: integer(),
    items: relationship({ ref: 'OrderItem.order', many: true}),
    user: relationship({ref: 'User.orders'}),
    charge: text(),
  },
});
