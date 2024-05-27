import {
  Content,
  ContainerCarousel,
  Text
} from './styles'

interface CarouselProps {
  notice?: boolean;
}


export default function Carousel(props: CarouselProps) {

  return (
    <Content margin={props.notice ? 'notice' : undefined}>
      <ContainerCarousel>
        <Text>Publicidade</Text>
      </ContainerCarousel>
    </Content>
  );
}
