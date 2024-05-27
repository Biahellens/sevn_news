import styled from "styled-components";

interface Props {
  margin?: 'notice',
}

export const Content = styled.div<Props>`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ margin }) => {
    switch (margin) {
      case 'notice':
        return '3rem';
      default:
        return '6.4rem';
    }
  }};
  margin-bottom: ${({ margin }) => {
    switch (margin) {
      case 'notice':
        return '3rem';
      default:
        return '6rem';
    }
  }};
`

export const ContainerCarousel = styled.div`
  width: 100%;
  height: 12rem;
  background: #EBEFF1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Text = styled.text`
  color: rgb(0, 0, 0, 20%);
  font-size: 2rem;
  font-weight: bold;
`
