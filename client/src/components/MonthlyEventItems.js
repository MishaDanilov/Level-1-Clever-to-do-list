import { useContext } from 'react';
import { AuthContext } from '../context/AuthContex';

export const DefaultMonthlyEventItem = ({ title, date, id }) => {
  const auth = useContext(AuthContext);
  return (
      <li className="py-2">
          <div className="flex text-sm flex-1 justify-between">
              <h3
          className={ `font-medium ${
            auth.taskList.find((elem) => elem.id === id).done ? 'done' : ''
          }` }
        >
                  {title}
              </h3>
              <p className="text-gray-500">{date}</p>
          </div>
      </li>
  );
};
