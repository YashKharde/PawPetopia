import Poster from "../assets/Poster.png";
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userContext } from "../context/usercontext";


function SignIn() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { setuser } = useContext(userContext)
  const [emailFocused, setEmailFocused] = useState(false); // Added state

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const errors = {};

    if (password.length < 8) {
      errors.length = 'Password must be at least 8 characters long';
    }
    if (!/[A-Z]/.test(password)) {
      errors.uppercase = 'Password must contain at least one uppercase letter';
    }
    if (!/[a-z]/.test(password)) {
      errors.lowercase = 'Password must contain at least one lowercase letter';
    }
    if (!/[0-9]/.test(password)) {
      errors.number = 'Password must contain at least one number';
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.specialChar = 'Password must contain at least one special character';
    }

    return errors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to ${value}`); // Log changes
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData); // Log form data
    try {
      const response = await axios.post('http://localhost:8080/User/login', new URLSearchParams({
        email: formData.email,
        password: formData.password,
      }).toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      console.log(response.data);
      // Ensure login function is defined
      // login(formData.email);
      if (response.data == formData.email) {

        localStorage.setItem("email", response.data)         //-----------------------------------------------> localStorage
        setuser(formData.email)

        navigate('/profile');
      } else {
        alert(response.data)
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      alert('Login failed: ' + (error.response ? error.response.data : error.message));
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <img className="w-80" src={Poster} alt="" />
        <form onSubmit={handleSubmit} className="max-w-[450px] -translate-y-3 border-[#656565] border-[2px] p-10 rounded-md w-full mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              onChange={handleChange}
              onFocus={() => setEmailFocused(true)}  // Added onFocus
              onBlur={() => setEmailFocused(false)} // Added onBlur
              value={formData.email}
              name="email"
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Ex: name@gmail.com"
              required
            />
            {emailFocused && ( // Conditionally render labels
              <>
                <label htmlFor="" style={{ color: 'red', fontSize: 'small', fontWeight: 'bold' }}>Enter Correct email-iD</label>
                <label htmlFor="" style={{ color: 'red', fontSize: 'small' }}> *or new acc will Created*</label>
              </>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              onChange={(e) => {
                const { value } = e.target;
                setFormData({...formData, password:value});
                setErrors(validatePassword(value));
              }}
              value={formData.password}
              name="password"
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          {Object.keys(errors).map((key) => (
          <p key={key} style={{ color: 'red' }}>
            {errors[key]}
          </p>
        ))}

          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">
              I agree with the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                terms and conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
