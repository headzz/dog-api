import { useState, useEffect } from 'react';
import { NOT_FOUND } from '../../config/constants';

const useFetch = API_LINK => {
  const [loading, setLoading] = useState(true);
  const [dogData, setDogData] = useState([]);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const formatResponse = response => {
    const dogsName = [];
    const dogsRaces = Object.entries(response);
    for (let i = 0; i < dogsRaces.length; i += 1) {
      const merge = dogsRaces[i].flat(1);
      const name = merge.shift();
      if (merge.length !== 0) {
        for (let k = 0; k < merge.length; k += 1) {
          dogsName.push(`${name}-${merge[k]}`);
          setDogData(dogsName);
        }
      } else {
        dogsName.push(`${name}`);
        setDogData(dogsName);
      }
    }
    setLoading(false);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(API_LINK);
      const json = await response.json();
      if (json.code === NOT_FOUND) {
        setMessage('Conteúdo não encontrado');
      }
      formatResponse(json.message);
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
