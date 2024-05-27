import { useLocation, useNavigate } from 'react-router-dom';
import {
  Content,
  Title,
  ContainerBack
} from './styles'

// img
import arrow_left from '@assets/arrow_left.svg'

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate()

  return (
    <Content>
      {location.pathname !== '/' &&
        <ContainerBack onClick={() => navigate('/')}>
          <img src={arrow_left} />
        </ContainerBack>
      }
      <Title>SEVN NEWS</Title>
    </Content>
  );
}
