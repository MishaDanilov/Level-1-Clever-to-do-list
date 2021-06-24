import { React, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContex';

function NavBar() {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    auth.setTaskList([]);
    history.push('/');
  };

  return (
      <nav>
          <div className="nav-wrapper blue-grey darken-1">
              <NavLink to="/tasks" className="brand-logo left-margin">
                  ToDo
              </NavLink>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                      <NavLink to="/tasks">Задачи</NavLink>
                  </li>
                  <li>
                      <a href="/" onClick={ logoutHandler }>
                          Выйти
                      </a>
                  </li>
              </ul>
          </div>
      </nav>
  );
}

export { NavBar };
