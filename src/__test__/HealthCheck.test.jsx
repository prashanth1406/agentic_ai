import React from 'react';
import { render, screen } from '@testing-library/react';
import HealthCheck from '../components/HealthCheck';

jest.mock('node-fetch');
import fetch from 'node-fetch';

describe('HealthCheck Component', () => {
  it('displays loading initially', () => {
    render(<HealthCheck />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays health status', async () => {
    fetch.mockResolvedValueOnce({ ok: true });
    render(<HealthCheck />);
    expect(await screen.findByText(/health status/i)).toBeInTheDocument();
  });

  it('handles an error', async () => {
    fetch.mockRejectedValueOnce(new Error('API is down'));
    render(<HealthCheck />);
    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});