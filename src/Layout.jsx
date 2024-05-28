import React from 'react';
import MainNav from './components/MainNav';
import EmailsNav from './components/EmailsNav';
import MailList from './components/MailList';
import EmailPage from './components/EmailPage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';

function Layout() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainNav />}>
          <Route path='emails' element={<EmailsNav />}>
            <Route path='inbox' element={<MailList />}>
              <Route path=':emailId' element={<EmailPage />}></Route>
            </Route>
            <Route path='sent' element={<MailList />}>
              <Route path=':emailId' element={<EmailPage />}></Route>
            </Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />

        {/* <LoginPage /> */}
        {/* 
        <EmailsNav /> */}

        {/* <NewMsg /> */}
        {/* 
      <EmailPage /> */}
      </Routes>
    </>
  );
}
export default Layout;
