import { Header } from './components/header';
import { Outlet } from 'react-router-dom';
import classes from './layout.module.css';

export const Layout = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Outlet />
    </div>
  );
};
