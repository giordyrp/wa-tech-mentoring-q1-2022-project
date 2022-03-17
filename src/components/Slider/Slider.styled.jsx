import styled from 'styled-components';

export const Slider = styled.div`
    position: relative;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 300px;
  left: 0; 
  right: 0;
  margin: auto;
  text-align: center;

  button {
    height: 5px;
    width: 25px;
    margin-bottom: 4px;
    border-radius: 5px;
    background-color: rgba(255,255,255,0.5);
    border: none;
    margin: 5px;

    &:hover {
      cursor: pointer;
    }
  }

  button:nth-child(${({ index }) => index + 1}) {
    background-color: white;
    width: 32px;
  }
`;