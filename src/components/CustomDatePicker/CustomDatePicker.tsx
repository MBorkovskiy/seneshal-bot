import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ruRU } from "@mui/x-date-pickers/locales";
import dayjs from "dayjs";
import "dayjs/locale/ru";

interface ISpDateInput {
  value: null | Dayjs;
  label: string;
  setValue: (val: Dayjs | null | string) => void;
  time?: boolean;
  required?: boolean;
  disabled?: boolean;
  size?: string;
}

export const CustomDatePicker = ({
  value,
  label,
  setValue,
  required,
  disabled,
}: ISpDateInput) => {
  dayjs.locale("ru");

  const ruLocale =
    ruRU.components.MuiLocalizationProvider.defaultProps.localeText;

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="ru"
      localeText={ruLocale}
    >
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        format="DD.MM.YYYY"
        slotProps={{
          textField: {
            fullWidth: true,
            required,
            disabled: disabled,
            size: "small",
          },
        }}
      />
    </LocalizationProvider>
  );
};
