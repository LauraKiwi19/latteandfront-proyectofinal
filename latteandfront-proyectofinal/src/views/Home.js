import React, {useState} from 'react';
import {MAGIC_WORD} from 'consts/magic_word';


function Home() {

  const [magicWord, setMagicWord] = useState('');

  function handleSubmit(){
    event.preventDefault;
    if (magicWord === MAGIC_WORD){
      alert('login');
    }

  }

  function handleInputChange(event){
    setMagicWord(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={magicWord} onChange={handleInputChange} />
        <button type="submit">Iniciar Sesión</button>
      </form>
      HOME
    </div>
  );
}

export default Home;