import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: 100%;
  button {
    background-color: #FF9900;
    color: white;
    font-weight: bold;
  }
  img {
    max-height: 250px;
    object-fit: scale-down;
    border-radius: 20px 20px 0 0;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;