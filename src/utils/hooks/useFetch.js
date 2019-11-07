import { useState, useEffect } from 'react';
import { NOT_FOUND } from '../../config/constants';

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [dogData, setDogData] = useState([]);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const json = await response.json();
      if (json.code === NOT_FOUND) {
        setMessage('Conteúdo não encontrado');
      }

      setDogData(json.message);
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    const fetchDogs = async () => {
      fetchData();
    };

    fetchDogs();
  }, []);

  return { loading, dogData, error, message };
};

export default useFetch;
