import {useParams} from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import FlexContainer from 'components/UI/FlexContainer';
import {BookDetailContainer} from 'components/UI/BookDetailContainer';
import {Title, Image, CategoryList, Category} from 'components/UI/Card/styledComponents';
import {BACKEND} from 'consts/backendUrl';



function BookDetail() {

  const { id } = useParams();
  const {data: book} = useFetch(`${BACKEND}/api/books/${id}`);

  console.log(book);



  if (!book){
    return <h1>Loading</h1>;
  }

  return(
    <FlexContainer>
      <BookDetailContainer>
        <Title>{book.title}</Title>
        <Image src={book.image} alt={book.name}/>
          <CategoryList>
            {book.categories.map(category => 
              <Category category={category.name} key={category.id}>{category.name}</Category>)}
          </CategoryList>
          <p>{book.description}</p>
          <p>{book.score}</p>
          <ul>
            {book.authors.map(author => 
              <li key={author.id}>{author.name}</li>
            )}
          </ul>
          <p>{book.readAt ? book.readAt.substr(0,10) : ""}</p>
      </BookDetailContainer>
    </FlexContainer>
  );


}



export default BookDetail;