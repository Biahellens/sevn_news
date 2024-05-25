import styled from "styled-components";

interface Props {
  color?: 'red' | 'green' | 'blue';
  fontSize?: 'Principal' | 'Recent'
  margin?: 'oneRem'
}

export const Content = styled.div`
  width: 95%;
  height: 100%
`

export const ContainerMainSubjects = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const ContainerPrincipalNotice = styled.div`
  width: 36.25rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    width: 55%;
  };

  @media (max-width: 768px) {
    width: 100%
  }
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

export const TitleNotice = styled.text<Props>`
  font-weight: bold;
  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case 'Principal':
        return '3.6rem';
      case 'Recent':
        return '1.2rem';
      default:
        return '0.9rem';
    }
  }};

  @media (max-width: 768px) {
    font-size: ${({ fontSize }) => {
      switch (fontSize) {
        case 'Principal':
          return '2.6rem';
        case 'Recent':
          return '1.2rem';
        default:
          return '0.9rem';
      }
    }};
  }
`

export const ContainerRecentNotices = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  width: 45%;

  @media (min-width: 1440px) {
    width: 35%;
  };

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin-top: 3rem;
  }
`

export const ContainerRecentNotice = styled.div`
  width: 17.5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
  }
`

export const Img = styled.img``