import styled from "styled-components";

interface Props {
  color?: 'red' | 'green' | 'blue';
  fontSize?: 'Principal' | 'Recent'
  margin?: 'oneRem',
  width?: 'economy'
}

export const Main = styled.div`
  width: 80%;
  height: 100%;
  flex-direction: column;
  padding-bottom: 3rem;
`

export const ContentTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`

export const TextType = styled.text<Props>`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${({ color }) => {
    switch (color) {
      case 'red':
        return '#FF2D2D';
      case 'blue':
        return '#24538B';
      case 'green':
        return '#248B28';
      default:
        return '#000000';
    }
  }};
  margin-top: ${({ margin }) => {
    switch (margin) {
      case 'oneRem':
        return '1rem';
      default:
        return '0';
    }
  }};
  margin-bottom: ${({ margin }) => {
    switch (margin) {
      case 'oneRem':
        return '0.8rem';
      default:
        return '0';
    }
  }};
`

export const TitleNotice = styled.text`
  font-weight: bold;
  font-size: 3.6rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 768px && min-width: 768px && max-width: 1440px) {
    font-size: 2.6rem;
  }
`

export const SubTitleNotice = styled.text`
  font-size: 1.6rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 768px && max-width: 1440px) {
    font-size: 1.1rem;
  }
`

export const TextReference = styled.text`
  color: rgb(0, 0, 0, 20%);
  font-size: 0.75rem;
  font-weight: bold;
  margin-top: 1.5rem;
`

export const ContentText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`

export const Text = styled.text`
  margin-bottom: 1rem;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: justify;
  }

  @media (min-width: 768px && max-width: 1440px) {
    font-size: 1.2rem;
  }
`