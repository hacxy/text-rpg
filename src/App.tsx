import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import './App.scss';

function App() {
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
