import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContex';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

export function TodoItem(props) {
  const { error, clearError } = useHttp();
  const [ edit, setEdit ] = useState(false);
  const auth = useContext(AuthContext);
  const message = useMessage();

  const [ formEdit, setFormEdit ] = useState({
    title: props.title,
    content: props.content,
    date: props.date,
    done: props.done,
  });

  const changeEditForm = (event) => {
    setFormEdit({ ...formEdit, [ event.target.name ]: event.target.value });
  };

  useEffect(() => {
    window.M.updateTextFields();
  }, [ edit ]);

  useEffect(() => {
    message(error);
    clearError();
  }, [ error, message, clearError ]);

  if (edit) {
    return (
        <li className="collection-tasks">
            <div className="content-task">
                <a
            href="#!"
            style={ { width: '5%' } }
            className={
              !auth.taskList.find((elem) => elem.id === props.id).done
                ? 'active-task'
                : 'done-task'
            }
            onClick={ () => props.setDoneTaskById(props.id) }
          >
                    <i className="material-icons">grade</i>
                </a>
                <div className="left-margin" style={ { width: '95%' } }>
                    <div className="input-field col">
                        <input
                id="title"
                type="text"
                className="validate"
                name="title"
                onChange={ changeEditForm }
                value={ formEdit.title }
              />
                        <label htmlFor="title">Название</label>
                    </div>
                    <div className="input-field col">
                        <textarea
                id="icon_prefix2"
                className="materialize-textarea textarea-task"
                name="content"
                onChange={ changeEditForm }
                value={ formEdit.content }
              ></textarea>
                        <label htmlFor="icon_prefix2">Описание</label>
                    </div>
                </div>
            </div>
            <div className="nav-task">
                <a
            href="#!"
            className="remove-task"
            title="Применить"
            style={ { color: 'rgb(77,47,194)' } }
            onClick={ () => {
              props.sendEditTask(formEdit, props.id);
            } }
          >
                    <i className="material-icons">send</i>
                </a>
                <a
            href="#!"
            className="remove-task"
            title="Изменить"
            onClick={ () => setEdit(false) }
          >
                    <i className="material-icons">create</i>
                </a>
                <a
            href="#!"
            className="remove-task"
            title="Удалить"
            onClick={ () => props.removeTaskById(props.id) }
          >
                    <i className="material-icons">delete</i>
                </a>
            </div>
        </li>
    );
  }
  return (
      <li className="collection-tasks">
          <div className="content-task">
              <a
          href="#!"
          className={
            !auth.taskList.find((elem) => elem.id === props.id).done
              ? 'active-task'
              : 'done-task'
          }
          onClick={ () => props.setDoneTaskById(props.id) }
        >
                  <i className="material-icons">grade</i>
              </a>
              <div className="left-margin">
                  <h1
            className={
              !auth.taskList.find((elem) => elem.id === props.id).done
                ? 'title-task'
                : 'done-title-task'
            }
          >
                      {props.title}
                  </h1>
                  <p>{props.content}</p>
              </div>
          </div>
          <div className="nav-task">
              <a
          href="#!"
          className="remove-task"
          title="Изменить"
          onClick={ () => setEdit(true) }
        >
                  <i className="material-icons">create</i>
              </a>
              <a
          href="#!"
          className="remove-task left-margin"
          title="Удалить"
          onClick={ () => props.removeTaskById(props.id) }
        >
                  <i className="material-icons">delete</i>
              </a>
          </div>
      </li>
  );
}
