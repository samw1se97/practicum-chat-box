import React from 'react';
import MainNav from './components/MainNav';
import EmailsNav from './components/EmailsNav';
import MailList from './components/MailList';
import EmailPage from './components/EmailPage';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NewMsg from './components/NewMsg';

function Layout() {
  return (
    <>
      {/* <LoginPage /> */}
      <MainNav />
      <EmailsNav />
      {/* <NewMsg /> */}
      {/* <MailList />
      <EmailPage /> */}
    </>
  );
}
export default Layout;
