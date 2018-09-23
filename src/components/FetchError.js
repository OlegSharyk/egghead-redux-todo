import React from 'react';

const FetchError = ({ message, onRetry }) => (
  <div>
    <p>Could not fetch todos {message}</p>
    <button onClick={onRetry}>Try again</button>
  </div>
);

export default FetchError;
