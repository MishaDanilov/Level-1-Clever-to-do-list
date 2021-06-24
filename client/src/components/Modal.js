import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContex';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

export function Modal({ closeModal, items, day }) {
  const auth = useContext(AuthContext);
  const message = useMessage();

  const { request, error, clearError } = useHttp();

  const [ form, setForm ] = useState({
    title: '',
    content: '',
    hours: '',
    minutes: '',
    date: '',
  });

  const changeForm = (event) => {
    setForm({ ...form, [ event.target.name ]: event.target.value });
  };

  const addTask = async () => {
    try {
      if (!form.title || !form.content || !form.hours || !form.minutes) {
        throw new Error('Заполните все поля.');
      }
      const dateR = `${ day.getFullYear() }-${
        day.getMonth() < 10
          ? `0${ JSON.stringify(day.getMonth() + 1) }`
          : JSON.stringify(day.getMonth() + 1)
      }-${
        day.getDate() < 10
          ? `0${ JSON.stringify(day.getDate()) }`
          : JSON.stringify(day.getDate())
      }T${ form.hours < 10 ? `0${ form.hours }` : form.hours }:${
        form.minutes < 10 ? `0${ form.minutes }` : form.minutes
      }:00`;
      const data = await request(`/tasks/${ auth.userId }`, 'POST', {
        title: form.title,
        content: form.content,
        date: dateR, // "2021-06-24T10:30:00.000Z"
      });
      if (data) {
        const { title, content, date, done, id } = data;
        const result = { title, content, date: new Date(date), done, id };
        auth.setTaskList(auth.taskList.concat(result));
      } else throw new Error('Неверный формат ввода');
    } catch (e) {
      message(e.message);
    }
  };

  const removeTask = async (id) => {
    try {
      const data = await request(`/tasks/${ id }`, 'delete');
      if (!data) throw new Error('Задачи не существует.');
      else if (data.status) {
        auth.changeEvents(auth.userId);
        message(data.message);
      } else message(data.message);
    } catch (e) {
      message(e.message);
    }
  };

  const setDoneTask = async (id) => {
    try {
      const setDoneValue = () =>
        new Promise((resolve, reject) => {
          const result = auth.taskList.find((elem) => elem.id === id);
          if (result.done) {
            result.done = false;
            resolve(result);
          } else {
            result.done = true;
            resolve(result);
          }
          reject();
        });
      const result = await setDoneValue();
      await request(`/tasks/${ id }`, 'PUT', {
        title: result.title,
        content: result.content,
        date: result.date,
        done: result.done,
      });
      auth.setTaskList(auth.taskList);
    } catch (e) {
      message(e.message);
    }
  };

  const sendEdit = async (editForm, taskID) => {
    try {
      if (!editForm.title || !editForm.content) {
        throw new Error('Заполните все поля.');
      }
      const setValue = () =>
        new Promise((resolve, reject) => {
          const result = auth.taskList.find((elem) => elem.id === taskID);
          if (result) {
            result.title = editForm.title;
            result.content = editForm.content;
            resolve(result);
          }
          reject();
        });
      const result = await setValue();
      await request(`/tasks/${ taskID }`, 'PUT', {
        title: result.title,
        content: result.content,
        date: result.date,
        done: result.done,
      });
      auth.setTaskList(auth.taskList);
      message('Задача изменена');
    } catch (e) {
      message(e.message);
    }
  };

  useEffect(() => {
    message(error);
    clearError();
  }, [ error, message, clearError ]);

  return (
      <React.Fragment>
          <div id="modal1" className="modal modal-fixed-footer">
              <div className="modal-content">
                  <ul>
                      {items
              .filter(
                (elem) =>
                  elem.date.getDate() === day.getDate() &&
                  elem.date.getMonth() === day.getMonth()
              )
              .map((item, index) => (
                  <TodoItem
                  setDoneTaskById={ setDoneTask }
                  removeTaskById={ removeTask }
                  title={ item.title }
                  content={ item.content }
                  date={ item.date }
                  indexItem={ index }
                  id={ item.id }
                  done={ item.done }
                  sendEditTask={ sendEdit }
                />
              ))}
                  </ul>
              </div>
              <div className="modal-footer">
                  <div className="footer-nav-block">
                      <div className="footer-add-task">
                          <div className="row">
                              <form className="col s12">
                                  <div className="row">
                                      <div className="input-field col s5">
                                          <i className="material-icons prefix">title</i>
                                          <input
                        id="titleAdd"
                        type="text"
                        className="validate"
                        name="title"
                        onChange={ changeForm }
                      />
                                          <label htmlFor="titleAdd">Название</label>
                                      </div>
                                      <div className="input-field col s3">
                                          <i className="material-icons prefix">access_time</i>
                                          <input
                        id="hours"
                        type="text"
                        className="validate"
                        name="hours"
                        onChange={ changeForm }
                      />
                                          <label htmlFor="hours">Часы</label>
                                      </div>
                                      <div className="input-field col s3">
                                          <i className="material-icons prefix">access_time</i>
                                          <input
                        id="minutes"
                        type="text"
                        className="validate"
                        name="minutes"
                        onChange={ changeForm }
                      />
                                          <label htmlFor="minutes">Минуты</label>
                                      </div>
                                      <div className="input-field col s12">
                                          {/* <i className="material-icons prefix">mode_edit</i> */}
                                          <textarea
                        id="icon_prefix2"
                        className="materialize-textarea textarea-task"
                        name="content"
                        onChange={ changeForm }
                      ></textarea>
                                          <label htmlFor="icon_prefix2">Описание</label>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="footer-nav-content">
                          <div className="footer-nav">
                              <a className="button-add-task" onClick={ addTask } href="#!">
                                  <i className="Medium material-icons">add</i>
                                  Добавить задачу
                              </a>
                              <a
                  href="#!"
                  className="modal-close waves-effect waves-green btn-flat"
                  onClick={ closeModal }
                >
                                  Закрыть
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </React.Fragment>
  );
}
