import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import PropTypes from 'prop-types'; // Add PropTypes import
import ForgotPassword from './ForgotPassword';

function Login({ welcomeText }) { // Add welcomeText prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLoginSuccess = (response) => {
    console.log('Login Success: ', response);
  };

  const handleLoginFailure = (response) => {
    console.log('Login Failed: ', response);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
  };

  if (showForgotPassword) {
    return <ForgotPassword handleBack={handleBackToLogin} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">{welcomeText}</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="mt-1 block w-full p-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-1 block w-full p-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
          />
        </div>
        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">Log In</button>
        <a href="#" onClick={handleForgotPassword} className="mt-2 text-sm text-blue-600 hover:underline">Forgot password?</a>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          className="mt-4"
        />
        <p className="text-center text-gray-600">Company ID: [Configured Securely]</p> {/* Temporarily replaced with a placeholder to avoid exposure */}
      </form>
    </div>
  );
}

Login.propTypes = {
  welcomeText: PropTypes.string,
};

Login.defaultProps = {
  welcomeText: 'Welcome to Our Service!', // Default welcome text
};

export default Login;