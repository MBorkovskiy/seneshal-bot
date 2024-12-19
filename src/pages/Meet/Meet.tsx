import { FormEvent, useState } from "react";
import "react-day-picker/style.css";
import "./meet.css";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import InfoIcon from "@mui/icons-material/Info";
import { CustomDatePicker } from "../../components/CustomDatePicker/CustomDatePicker";
import emailjs from "@emailjs/browser";
import { matchIsValidTel, MuiTelInput } from "mui-tel-input";

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
  const [childInteresting, setChildInteresting] = useState("");
  const [tel, setTel] = useState("");
  const [telError, setTelError] = useState(true);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [startDate, setStartDate] = useState<Dayjs | string | null>(
    dayjs(new Date())
  );
  const [endDate, setEndDate] = useState<Dayjs | string | null>(
    dayjs(new Date())
  );

  const sendHandler = (e: FormEvent) => {
    e.preventDefault();
    const templateParams = {
      message: `Я - ${iAm}
       Количество людей-${peopleCount}
       Потребуется ли проживание-${isLiving}
       Мероприятие-${format}
       Свое мероприятие-${customFormat}
       Выездная церемония-${isTripCeremony}
       Я приезжаю-${receive}
       С питомцем-${withPet}
       Интересы-${interesting}
       Интересы ребенка-${childInteresting}
       Телефон ${tel}
       Дата заезда-${dayjs(startDate).toISOString().split("T")[0]}
       Дата выезда-${dayjs(endDate).toISOString().split("T")[0]}`,
    };
    emailjs
      .send("service_wiqis5e", "template_mojkzkq", templateParams, {
        publicKey: "Z-CHf5po4Vznvhx6a",
      })
      .then(
        (response) => {
          setOpenSnackBar(true);
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const telHandler = (e: string) => {
    const isValid = matchIsValidTel(e);

    if (isValid) {
      setTelError(false);
    } else {
      setTelError(true);
    }

    setTel(e);
  };

  return (
    <div className="meet-wrapper">
      <Snackbar
        open={openSnackBar}
        onClose={() => setOpenSnackBar(false)}
        message="Заявка успешно отправлена"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
      />
      <div className="step">
        <FormControl fullWidth size="small">
          <InputLabel>Я</InputLabel>
          <Select
            value={iAm}
            onChange={(e) => setIAm(e.target.value)}
            label="Я"
            name="message"
          >
            <MenuItem value={"left"}>Корпоративный</MenuItem>
            <MenuItem value={"right"}>Частный</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="step">
        <CustomDatePicker
          value={dayjs(startDate)}
          setValue={setStartDate}
          label={"Дата заселения"}
        />
        -
        <CustomDatePicker
          value={dayjs(endDate)}
          setValue={setEndDate}
          label={"Дата выселения"}
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
              <div className="description">
                <InfoIcon color="primary" />
                <p className="description">
                  Для отдыха с детьми семейные пары чаще всего выбирают Диамант,
                  Базель, Латиф
                </p>
              </div>
            )}
            {withPet && (
              <div className="description">
                <InfoIcon color="primary" />
                <p className="description">
                  Проживание с животными доступно только в номерах Диамант,
                  Базель, Латиф
                </p>
              </div>
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
          {receive === "С семьей" && (
            <div className="step">
              <FormControl fullWidth size="small">
                <InputLabel>Моего ребенка интересует</InputLabel>
                <Select
                  value={childInteresting}
                  onChange={(e) => setChildInteresting(e.target.value)}
                  label="Моего ребенка интересует"
                >
                  <MenuItem value={"Семейный отдых"}>Семейный отдых</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}

          {childInteresting === "Семейный отдых" && (
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
      <MuiTelInput
        value={tel}
        onChange={telHandler}
        forceCallingCode
        onlyCountries={["RU"]}
        defaultCountry="RU"
        error={telError}
      />
      <button
        onClick={sendHandler}
        disabled={telError}
        className="button secondary-button"
      >
        Отправить заявку
      </button>
    </div>
  );
};
