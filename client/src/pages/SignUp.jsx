import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignUp = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center align-items-center vh-100">
      <div className="col-12 col-lg-6">
        <div className="card border-0">
        <h4 className="card-header bg-dark text-light p-3" style={{ fontSize: '36px' }}>
        Sign up for "Better Me" today!!
        </h4>
          <div className="card-body p-4">
            {data ? (
              <p className="text-success mb-4">
                Success! You may now head{' '}
                <Link to="/" className="text-primary">
                  back to the homepage.
                </Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Your username"
                    name="username"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <br></br>
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <br></br>
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </div>
                <br></br>
                <button
                  className="btn btn-primary btn-block mb-3"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
