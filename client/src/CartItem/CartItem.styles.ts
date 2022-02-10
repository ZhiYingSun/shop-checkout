import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #3A3B3C;
  padding-bottom: 20px;
  div {
    flex: 1;
  }
  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
  button {
    background-color: #FF9900;
    font-weight: bold;
  }
  h4 {
    color: #3A3B3C;
  }
  img {
    max-width: 80px;
    object-fit: scale-down;
    margin-left: 40px;
  }
`;