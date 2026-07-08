import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4"> 
      <h1 className="text-2xl font-bold">Login</h1>
      <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
      />
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
      />
      <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Log In</button>
      <a href="#" className="mt-2 text-sm text-blue-600 hover:underline">Forgot password?</a>
    </form>
  );
}

export default Login;