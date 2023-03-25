import styled from 'styled-components';

export const FeedbackWrapp = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 400px;
  height: 200px;
  background-color: #00b0ea;
  box-shadow: -1px -1px 31px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px 5px 0 0;
`;

export const Button = styled.button`
  min-width: 80px;
  height: 50px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: -1px -1px 11px 4px rgba(255, 235, 0, 0.4);
  color: white;
  font-size: 18px;
  font-weight: 700;

  
  }

  ${({ variant }) => {
    return `background-color: ${
      variant === 'good'
        ? 'green'
        : variant === 'neutral'
        ? 'orange'
        : variant === 'bad'
        ? 'red'
        :  'none'
    }`;
  }}
`;
