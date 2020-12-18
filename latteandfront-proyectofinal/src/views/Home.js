import React, {useState} from 'react';
import {MAGIC_WORD} from 'consts/magic_word';
import useAuthContext from 'hooks/useAuthContext';


function Home() {

  const {login} = useAuthContext();
  const [magicWord, setMagicWord] = useState('');

  function handleSubmit(event){
    event.preventDefault;
    if (magicWord === MAGIC_WORD){
      console.log("IMIN");
      login();
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
    </div>
  );
}

export default Home;