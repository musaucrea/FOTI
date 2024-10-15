// src/SignUp.jsx
import { useState, useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import PasswordStrength from '../components/PasswordStrength'; // Ensure this component exists
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [, setCurrentlyStudying] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      studentName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      university: '',
      course: '',
      graduationYear: '',
      currentlyStudying: false,
      gender: '',
      interestsInFoTI: '',
    },
    validationSchema: Yup.object({
      studentName: Yup.string().required('Student Name is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
      phoneNumber: Yup.string().matches(
        /^\+?[1-9]\d{1,14}$/,
        'Invalid phone number'
      ),
      university: Yup.string().required('University is required'),
      course: Yup.string().required('Course is required'),
      graduationYear: Yup.string().when('currentlyStudying', {
        is: false,
        then: Yup.string()
          .matches(/^\d{4}$/, 'Enter a valid year')
          .required('Year of Graduation is required'),
        otherwise: Yup.string().notRequired(),
      }),
      currentlyStudying: Yup.boolean(),
      gender: Yup.string().required('Gender is required'),
      interestsInFoTI: Yup.string().required('Please specify your interests in FoTI'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      if (!captchaValue) {
        setErrorMessage('Please verify that you are not a robot.');
        setSubmitting(false);
        return;
      }

      try {
        const response = await fakeSignUpApi(values, captchaValue);

        if (response.success) {
          login(response.user);
          navigate('/Dashboard');
        } else {
          setErrorMessage(response.message || 'Sign-up failed.');
        }
      } catch (error) {
        console.error('Sign-up error:', error);
        setErrorMessage('An error occurred during sign-up. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    formik.handleChange(e);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setErrorMessage('');
  };

  const handleCurrentlyStudyingChange = (e) => {
    const isChecked = e.target.checked;
    setCurrentlyStudying(isChecked);
    formik.setFieldValue('currentlyStudying', isChecked);
    if (isChecked) {
      formik.setFieldValue('graduationYear', '');
    }
  };

  const fakeSignUpApi = (values, captchaToken) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            studentName: values.studentName,
            email: values.email,
          },
        });
      }, 1500);
    });
  };

  useEffect(() => {
    if (formik.values.currentlyStudying) {
      formik.setFieldValue('graduationYear', '');
    }
  }, [formik.values.currentlyStudying]);

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8 mt-12">Register for Endless Possibilities</h1>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Name */}
        <div>
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.studentName}
            className={`border p-3 w-full rounded ${
              formik.touched.studentName && formik.errors.studentName
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {formik.touched.studentName && formik.errors.studentName && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.studentName}</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`border p-3 w-full rounded ${
              formik.touched.email && formik.errors.email
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            onBlur={formik.handleBlur}
            value={password}
            className={`border p-3 w-full rounded ${
              formik.touched.password && formik.errors.password
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className={`border p-3 w-full rounded ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.confirmPassword}</p>
          )}
        </div>

        {/* Password Strength Indicator */}
        <div className="md:col-span-2">
          <PasswordStrength password={password} />
        </div>

        {/* Phone Number */}
        <div>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number (optional)"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className={`border p-3 w-full rounded ${
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.phoneNumber}</p>
          )}
        </div>

        {/* University */}
        <div>
          <input
            type="text"
            name="university"
            placeholder="University"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.university}
            className={`border p-3 w-full rounded ${
              formik.touched.university && formik.errors.university
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {formik.touched.university && formik.errors.university && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.university}</p>
          )}
        </div>

        {/* Course */}
        <div>
          <input
            type="text"
            name="course"
            placeholder="Course"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.course}
            className={`border p-3 w-full rounded ${
              formik.touched.course && formik.errors.course
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {formik.touched.course && formik.errors.course && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.course}</p>
          )}
        </div>

        {/* Graduation Year */}
        <div>
          <input
            type="text"
            name="graduationYear"
            placeholder="Graduation Year (optional)"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.graduationYear}
            disabled={formik.values.currentlyStudying} // Disable if currently studying
            className={`border p-3 w-full rounded ${
              formik.touched.graduationYear && formik.errors.graduationYear
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {formik.touched.graduationYear && formik.errors.graduationYear && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.graduationYear}</p>
          )}
        </div>

        {/* Currently Studying Checkbox */}
        <div className="md:col-span-2 flex items-center">
          <input
            type="checkbox"
            name="currentlyStudying"
            checked={formik.values.currentlyStudying}
            onChange={handleCurrentlyStudyingChange}
            className="mr-2"
          />
          <label className="text-gray-700">Currently Studying</label>
        </div>

        {/* Gender */}
        <div className="md:col-span-2">
          <label className="block mb-1 text-gray-700">Gender</label>
          <select
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
            className={`border p-3 w-full rounded ${
              formik.touched.gender && formik.errors.gender
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          >
            <option value="" label="Select Gender" />
            <option value="male" label="Male" />
            <option value="female" label="Female" />
          </select>
          {formik.touched.gender && formik.errors.gender && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.gender}</p>
          )}
        </div>

        {/* Interests in FoTI */}
        <div className="md:col-span-2">
          <textarea
            name="interestsInFoTI"
            placeholder="Your Interests in FoTI"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.interestsInFoTI}
            className={`border p-3 w-full rounded ${
              formik.touched.interestsInFoTI && formik.errors.interestsInFoTI
                ? 'border-red-500'
                : 'border-gray-300'
            }`}
          />
          {formik.touched.interestsInFoTI && formik.errors.interestsInFoTI && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.interestsInFoTI}</p>
          )}
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="md:col-span-2">
            <p className="text-red-600 text-sm">{errorMessage}</p>
          </div>
        )}

        {/* ReCAPTCHA */}
        <div className="md:col-span-2">
          <ReCAPTCHA
            sitekey="6Lfby18qAAAAAKZG4x1s0prPi_HEbEOnb5vPAowQ" // Replace with your ReCAPTCHA site key
            onChange={handleCaptchaChange}
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center">
  <button
    type="submit"
    disabled={formik.isSubmitting || !captchaValue}
    className="
      bg-blue-600 text-white font-bold py-2 px-4 rounded 
      hover:bg-blue-700 disabled:opacity-50 
      sm:w-full sm:px-3 sm:text-sm 
      md:w-auto md:px-6 md:text-base 
      lg:py-3 lg:px-8 lg:text-lg 
      transition-all duration-300 ease-in-out"
  >
    {formik.isSubmitting ? 'Submitting...' : 'Sign Up'}
  </button>
</div>

      </form>
    </div>
  );
};

export default SignUp;
