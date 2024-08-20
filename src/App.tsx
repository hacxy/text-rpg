import classNames from 'classnames';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.scss';
import { useEffect } from 'react';
import { getPlayerToken } from '@/utils';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = getPlayerToken();
    if (!code) {
      navigate('/login', { replace: true });
    }
  }, []);

  return (
    <div className={classNames('page-wrapper')}>
      <Outlet />
    </div>
  );
}

export default App;
