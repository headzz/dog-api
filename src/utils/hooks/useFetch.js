import { useState } from 'react';

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [dogData, setDogData] = useState([]);
  const [error, setError] = useState(false);

  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(resp => {
      setDogData(resp.message);
      setLoading(false);
    })
    .catch(() => setError(!error));

  return { loading, dogData };
};

export default useFetch;
