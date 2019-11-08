import styled from 'styled-components';

export const ResultImageStyled = styled.div`
  img {
    max-width: 250px;
    height: 170px;

    @media (min-width: 600px) {
      max-width: 400px;
      height: 250px;
    }
  }
`;

export const SaveButtonStyled = styled.button`
  border: 2px solid #000000;
  background-color: transparent;
  color: black;
  margin-top: 5px;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: #575757;
    border-color: #575757;
  }
  :disabled {
    background-color: #d6d6d6;
    border: 2px solid #d6d6d6;
    color: #666666;
  }
`;

export const CardSuccess = styled.div`
  position: fixed;
  background-color: #008f02;
  color: #ffffff;
  font-family: MontSerrat;
  top: 10%;
  padding: 10px 6px;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

export const ResultNameStyled = styled.div`
  padding: 0.5rem;
  font-size: 16px;
  font-family: ${props => props.font};
  color: ${props => props.color};
`;

export const FormStyled = styled.form`
  width: 100%;
  @media (min-width: 600px) {
    width: 320px;
  }
`;
