import { React } from 'react';
import { useMonthlyCalendar } from '@zach.codes/react-calendar';
import { format, getYear, addMonths, subMonths } from 'date-fns';

export const MonthlyNav = () => {
  const { currentMonth, onCurrentMonthChange } = useMonthlyCalendar();

  return (
      <div className="nav-flex mb-4">
          <button
        onClick={ () => {
          onCurrentMonthChange(subMonths(currentMonth, 1));
        } }
        className="cursor-pointer nav-button"
      >
              <i className="material-icons">arrow_back</i>
          </button>
          <div className="ml-4 mr-4 w-32 text-center nav-month">
              {format(
          currentMonth,
          getYear(currentMonth) === getYear(new Date()) ? 'LLLL' : 'LLLL yyyy'
        )}
          </div>
          <button
        onClick={ () => onCurrentMonthChange(addMonths(currentMonth, 1)) }
        className="cursor-pointer nav-button"
      >
              <i className="material-icons">arrow_forward</i>
          </button>
      </div>
  );
};
