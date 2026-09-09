import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ForgotPassword from '../components/Login/ForgotPassword';

describe('ForgotPassword', () => {
  // Test to verify rendering of elements
  it('renders email input and buttons', () => {
    const handleBack = jest.fn();
    render(<ForgotPassword handleBack={handleBack} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send email/i })).toBeInTheDocument();
  });

  // Test for email input change
  it('updates email input on change', () => {
    const handleBack = jest.fn();
    render(<ForgotPassword handleBack={handleBack} />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  // Test for cancel button click
  it('calls handleBack when cancel button is clicked', () => {
    const handleBack = jest.fn();
    render(<ForgotPassword handleBack={handleBack} />);
    fireEvent.click(screen.getByRole('button', { name: /cancel/i }));
    expect(handleBack).toHaveBeenCalled();
  });

  // Test for sending email button behavior
  it('should handle sending email', () => {
    const handleBack = jest.fn();
    render(<ForgotPassword handleBack={handleBack} />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /send email/i }));
    expect(screen.getByText(/password reset link sent to test@example.com/i)).toBeInTheDocument();
  });
});