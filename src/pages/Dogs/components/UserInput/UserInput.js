import React from 'react';
import PropTypes from 'prop-types';
import SelectFont from '../SelectFont/SelectFont';
import {
  ResultImageStyled,
  FormStyled,
  ResultNameStyled,
  SaveButtonStyled,
  CardSuccess,
} from './styled/UserInput.styled';
import { FONTS, SELECT_COLORS } from '../../../../config/constants';
import Select from '../../../../Components/Select/Select';
import useInputControl from './useInputControl';
import Loading from '../../../../Components/Loading/Loading';
import Label from '../../../../Components/Label/Label';
import Input from '../../../../Components/Input/Input';
import FlexContent from '../../../../Components/FlexContent/FlexContent';

const UserInput = ({ dogData }) => {
  const inputControl = useInputControl();

  return (
    <>
      {inputControl.showCard && <CardSuccess>Salvo com sucesso</CardSuccess>}
      <FormStyled>
        <Label>Primeiro diga qual nome do seu doguinho:</Label>
        <Input
          data={dogData}
          value={inputControl.dogName}
          onChange={inputControl.handleData.bind(this, inputControl.setDogName)}
        />
        <Label>Escolha sua raça preferida:</Label>
        <SelectFont data={dogData} onChange={inputControl.handleBreed} />
        <Label>Qual melhor cor para o nome do seu pet</Label>
        <Select
          data={SELECT_COLORS}
          onChange={inputControl.handleData.bind(this, inputControl.setColor)}
        />
        <Label>Vai uma tipografia ai?</Label>
        <SelectFont
          data={FONTS}
          onChange={inputControl.handleData.bind(
            this,
            inputControl.setFontSelected
          )}
        />
      </FormStyled>

      <SaveButtonStyled
        disabled={inputControl.disabled}
        onClick={inputControl.saveData}
      >
        Salvar
      </SaveButtonStyled>

      <ResultNameStyled
        font={inputControl.fontSelected}
        color={inputControl.color}
      >
        <p>{inputControl.dogName}</p>
      </ResultNameStyled>

      <ResultImageStyled>
        <FlexContent>
          {inputControl.dogImageLink !== '' && !inputControl.loading && (
            <img src={inputControl.dogImageLink} alt="Seu cachorro escolhido" />
          )}
        </FlexContent>
        {inputControl.loading && <Loading />}
      </ResultImageStyled>
    </>
  );
};
UserInput.propTypes = {
  dogData: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default UserInput;
