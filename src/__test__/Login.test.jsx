import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login/Login.jsx';

describe('Login', () => {
  it('renders username, password fields, and submit button', () => {
    render(<Login />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  it('updates username and password fields on input', () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpass' } });

    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('testpass');
  });

  it('submits the form with correct values', () => {
    const handleSubmit = jest.fn();
    render(<Login onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpass' } });
    fireEvent.click(screen.getByRole('button', { name: /log in/i }));

    expect(handleSubmit).toHaveBeenCalledWith({ username: 'testuser', password: 'testpass' });
  });

  // Tests for Forgot Password functionality
  it('calls handleForgotPassword when forgot password link is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<Login />);

    fireEvent.click(screen.getByText(/forgot password/i));
    expect(consoleSpy).toHaveBeenCalledWith('Forgot password clicked');
    consoleSpy.mockRestore();
  });
});