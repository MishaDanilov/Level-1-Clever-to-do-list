import { useState, useCallback } from 'react';
import { useHttp } from './http.hook';

export const useTask = () => {
  const { request } = useHttp();
  const [ taskList, setTaskList ] = useState([]);

  const changeEvents = useCallback(
    async (userId) => {
      const data = await request(`/tasks/${ userId }`, 'GET');
      const result = data.map((elem) => {
        const { title, date, content, done, id } = elem;
        return { title, content, date: new Date(date), done, id };
      });
      setTaskList(result);
    },
    [ request ]
  );

  return { taskList, changeEvents, setTaskList };
};
