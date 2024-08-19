import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { usePlayer } from './store';
import { useEffect } from 'react';

function App() {
  const { loadPlayer } = usePlayer();
  useEffect(() => {
    loadPlayer();
  }, []);
  return (
    <div className={classNames('page-wrapper')}>
      <div style={{ height: '100%' }}>
        <Outlet />
      </div>
      {/* <CommonTabbar /> */}
    </div>
  );
}

export default App;
