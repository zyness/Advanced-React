import { PAGINATION_QUERY } from '../components/Pagination';

const paginationField = () => ({
  keyArgs: false, // tells apollo we will take care of everything
  read(existing = [], { args, cache }) {
    const { skip, first } = args;
    // Read the number of items on the page from cache
    const data = cache.readQuery({ query: PAGINATION_QUERY });
    const count = data?._allProductsMeta?.count;
    const page = skip / first + 1;
    const pages = Math.ceil(count / first);

    // Check if we have existing items
    const items = existing.slice(skip, skip + first).filter((x) => x);
    // If
    // there are items
    // AND there aren't enough items to satisfy how many were requested
    // AND we are on the last page
    // THEN just send it
    if (items.length && items.length !== first && page === pages) {
      return items;
    }
    if (items.length !== first) {
      // We dont have any itemsk, we must go to the network to fetch them
      return false;
    }

    // If there are items, just return from the cache, and we dont need to go to network
    if (items.length) {
      return items;
    }

    return false; // Fallback to network
    // First thing it does it asks the read function for those items.

    // We can either do one of the two things:

    // First things we can do is return items because they are already in cache

    // The other thing we can do is to return false from here (network request)
  },
  merge(existing, incoming, { args }) {
    const { skip, first } = args;
    // This runs if the apollo client comes back from the network with our product
    const merged = existing ? existing.slice(0) : [];
    for (let i = skip; i < skip + incoming.length; ++i) {
      merged[i] = incoming[i - skip];
    }
    // Finally we return merged items from the cache,
    return merged;
  },
});

export default paginationField;
