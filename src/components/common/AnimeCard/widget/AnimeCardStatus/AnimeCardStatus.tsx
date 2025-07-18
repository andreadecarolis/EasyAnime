import { AnimeCardStatusProps } from "./types/AnimeCardStatus.types";
import { BookmarkCheck, BookmarkX, CalendarCheck2, CircleQuestionMark, MonitorPause, MonitorPlay } from "lucide-react";
import "./AnimeCardStatus.scss";

const AnimeCardStatus: React.FC<AnimeCardStatusProps> = ({ status }) => {
  const info: { label: string; icon?: React.ReactNode } = { label: "", icon: undefined };

  switch (status) {
    case "CANCELLED": {
      info.label = "Cancellato";
      info.icon = <BookmarkX size={14} />;
      break;
    }
    case "FINISHED": {
      info.label = "Completato";
      info.icon = <BookmarkCheck size={14} />;
      break;
    }
    case "HIATUS": {
      info.label = "In pausa";
      info.icon = <MonitorPause size={14} />;
      break;
    }
    case "NOT_YET_RELEASED": {
      info.label = "Programmato";
      info.icon = <CalendarCheck2 size={14} />;
      break;
    }
    case "RELEASING": {
      info.label = "In corso";
      info.icon = <MonitorPlay size={14} />;
      break;
    }
    default: {
      info.label = "N/A";
      info.icon = <CircleQuestionMark size={14} />;
      break;
    }
  }

  return (
    <>
      {info.icon}
      <span>{info.label}</span>
    </>
  );
};

export default AnimeCardStatus;
