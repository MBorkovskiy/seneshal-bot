import { useState } from "react";
import "react-day-picker/style.css";
import "./meet.css";
import {
  Checkbox,
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
  const [receive, setReceive] = useState("");
  const [withPet, setWithPet] = useState(false);
  const [interesting, setInteresting] = useState("");
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
      {iAm === "right" && (
        <>
          <div>
            <div className="step">
              <FormControl fullWidth size="small">
                <InputLabel>Я приезжаю</InputLabel>
                <Select
                  value={receive}
                  onChange={(e) => setReceive(e.target.value)}
                  label="Я приезжаю"
                >
                  <MenuItem value={"Один"}>Один</MenuItem>
                  <MenuItem value={"С парой"}>С парой</MenuItem>
                  <MenuItem value={"С семьей"}>С семьей</MenuItem>
                </Select>
              </FormControl>
              <div className="withPet">
                <Checkbox
                  checked={withPet}
                  onChange={() => setWithPet((bool) => !bool)}
                />
                <span>С питомцем</span>
              </div>
            </div>
            {receive === "С семьей" && (
              <p className="description">
                Для отдыха с детьми семейные пары чаще всего выбирают Диамант,
                Базель, Латиф
              </p>
            )}
            {withPet && (
              <p className="description">
                Проживание с животными доступно только в номерах Диамант,
                Базель, Латиф
              </p>
            )}
          </div>

          <div className="step">
            <FormControl fullWidth size="small">
              <InputLabel>Меня интересует</InputLabel>
              <Select
                value={interesting}
                onChange={(e) => setInteresting(e.target.value)}
                label="Меня интересует"
              >
                <MenuItem value={"Активный отдых"}>Активный отдых</MenuItem>
                <MenuItem value={"Размеренный отдых"}>
                  Размеренный отдых
                </MenuItem>
                {receive === "С семьей" && (
                  <MenuItem value={"Семейный отдых"}>Семейный отдых</MenuItem>
                )}
              </Select>
            </FormControl>
          </div>
          {interesting === "Активный отдых" && (
            <div className="checkboxes">
              <div>
                <Checkbox />
                <p>Катание на лошадях</p>
              </div>

              <div>
                <Checkbox />
                <p>Катание на санях, запряженные хаски или оленями</p>
              </div>
              <div>
                <Checkbox />
                <p>Мастер-классы</p>
              </div>
              <div>
                <Checkbox />
                <p>Йога</p>
              </div>
            </div>
          )}
          {interesting === "Размеренный отдых" && (
            <div className="checkboxes">
              <div>
                <Checkbox />
                <p>СПА-программы</p>
              </div>

              <div>
                <Checkbox />
                <p>Chefs Table</p>
              </div>
            </div>
          )}
          {interesting === "Семейный отдых" && (
            <div className="checkboxes">
              <div>
                <Checkbox />
                <p>Мастер-классы для детей</p>
              </div>

              <div>
                <Checkbox />
                <p>Аквагрим</p>
              </div>
              <div>
                <Checkbox />
                <p>Кукольный театр</p>
              </div>
              <div>
                <Checkbox />
                <p>Услуги няни</p>
              </div>
            </div>
          )}
        </>
      )}
      <button disabled className="button secondary-button">
        Отправить заявку
      </button>
    </div>
  );
};
