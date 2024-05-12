import { useState } from 'react';
import Navbar from './components/Navbar';
import Mailbox from './components/Mailbox';
import MailList from './components/MailList';
import MailSender from './components/MailSender';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <Navbar />
      <Mailbox />
      <MailList />
      <MailSender />
    </div>
  );
}

export default App;
