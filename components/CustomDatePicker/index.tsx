// @ts-nocheck
import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const days = ['M', 'S', 'S', 'R', 'K', 'J', 'S'];
const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember'
];

const locale = {
  localize: {
    day: (n: any) => days[n],
    month: (n: any) => months[n]
  },
  formatLong: {
    date: () => 'mm/dd/yyyy'
  }
};

function CustomDatePicker({ defval }: { defval: string }) {
  const [startDate, setStartDate] = useState(undefined);

  // eslint-disable-next-line react/no-unstable-nested-components
  const StartInput = forwardRef(
    ({ value, onClick }: { value: any; onClick: any }, ref: any) => (
      <button
        type="button"
        className="custom-input"
        onClick={onClick}
        ref={ref}
      >
        <FaCalendarAlt className="transformicon" />
        {value || defval}
      </button>
    )
  );

  return (
    <DatePicker
      locale={locale}
      selected={startDate}
      minDate={new Date()}
      onChange={(e) => setStartDate(e)}
      customInput={<StartInput value onClick />}
    />
  );
}
export default CustomDatePicker;
