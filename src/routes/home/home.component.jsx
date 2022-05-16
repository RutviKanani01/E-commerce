import logo from './../../logo.svg';
import { Outlet } from 'react-router-dom';
import './../../categories.styles.scss';
import Directory from './../../components/directory/directory.component';

const Home = () => {

  return (
      <div>
          <Directory />
          <Outlet />
      </div>
  );
}

export default Home;
