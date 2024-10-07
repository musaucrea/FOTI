// src/pages/SignUp.jsx

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import PasswordStrength from '../components/PasswordStrength'; // Adjusted import statement

const SignUp = () => {
  const [password, setPassword] = useState('');

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      organization: '',
      interests: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email format').required('Required'),
      password: Yup.string().required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
      phoneNumber: Yup.string(),
      organization: Yup.string(),
      interests: Yup.string(),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    formik.handleChange(e);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          className="border border-gray-300 p-2 w-full rounded"
        />
        {formik.errors.fullName && <p className="text-red-600">{formik.errors.fullName}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="border border-gray-300 p-2 w-full rounded"
        />
        {formik.errors.email && <p className="text-red-600">{formik.errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
          className="border border-gray-300 p-2 w-full rounded"
        />
        {formik.errors.password && <p className="text-red-600">{formik.errors.password}</p>}
        
        <PasswordStrength password={password} />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          className="border border-gray-300 p-2 w-full rounded"
        />
        {formik.errors.confirmPassword && <p className="text-red-600">{formik.errors.confirmPassword}</p>}

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number (optional)"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          className="border border-gray-300 p-2 w-full rounded"
        />

        <input
          type="text"
          name="organization"
          placeholder="Organization/Institution"
          onChange={formik.handleChange}
          value={formik.values.organization}
          className="border border-gray-300 p-2 w-full rounded"
        />

        <textarea
          name="interests"
          placeholder="Interests (e.g., Tourism, Research)"
          onChange={formik.handleChange}
          value={formik.values.interests}
          className="border border-gray-300 p-2 w-full rounded"
        />

        <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={() => {}} />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
