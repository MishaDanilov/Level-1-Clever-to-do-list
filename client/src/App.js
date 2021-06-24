import 'materialize-css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { useTask } from './hooks/task.hook';

function App() {
  const { login, logout, token, userId } = useAuth();
  const { taskList, changeEvents, setTaskList } = useTask();
  const isAuthenticated = !!token;

  const routes = useRoutes(isAuthenticated);
  return (
      <AuthContext.Provider
      value={ {
        token,
        login,
        logout,
        userId,
        taskList,
        changeEvents,
        setTaskList,
      } }
    >
          <Router>
              {isAuthenticated && <NavBar />}
              <div className="calendar-container">{routes}</div>
          </Router>
      </AuthContext.Provider>
  );
}

export default App;
