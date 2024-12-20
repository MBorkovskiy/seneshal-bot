/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateRange } from "react-date-range";
import { ru } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./custom-styles.css";

export const CustomRangeDatePicker = ({
  range,
  setRange,
  disabledDate,
}: any) => {
  const dayContentRenderer = (day: Date) => {
    const isBlocked =
      day?.getDate() === disabledDate?.getDate() &&
      day?.getMonth() === disabledDate?.getMonth() &&
      day?.getFullYear() === disabledDate?.getFullYear();
    return (
      <div className={isBlocked ? " blocked-date" : "rdrDayNumber"}>
        {day?.getDate()}
      </div>
    );
  };
  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setRange([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={range}
      locale={ru}
      dayContentRenderer={dayContentRenderer}
    />
  );
};
