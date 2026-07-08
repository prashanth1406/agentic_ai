import pytest
from unittest.mock import patch, MagicMock
from react_test_utils import render, fireEvent, screen

# Assuming we are using a testing library compatible with React components
from src.components.Login import Login

def test_login_render():
    # Test if the login component renders correctly
    render(<Login />)
    assert screen.getByText('Login')
    assert screen.getByLabelText('Username')
    assert screen.getByLabelText('Password')
    assert screen.getByText('Log In')
    assert screen.getByText('Forgot password?')


def test_login_form_functionality():
    # Test the login form submission functionality
    mock_handle_submit = MagicMock()
    with patch('src.components.Login.handleSubmit', mock_handle_submit):
        render(<Login />)
        username_input = screen.getByLabelText('Username')
        password_input = screen.getByLabelText('Password')

        # Simulate entering username and password
        fireEvent.change(username_input, { 'target': { 'value': 'testuser' } })
        fireEvent.change(password_input, { 'target': { 'value': 'password123' } })

        # Simulate form submission
        fireEvent.submit(screen.getByRole('button', { name: 'Log In' }))

        mock_handle_submit.assert_called_once()


def test_forgot_password_link():
    # Test if the forgot password link renders and is functional
    render(<Login />)
    forgot_password_link = screen.getByText('Forgot password?')
    assert forgot_password_link is not None
    
    # Optionally, we can also test if it performs the right action
    mocked_function = MagicMock()
    with patch('src.components.Login.mocked_function', mocked_function):
        fireEvent.click(forgot_password_link)
        mocked_function.assert_called_once()
