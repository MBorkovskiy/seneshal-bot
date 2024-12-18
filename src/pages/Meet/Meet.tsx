import { useState } from "react";
import "react-day-picker/style.css";
import "./meet.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

import { CustomDatePicker } from "../../components/CustomDatePicker/CustomDatePicker";
export const Meet = () => {
  const [iAm, setIAm] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [isLiving, setIsLiving] = useState("");
  const [format, setFormat] = useState("");
  const [customFormat, setCustomFormat] = useState("");
  const [isTripCeremony, setIsTripCeremony] = useState("");
  const [date, setDate] = useState<Dayjs | string | null>(dayjs(new Date()));

  return (
    <div className="meet-wrapper">
      <div className="step">
        <FormControl fullWidth size="small">
          <InputLabel>Я</InputLabel>
          <Select
            value={iAm}
            onChange={(e) => setIAm(e.target.value)}
            label="Я"
          >
            <MenuItem value={"left"}>Корпоративный</MenuItem>
            <MenuItem value={"right"}>Частный</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="step">
        <CustomDatePicker
          value={dayjs(date)}
          setValue={setDate}
          label={"Меня интересует"}
        />
      </div>
      {iAm === "left" && (
        <>
          <div className="step">
            <FormControl fullWidth size="small">
              <InputLabel>Мой формат</InputLabel>
              <Select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                label="Мой формат"
              >
                <MenuItem value={"Свадьба"}>Свадьба</MenuItem>
                <MenuItem value={"Банкет"}>Банкет</MenuItem>
                <MenuItem value={"Девичник"}>Девичник</MenuItem>
                <MenuItem value={"Мальчишник"}>Мальчишник</MenuItem>
                <MenuItem value={"Ретрит"}>Ретрит</MenuItem>
                <MenuItem value={"Свое мероприятие"}>Свое мероприятие</MenuItem>
              </Select>
            </FormControl>
          </div>
          {format === "Свадьба" && (
            <div className="step">
              <FormControl fullWidth size="small">
                <InputLabel>Выездная церемония</InputLabel>
                <Select
                  value={isTripCeremony}
                  onChange={(e) => setIsTripCeremony(e.target.value)}
                  label="Выездная церемония"
                >
                  <MenuItem value={"Да"}>Да</MenuItem>
                  <MenuItem value={"Нет"}>Нет</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
          {format === "Свое мероприятие" && (
            <div className="step">
              <TextField
                size="small"
                value={customFormat}
                onChange={(e) => setCustomFormat(e.target.value)}
                placeholder="Опишите свое мероприятие"
                fullWidth
              />
            </div>
          )}

          <div className="step">
            <FormControl fullWidth size="small">
              <InputLabel>Количество человек</InputLabel>
              <Select
                value={peopleCount}
                onChange={(e) => setPeopleCount(e.target.value)}
                label="Количество человек"
              >
                <MenuItem value={"До 20"}>До 20</MenuItem>
                <MenuItem value={"До 35"}>До 35</MenuItem>
                <MenuItem value={"До 120"}>До 120</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="step">
            <FormControl fullWidth size="small">
              <InputLabel>Потребуется ли проживание</InputLabel>
              <Select
                value={isLiving}
                onChange={(e) => setIsLiving(e.target.value)}
                label="Потребуется ли проживание"
              >
                <MenuItem value={"Да"}>Да</MenuItem>
                <MenuItem value={"Нет"}>Нет</MenuItem>
              </Select>
            </FormControl>
          </div>
        </>
      )}
      <button disabled className="button secondary-button">
        Отправить заявку
      </button>
    </div>
  );
};
