import { gql, useMutation } from '@apollo/client';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';
import { CURRENT_USER_QUERY } from './User';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

const RequestReset = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    email: 'wasjke@gmail.com',
  });
  const [sendUserPasswordResetLink, { loading, data, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendUserPasswordResetLink();
    resetForm();
    // Go to the products page
    // if (!error) {
    //   Router.push({
    //     pathname: '/',
    //   });
    // }
  };

  console.log(error);
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Request your password</h2>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Check your email for a link!</p>
        )}
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="E-mail"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Request Reset</button>
      </fieldset>
    </Form>
  );
};
export default RequestReset;
