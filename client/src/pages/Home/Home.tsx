import {
  Content,
  ContainerMainSubjects,
  TitleNotice,
  ContainerPrincipalNotice,
  TextType,
  ContainerRecentNotices,
  Img,
  ContainerRecentNotice,
  ContainerOthersNotices,
  ContainerOtherNotice,
  TargetType,
  ContainerTypeNotice,
} from "./styles";

// imgs
import educacao from "@assets/educacao.png";
import diversidade from "@assets/diversidade.png";

export default function Home() {
  return (
    <Content>
      <ContainerMainSubjects>
        <ContainerPrincipalNotice>
          <TextType color="red">ECONOMIA</TextType>
          <TitleNotice fontSize="Principal">
            Quem não tiver valores a receber nesta etapa poderá ter nas próximas
            fases, diz BC
          </TitleNotice>
        </ContainerPrincipalNotice>
        <ContainerRecentNotices>
          <ContainerRecentNotice>
            <Img src={educacao} />
            <>
              <TextType color="blue" margin="oneRem">
                EDUCAÇÃO
              </TextType>
              <TitleNotice fontSize="Recent">
                Datafolha: Após ensino remoto, 76% precisam de reforço na
                alfabetização
              </TitleNotice>
            </>
          </ContainerRecentNotice>
          <ContainerRecentNotice>
            <Img src={diversidade} />
            <>
              <TextType color="green" margin="oneRem">
                DIVERSIDADE
              </TextType>
              <TitleNotice fontSize="Recent">
                Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados
                hoje
              </TitleNotice>
            </>
          </ContainerRecentNotice>
        </ContainerRecentNotices>
      </ContainerMainSubjects>
      <ContainerOthersNotices>
        <ContainerTypeNotice>
          <ContainerOtherNotice>
            <TargetType color="red" />
            <TitleNotice>
              Quem não tiver valores a receber poderá ter nas próximas fases,
              diz BC
            </TitleNotice>
          </ContainerOtherNotice>
          <ContainerOtherNotice>
            <TargetType color="red" />
            <TitleNotice>
              Quem não tiver valores a receber poderá ter nas próximas fases,
              diz BC
            </TitleNotice>
          </ContainerOtherNotice>
        </ContainerTypeNotice>
        <ContainerTypeNotice>
          <ContainerOtherNotice>
            <TargetType color="red" />
            <TitleNotice>
              Quem não tiver valores a receber poderá ter nas próximas fases,
              diz BC
            </TitleNotice>
          </ContainerOtherNotice>
          <ContainerOtherNotice>
            <TargetType color="red" />
            <TitleNotice>
              Quem não tiver valores a receber poderá ter nas próximas fases,
              diz BC
            </TitleNotice>
          </ContainerOtherNotice>
        </ContainerTypeNotice>
        <ContainerTypeNotice>
          <ContainerOtherNotice>
            <TargetType color="blue" />
            <TitleNotice>
              Datafolha: Após ensino remoto, 76% precisam de reforço na
              alfabetização
            </TitleNotice>
          </ContainerOtherNotice>
          <ContainerOtherNotice>
            <TargetType color="blue" />
            <TitleNotice>
              Datafolha: Após ensino remoto, 76% precisam de reforço na
              alfabetização
            </TitleNotice>
          </ContainerOtherNotice>
        </ContainerTypeNotice>
        <ContainerTypeNotice>
          <ContainerOtherNotice>
            <TargetType color="green" />
            <TitleNotice>
              Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados
            </TitleNotice>
          </ContainerOtherNotice>
          <ContainerOtherNotice>
            <TargetType color="green" />
            <TitleNotice>
              Lotomania: com prêmio de R$ 5 milhões, veja os números sorteados
            </TitleNotice>
          </ContainerOtherNotice>
        </ContainerTypeNotice>
      </ContainerOthersNotices>
    </Content>
  );
}
