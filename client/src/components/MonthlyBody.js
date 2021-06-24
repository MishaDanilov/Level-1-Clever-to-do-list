import React, { useContext } from 'react';
import { useMonthlyCalendar } from '@zach.codes/react-calendar';
import { format, getDay, isSameDay } from 'date-fns';
import { daysInWeek } from '../shared';

const MonthlyBodyContext = React.createContext({});

export function useMonthlyBody() {
  return useContext(MonthlyBodyContext);
}

export const handleOmittedDays = ({ days, omitDays, locale }) => {
  let headings = daysInWeek({ locale });
  let daysToRender = days;

  // omit the headings and days of the week that were passed in
  if (omitDays) {
    headings = daysInWeek({ locale }).filter(
      (day) => !omitDays.includes(day.day)
    );
    daysToRender = days.filter((day) => !omitDays.includes(getDay(day)));
  }

  // omit the padding if an omitted day was before the start of the month
  let firstDayOfMonth = getDay(daysToRender[ 0 ]);
  if (omitDays) {
    const subtractOmittedDays = omitDays.filter(
      (day) => day < firstDayOfMonth
    ).length;
    firstDayOfMonth -= subtractOmittedDays;
  }
  const padding = new Array(firstDayOfMonth).fill(0);

  return { headings, daysToRender, padding };
};

// to prevent these from being purged in production, we make a lookup object
const headingClasses = {
  l3: 'lg:grid-cols-3',
  l4: 'lg:grid-cols-4',
  l5: 'lg:grid-cols-5',
  l6: 'lg:grid-cols-6',
  l7: 'lg:grid-cols-7',
};

function MonthlyBody({ omitDays, events, children, modal }) {
  const { days, locale } = useMonthlyCalendar();
  const { headings, daysToRender, padding } = handleOmittedDays({
    days,
    omitDays,
    locale,
  });

  const classes = [];

  if (modal) {
    classes.push('disabled');
  }

  const headingClassName = 'border-b-2 p-2 border-r-2 lg:block hidden';
  return (
      <div className={ classes.join(' ') }>
          <div className="bg-white border-l-2 border-t-2">
              <div
          className={ `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ${
            headingClasses[ `l${ headings.length }` ]
          }` }
        >
                  {headings.map((day) => (
                      <div
              key={ day.day }
              className={ headingClassName }
              aria-label="Day of Week"
            >
                          {day.label}
                      </div>
          ))}
                  {padding.map((_, index) => (
                      <div
              key={ index }
              className={ headingClassName }
              aria-label="Empty Day"
            />
          ))}
                  {daysToRender.map((day) => (
                      <MonthlyBodyContext.Provider
              key={ day.toISOString() }
              value={ {
                day,
                events: events.filter((data) => isSameDay(data.date, day)),
              } }
            >
                          {children}
                      </MonthlyBodyContext.Provider>
          ))}
              </div>
          </div>
      </div>
  );
}

function MonthlyDay({ renderDay, setModal }) {
  const { locale } = useMonthlyCalendar();
  const { day, events } = useMonthlyBody();
  const dayNumber = format(day, 'd', { locale });

  const openModal = (dayR) => {
    setModal(dayR);
  };

  return (
      <div
      id={ `${ day.getDate() }` }
      aria-label={ `Events for day ${ dayNumber }` }
      className="h-48 p-2 border-b-2 border-r-2 hover-day-body"
      onClick={ () => {
        openModal(day);
      } }
    >
          <div className="flex justify-between">
              <div className="font-bold">{dayNumber}</div>
              <div className="lg:hidden block">{format(day, 'EEEE', { locale })}</div>
          </div>
          <ul className="divide-gray-200 divide-y overflow-hidden max-h-36 overflow-y-auto">
              {renderDay(events)}
          </ul>
      </div>
  );
}

export { MonthlyBody, MonthlyDay };
