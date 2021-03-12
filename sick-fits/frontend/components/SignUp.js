import { gql, useMutation } from '@apollo/client';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';
import { CURRENT_USER_QUERY } from './User';

const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      name
      email
    }
  }
`;

const SignUp = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    email: '',
    name: '',
    password: '',
  });
  const [signup, { loading, data, error }] = useMutation(SIGN_UP_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup().catch(console.error);
    clearForm();
    // Go to the products page
    // if (!error) {
    //   Router.push({
    //     pathname: '/',
    //   });
    // }
  };

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign Up for an Account</h2>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        {data?.createUser && (
          <p>
            Signed up with {data.createUser.email} - Please go ahead and sign
            in!
          </p>
        )}
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
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
        <button type="submit">Sign Up</button>
      </fieldset>
    </Form>
  );
};
export default SignUp;
