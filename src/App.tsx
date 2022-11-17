import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import UserCard from './components/UserCard';

function App() {
  const [q,  setQ] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {}
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {

  }
  return (
    <div className="App">
      <Search query={q} setQuery={setQ} disabled={disabled} handleSearch={(e) => handleSearch(e)}/>
      <UserCard searchTerm={q} handleCheck={handleCheck}/>
    </div>
  );
}

export default App;
