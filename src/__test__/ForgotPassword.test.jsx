import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ForgotPassword from '../components/Login/ForgotPassword';

describe('ForgotPassword', () => {
  it('renders email input and submit button', () => {
    render(<ForgotPassword />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send reset link/i })).toBeInTheDocument();
  });

  it('updates email input on change', () => {
    render(<ForgotPassword />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  it('displays a success message on form submit', () => {
    render(<ForgotPassword />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /send reset link/i }));
    expect(screen.getByText(/password reset link sent to test@example.com/i)).toBeInTheDocument();
  });
});