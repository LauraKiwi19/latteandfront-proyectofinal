import React, {useState} from 'react';
import {MAGIC_WORD} from 'consts/magic_word';
import useAuthContext from 'hooks/useAuthContext';

import data from 'utils/apiClient';



function Home() {

  const {login} = useAuthContext();
  const [magicWord, setMagicWord] = useState('');
  const [json, setJson] = useState(null);

  let errorMessage = '';

  function handleSubmit(event){
    event.preventDefault;

    if (magicWord === MAGIC_WORD){
      console.log("IMIN");
      login();
    } else (
      errorMessage = 'No es correcta'
    );
    console.log(errorMessage);
  }

  function handleInputChange(event){
    setMagicWord(event.target.value);
  }

  async function handleClick(){
    const url= "https://reqres.in/api/users?page=2";
    const info = await data.get(url);
    console.log(info);
    return setJson(info);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={magicWord} onChange={handleInputChange} />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <button onClick={handleClick}>Hola</button>
      <ul>{json === null ? <p>No hay usuarios</p> : json.data.map(person => <li key={person.id}>{person.id}</li>)}</ul>
      <p>{errorMessage}</p>
    </div>
  );
}

export default Home;