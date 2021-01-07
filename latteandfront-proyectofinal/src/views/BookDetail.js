import {useParams} from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import FlexContainer from 'components/UI/FlexContainer';
import {BookDetailContainer} from 'components/UI/BookDetailContainer';
import {BookTitle, BookImage, CategoryList, Category} from 'components/UI/Card/styledComponents';



function BookDetail() {

  const { id } = useParams();
  const {data: book} = useFetch (`http://18.130.120.189/api/books/${id}`);
  console.log(book);


  if (!book){
    return <h1>Loading</h1>;
  }

  return(
    <FlexContainer>
      <BookDetailContainer>
        <BookTitle>{book.title}</BookTitle>
        <BookImage src={book.image} alt={book.name}/>
          <CategoryList>
            {book.categories.map(category => 
              <Category category={category.id} key={category.id}>{category.name}</Category>)}
          </CategoryList>
        
      </BookDetailContainer>
    </FlexContainer>
  );


}



export default BookDetail;