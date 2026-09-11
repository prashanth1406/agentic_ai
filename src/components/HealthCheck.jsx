import React, { useEffect, useState } from 'react';

const HealthCheck = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('/health');
        if (response.ok) {
          setStatus('Healthy');
        } else {
          setStatus('Unhealthy');
        }
      } catch (error) {
        setStatus('Error');
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>Health Status: {status}</div>;
};

export default HealthCheck;