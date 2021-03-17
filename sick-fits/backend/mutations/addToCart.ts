import { KeystoneContext } from "@keystone-next/types";
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from "../types";

async function addToCart(
  root: any, 
  { productId }: { productId: string }, 
  context: KeystoneContext 
  ): Promise<CartItemCreateInput> {
  console.log("ADDING TO CART FROM Mutation")
  // 1. Query the current user see if they are signed in

  const sess = context.session as Session;
  if(!sess.itemId){
    throw new Error('You musst be logged in to do this!')
  }

  // 2. Query the current users cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: {user: {id: sess.itemId}, product: {id: productId}},
    resolveFields: 'id,quantity'
  });
  const [existingCartItem] = allCartItems; 
  console.log(allCartItems);
  
  // 3. See if the current item is in their cart
  // 3.1 if it is, increment by 1
  if(existingCartItem){
    console.log(`There are already ${existingCartItem.quantity}, increment by 1`);

    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: {quantity: existingCartItem.quantity + 1}
    })
  }

  // 3.2 if it isn't, create a new cart item
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId }},
      user: { connect: {id: sess.itemId}}
    }
  })
}

export default addToCart