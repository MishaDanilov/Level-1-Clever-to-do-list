import { useState, useEffect, useContext } from 'react';
import { format, startOfMonth } from 'date-fns';
import { MonthlyCalendar } from '@zach.codes/react-calendar';
import { AuthContext } from '../context/AuthContex';
import { useHttp } from '../hooks/http.hook';
import { DefaultMonthlyEventItem } from '../components/MonthlyEventItems';
import { MonthlyBody, MonthlyDay } from '../components/MonthlyBody';
import { MonthlyNav } from '../components/MonthlyNav';
import { Modal } from '../components/Modal';
import { useMessage } from '../hooks/message.hook';

const TasksPage = () => {
  const [ currentMonth, setCurrentMonth ] = useState(startOfMonth(new Date()));
  const message = useMessage();
  const { error, clearError } = useHttp();
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (JSON.stringify(auth.taskList) === '[]' && auth.userId) {
      console.log('request...');
      auth.changeEvents(auth.userId);
    }
  }, []);

  useEffect(() => {
    message(error);
    clearError();
  }, [ error, message, clearError ]);

  const [ modal, setModal ] = useState(null);

  const closeModal = () => {
    setModal(null);
  };

  return (
      <MonthlyCalendar
      currentMonth={ currentMonth }
      onCurrentMonthChange={ (date) => {
        setCurrentMonth(date);
      } }
    >
          {modal && (
          <Modal closeModal={ closeModal } items={ auth.taskList } day={ modal } />
      )}
          <MonthlyNav />
          <MonthlyBody events={ auth.taskList } modal={ modal }>
              <MonthlyDay
          renderDay={ (data) =>
            data.map((item, index) => (
                <DefaultMonthlyEventItem
                key={ index }
                title={ item.title }
                date={ format(item.date, 'k:mm') }
                id={ item.id }
              />
            ))
          }
          setModal={ setModal }
        />
          </MonthlyBody>
      </MonthlyCalendar>
  );
};

export { TasksPage };
