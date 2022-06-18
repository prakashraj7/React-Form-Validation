import * as React from 'react';
import { Formik, Form } from 'formik';
import TextField from './components/TextField';
import * as Yup from 'yup';

export default function SingUp() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(10, 'Must be Less Than 10')
      .required('required'),
    lastName: Yup.string().max(7, 'Must be Less Than 7').required('required'),
    email: Yup.string().email('Email is Invalid').required('email is required'),
    password: Yup.string()
      .min(6, 'Must be min 6')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password Must Match')
      .required('Confirm Passord is required'),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sing Up</h1>
          {/* {console.log(formik.values)} */}
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email " name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="confirmPassword"
            />
            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
