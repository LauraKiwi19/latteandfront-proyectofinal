import React, {useState} from 'react';
import {MAGIC_WORD} from 'consts/magic_word';
import useAuthContext from 'hooks/useAuthContext';
import Button from 'components/UI/Button';
import {MainContainer, Title, FormContainer, Input, Label, Error} from 'views/Home/styledComponents';


function Home() {

  const {login} = useAuthContext();
  const [magicWord, setMagicWord] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event){
    event.preventDefault();

    if (magicWord === MAGIC_WORD){
      login();
    } else (
      setError('¡Esa no es!')
    );
  }

  function handleInputChange(event){
    setMagicWord(event.target.value);
  }

  return (
    <MainContainer>
      <Title>📘🔒</Title>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Label>Introduce palabra secreta</Label>
          <Input type="text" value={magicWord} onChange={handleInputChange} />
          <Error>{error}</Error>
          <Button type="submit">Iniciar Sesión</Button>
        </form>
      </FormContainer>
    </MainContainer>
  );
}

export default Home;