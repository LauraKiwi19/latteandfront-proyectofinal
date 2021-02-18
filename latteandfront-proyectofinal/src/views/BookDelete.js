import React from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import {BOOKS} from 'config/routes';
import FlexContainer from 'components/UI/FlexContainer';
import {BookDeleteContainer} from 'components/UI/BookDeleteContainer';
import Button from 'components/UI/Button';



export default function BookDelete() { 
  const { id } = useParams();
  const  history  = useHistory();

  async function handleConfirmation(){
      try{
        await fetch(`http://18.130.120.189/api/books/${id}`, 
          {
          method: 'DELETE',
          body: '',
          headers: {
            'Accept': 'application/json',
            'X-AUTH-TOKEN': 'LIBRARIFY',
          }});
        history.push(BOOKS);
      }
      catch (error){
        console.log(error);
      }
    }


  return(
    <FlexContainer>
      <BookDeleteContainer>
        <p>¿Te borro?</p>
        <div>
          <Button onClick={handleConfirmation}>Si</Button>
          <Button secondary><Link to={BOOKS}>No</Link></Button>
        </div>
      </BookDeleteContainer>
    </FlexContainer>
  );
}