/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateRange } from "react-date-range";
import { ru } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./custom-styles.css";

export const CustomRangeDatePicker = ({ range, setRange }: any) => {
  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setRange([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={range}
      locale={ru}
    />
  );
};
