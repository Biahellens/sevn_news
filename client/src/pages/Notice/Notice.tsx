import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Main,
  ContentTitle,
  TextType,
  TitleNotice,
  SubTitleNotice,
  TextReference,
} from "./style";
import { NewsService } from "@services/newsService";

// components
import Carousel from "@components/Carousel/Carousel";

export default function Notice() {
  const { id } = useParams<{ id: string }>();

  const [newData, setNewData] = useState({
    id: "",
    date: "",
    redator: "",
    type: "",
    image: "",
    title: "",
    resume: "",
    text: [],
  });

  const getNew = async () => {
    if (id) {
      const result = await NewsService.GetById(id);

      if (result) {
        setNewData(result);
      }
    }
  };

  useEffect(() => {
    getNew();
  }, [id]);

  function formatDate(dateISO: string): string {
    const dateObj = new Date(dateISO);
    return dateObj.toLocaleDateString("pt-BR");
  }

  function formatTime(dateISO: string): string {
    const dateObj = new Date(dateISO);
    const time = dateObj
      .toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(":", "h");
    return time;
  }

  const datePart = newData.date ? newData.date.split("T")[0] : "";
  const timePart = newData.date ? newData.date.split("T")[1] : "";

  return (
    <Main>
      <ContentTitle>
        <TextType
          color={
            newData.type === "DIVERSIDADE"
              ? "green"
              : newData.type === "ECONOMIA"
              ? "red"
              : "blue"
          }
        >
          {newData.type}
        </TextType>
        <TitleNotice fontSize="Principal">{newData.title}</TitleNotice>
        <SubTitleNotice>{newData.resume}</SubTitleNotice>
        <TextReference>
          {newData.date
            ? `${formatDate(datePart)} às ${formatTime(timePart)}`
            : "Data Inválida"}
          , Por: {newData.redator}
        </TextReference>
      </ContentTitle>
      <Carousel notice={true} />
    </Main>
  );
}
