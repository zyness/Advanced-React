import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function updateSite(cache, payload) {
  console.log(payload);
  console.log('runninig the updateSite function after delete');
  cache.evict(cache.identify(payload.data.deleteProduct));
}

const DeleteProduct = ({ id, children }) => {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
    update: updateSite,
  });

  return (
    <div>
      <button
        type="button"
        disabled={loading}
        onClick={() => {
          if (confirm('Are u sure u wanna delete this item?')) {
            console.log('delete');
            deleteProduct().catch((err) => alert(err.message));
          }
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default DeleteProduct;
