import { gql, useMutation } from '@apollo/client';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';
import { CURRENT_USER_QUERY } from './User';

const USER_AUTHENTICATION_MUTATION = gql`
  mutation USER_AUTHENTICATION_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          name
          email
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

const SignIn = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    email: 'wasjke@gmail.com',
    password: 'melissa02',
  });
  const [authenticateUserWithPassword, { loading, data }] = useMutation(
    USER_AUTHENTICATION_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authenticateUserWithPassword();
    clearForm();
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
      <h2>Sign In to Your Account</h2>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
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
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign In</button>
      </fieldset>
    </Form>
  );
};
export default SignIn;
