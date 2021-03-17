import { gql, useQuery } from '@apollo/client';

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    authenticatedItem {
      ... on User {
        id
        name
        email
        cart {
          id
          quantity
          product {
            id
            name
            price
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;

const useUser = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
};

export default useUser;
