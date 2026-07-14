import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login/Login.jsx';

describe('Login', () => {
  it('renders username, password, and company name fields, and submit button', () => {
    render(<Login />);
    expect(screen.getByLabelText(/company name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  it('updates username, password, and company name fields on input', () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const companyNameInput = screen.getByLabelText(/company name/i);

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpass' } });
    fireEvent.change(companyNameInput, { target: { value: 'testcompany' } });

    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('testpass');
    expect(companyNameInput.value).toBe('testcompany');
  });

  it('submits the form with correct values', () => {
    const handleSubmit = jest.fn();
    render(<Login onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpass' } });
    fireEvent.change(screen.getByLabelText(/company name/i), { target: { value: 'testcompany' } });
    fireEvent.click(screen.getByRole('button', { name: /log in/i }));

    expect(handleSubmit).toHaveBeenCalledWith({ username: 'testuser', password: 'testpass', companyName: 'testcompany' });
  });

  it('calls handleForgotPassword when forgot password link is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<Login />);

    fireEvent.click(screen.getByText(/forgot password/i));
    expect(consoleSpy).toHaveBeenCalledWith('Forgot password clicked');
    consoleSpy.mockRestore();
  });
});
