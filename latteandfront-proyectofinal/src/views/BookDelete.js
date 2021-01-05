import React from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import {BOOKS} from 'config/routes';

export default function BookDelete() { 
  const { id } = useParams();
  const  history  = useHistory();

  async function handleConfirmation(){
      try{
        const response = await fetch(`http://18.130.120.189/api/books/${id}`
          , {
          method: 'DELETE',
          body: '',
          headers: {
            'Accept': 'application/json',
            'X-AUTH-TOKEN': 'LIBRARIFY',
          }});
        const json = await response.json();
        console.log('Funciono');
        console.log(json);
        return json;
      }
      catch (error){
        console.log(error);
      }

      history.push(BOOKS);


    }


  return(
    <div>
      <p>¿Te borro?</p>
      <div>
        <button onClick={handleConfirmation}>Yes</button>
        <button><Link to={BOOKS}>Nop</Link></button>
      </div>
    </div>
  );
}