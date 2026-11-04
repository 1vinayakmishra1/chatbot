import { useState, useEffect } from 'react';
import './App.css'
import ChatArea from './ChatArea';
import { auth } from './firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);
  return (
    <ChatArea user={user} />
  );
}

export default App
