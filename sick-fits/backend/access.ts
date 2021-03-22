// At it's simplest, the access control a yes or no value depending on the users session

import { permissionsList } from "./schemas/fields";
import { ListAccessArgs } from "./types";

export function isSignedIn({session}: ListAccessArgs) {
  return  !!session;
}

const generatedPermissions = Object.fromEntries(permissionsList.map((permission) => [
  permission,
  function({session}: ListAccessArgs){
    return !!session?.data.role?.[permission];
  },
])
)

// Permissions check if someone meets a criteria - yes or no
export const permissions = {
  ...generatedPermissions,
  isAweSome({session}: ListAccessArgs){
    return session.data.name.includes('vas');
  }
}

// Rule based function
// Rules can return a boolean - yes or no - or a filter which limits
// which products they can CRUD

export const rules = {
  canManageProducts( {session}: ListAccessArgs){
    if(!isSignedIn({session})){
      return false;
    }
    // 1. Do they have a permission of canManageProducts
    if(permissions.canManageProducts({session})){
      return true;
    }
    // 2. If not, do they own this item?
    return {user: {id: session.itemId}};
  },
  canOrder( {session}: ListAccessArgs){
    if(!isSignedIn({session})){
      return false;
    }
    // 1. Do they have a permission of canManageProducts
    if(permissions.canManageCart({session})){
      return true;
    }
    // 2. If not, do they own this item?
    return {user: {id: session.itemId}};
  },
  canManagerOrderItems( {session}: ListAccessArgs){
    if(!isSignedIn({session})){
      return false;
    }
    // 1. Do they have a permission of canManagerOrderItems
    if(permissions.canManageCart({session})){
      return true;
    }
    // 2. If not, do they own this item?
    return {order: {id: session.itemId}};
  },

  canReadProducts({session}: ListAccessArgs){
    if(!isSignedIn({session})){
      return false;
    }
    if(permissions.canManageProducts({session})){
      return true;
    }
    return {status: 'AVAILABLE'}
  },
  canManageUsers( {session}: ListAccessArgs){
    if(!isSignedIn({session})){
      return false;
    }

    if(permissions.canManageUsers({session})){
      return true;
    }
    //Otherwise they may only update themselves
    return {id: session.itemId};
  },
}