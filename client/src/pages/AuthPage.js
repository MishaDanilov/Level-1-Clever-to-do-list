import { useState, useEffect, useContext } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContex';

function AuthPage() {
  const auth = useContext(AuthContext);
  const { loading, request, error, clearError } = useHttp();

  const [ form, setForm ] = useState({
    email: '',
    password: '',
  });

  const message = useMessage();

  useEffect(() => {
    message(error);
    clearError();
  }, [ error, message, clearError ]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = (event) => {
    setForm({ ...form, [ event.target.name ]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/register', 'POST', {
        ...form,
      });
      message(data.message);
    } catch (e) {
      console.log(e.message);
    }
  };

  const loginHandler = async () => {
    try {
      const data = await request('/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
      auth.changeEvents(data.userId);
      console.log('Data:', data);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
      <div className="row">
          <div className="col s4 offset-s4">
              <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                      <span className="card-title">Авторизация</span>
                      <div>
                          <div className="input-field">
                              <input
                  placeholder="Введите почту"
                  id="email"
                  type="text"
                  name="email"
                  onChange={ changeHandler }
                />
                              <label htmlFor="email">Почта</label>
                          </div>
                          <div className="input-field">
                              <input
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  onChange={ changeHandler }
                />
                              <label htmlFor="password">Пароль</label>
                          </div>
                      </div>
                  </div>
                  <div className="card-action">
                      <button
              className="waves-effect waves-light btn-small"
              onClick={ loginHandler }
              disabled={ loading }
            >
                          Войти
                      </button>
                      <button
              className="waves-effect waves-light btn-small left-margin"
              onClick={ registerHandler }
              disabled={ loading }
            >
                          Регистрация
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export { AuthPage };
