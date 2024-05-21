import { useState } from 'react';
import MainNav from './components/MainNav';
import EmailsNav from './components/EmailsNav';
import MailList from './components/MailList';
import EmailPage from './components/EmailPage';
import Layout from './Layout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <Layout />
    </div>
  );
}

export default App;
