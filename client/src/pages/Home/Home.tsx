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
import { useEffect, useState } from "react";
import { News } from "@models/News";
import { NewsService } from "@services/newsService";
import React from "react";

export default function Home() {
  const [news, setNews] = useState<News[]>([]);
  const [otherNews, setOtherNews] = useState<News[]>([]);

  const getNews = async () => {
    const result = await NewsService.GetLastedNews();
    if (result) {
      setNews(result);
    }
  };

  const getNewsByType = async () => {
    const result = await NewsService.GetAll();

    if (result) {
      setOtherNews(result);
    }
  };

  useEffect(() => {
    getNews();
    getNewsByType();
  }, []);

  return (
    <Content>
      <ContainerMainSubjects>
        {news !== undefined && news.length > 0 ? (
          <>
            {news.map((row) => (
              <>
                {row.type === "ECONOMIA" ? (
                  <ContainerPrincipalNotice key={row.id}>
                    <TextType color="red">{row.type}</TextType>
                    <TitleNotice fontSize="Principal">{row.resume}</TitleNotice>
                  </ContainerPrincipalNotice>
                ) : (
                  <ContainerRecentNotices>
                    <ContainerRecentNotice key={row.id}>
                      <Img
                        src={
                          row.type === "DIVERSIDADE" ? diversidade : educacao
                        }
                      />
                      <>
                        <TextType
                          color={row.type === "DIVERSIDADE" ? "green" : "blue"}
                          margin="oneRem"
                        >
                          {row.type}
                        </TextType>
                        <TitleNotice fontSize="Recent">
                          {row.resume}
                        </TitleNotice>
                      </>
                    </ContainerRecentNotice>
                  </ContainerRecentNotices>
                )}
              </>
            ))}
          </>
        ) : (
          <></>
        )}
      </ContainerMainSubjects>
      <ContainerOthersNotices>
        <ContainerTypeNotice width="economy">
          {otherNews !== undefined && otherNews.length > 0 && (
            <>
              {otherNews.map((row) => (
                <React.Fragment key={row.id}>
                  {row.type === "ECONOMIA" && (
                    <ContainerOtherNotice key={row.id}>
                      <TargetType color="red" />
                      <TitleNotice>{row.title}</TitleNotice>
                    </ContainerOtherNotice>
                  )}
                </React.Fragment>
              ))}
            </>
          )}
        </ContainerTypeNotice>
        <ContainerTypeNotice>
          {otherNews !== undefined && otherNews.length > 0 && (
            <>
              {otherNews.map((row) => (
                <React.Fragment key={row.id}>
                  {row.type === "EDUCACAO" && (
                    <ContainerOtherNotice key={row.id}>
                      <TargetType color="blue" />
                      <TitleNotice>{row.title}</TitleNotice>
                    </ContainerOtherNotice>
                  )}
                </React.Fragment>
              ))}
            </>
          )}
        </ContainerTypeNotice>
        <ContainerTypeNotice>
          {otherNews !== undefined && otherNews.length > 0 && (
            <>
              {otherNews.map((row) => (
                <React.Fragment key={row.id}>
                  {row.type === "DIVERSIDADE" && (
                    <ContainerOtherNotice key={row.id}>
                      <TargetType color="green" />
                      <TitleNotice>{row.title}</TitleNotice>
                    </ContainerOtherNotice>
                  )}
                </React.Fragment>
              ))}
            </>
          )}
        </ContainerTypeNotice>
      </ContainerOthersNotices>
    </Content>
  );
}
