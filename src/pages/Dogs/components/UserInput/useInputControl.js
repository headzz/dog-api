import { useState, useEffect } from 'react';
import {
  API_BREED_IMAGE_BASE_LINK,
  API_BREED_IMAGE_END_LINK,
} from '../../../../config/constants';

const useInputControl = () => {
  const [fontSelected, setFontSelected] = useState('Montserrat');
  const [color, setColor] = useState('#00A32C');
  const [dogBreed, setDogBreed] = useState('');
  const [dogName, setDogName] = useState('');
  const [dogImageLink, setDogImageLink] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const isButtonEnabled = () => {
    if ((dogName && dogImageLink) !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    isButtonEnabled();
  }, [dogName, dogImageLink]);

  const saveData = () => {
    const saveItem = {
      breed: dogBreed,
      date: new Date(),
      fontColor: color,
      fontType: fontSelected,
      name: dogName,
      photo: dogImageLink,
    };
    localStorage.setItem('dogData', JSON.stringify(saveItem));
    setShowCard(true);
    setTimeout(() => {
      setShowCard(false);
    }, 2000);
  };

  const handleData = (setData, event) => {
    event.persist();
    const inputValue = event.target.value;
    setData(inputValue);
  };

  const getImage = async API_LINK => {
    try {
      const response = await fetch(API_LINK);
      const json = await response.json();

      setDogImageLink(json.message);
      setLoading(false);
      return json.message;
    } catch (e) {
      console.log(e);
      return '';
    }
  };

  const handleBreed = async event => {
    setLoading(true);
    const dogBreedSelected = event.target.value;
    setDogBreed(dogBreedSelected);
    let paramLink = '';
    if (dogBreedSelected.includes('-')) {
      const params = dogBreedSelected.split('-');
      paramLink = `${params[0]}/${params[1]}`;
    } else {
      paramLink = dogBreedSelected;
    }

    const breedImageLink = `${API_BREED_IMAGE_BASE_LINK}${paramLink}${API_BREED_IMAGE_END_LINK}`;

    await getImage(breedImageLink);
  };

  return {
    disabled,
    fontSelected,
    setFontSelected,
    color,
    setColor,
    dogBreed,
    setDogBreed,
    dogName,
    setDogName,
    dogImageLink,
    setDogImageLink,
    handleData,
    getImage,
    handleBreed,
    saveData,
    loading,
    showCard,
  };
};

export default useInputControl;
