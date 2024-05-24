import { useLocation } from 'react-router-dom';
import {
  Content,
  Title,
  ContainerBack
} from './styles'

// img
import arrow_left from '@assets/arrow_left.svg'

export default function Header() {
  const location = useLocation();

  return (
    <Content>
      {location.pathname !== '/' &&
        <ContainerBack>
          <img src={arrow_left} />
        </ContainerBack>
      }
      <Title>SEVN NEWS</Title>
    </Content>
  );
}
