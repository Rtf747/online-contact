import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactListComponent from './components/container/ContactListComponent';

function App() {
 const [count, setCount] = useState(0);

 return (
  <div className='App'>
   <header className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <ContactListComponent />
   </header>
  </div>
 );
}

export default App;
