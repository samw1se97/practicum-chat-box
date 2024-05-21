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

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainNav />,
//   },
// ]);

function Layout() {
  return (
    <>
      {/* <LoginPage /> */}
      <MainNav />
      <EmailsNav />
      <MailList />
      <EmailPage />
    </>
  );
}
{
  /* <Routes>
      <Route path='/' element={<MainNav />}>
        <Route path='/emailsNav' element={<EmailsNav />} />
      </Route> 
    </Routes> */
}
export default Layout;
