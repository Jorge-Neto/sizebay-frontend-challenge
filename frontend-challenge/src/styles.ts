import styled from 'styled-components'

export const Container = styled.main`
 background-color: #555555;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`
export const Modal = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    color: #848484;
    border-radius: 4px;
    opacity: 1;
    width: 800px;
    height: 650px;

    @media(max-width: 375px) {
      width: 341px;
      height: 780px;
    }

    button {
      color: #848484;
    }
`;

export const Panel = styled.div`
  margin: 54px 60px 100px;
  @media(max-width: 375px) {
    margin: 48px 16px 100px;
  }
`;
