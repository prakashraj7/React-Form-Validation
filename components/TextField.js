import * as React from 'react';
import { ErrorMessage, useField } from 'formik';


export default function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  // console.log(field, meta);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage style={{ color: 'red' }} name={field.name} />
    </div>
  );
}
