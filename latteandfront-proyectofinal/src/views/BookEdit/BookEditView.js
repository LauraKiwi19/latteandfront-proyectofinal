import FlexContainer from 'components/UI/FlexContainer';
import propTypes from 'prop-types';
import Form from 'components/UI/Form/Form';


export default function BookEditView({handleSubmit, handleTitle, handleImage, title, image, imageUrl, categories, book, handleCategory}){

  return(
    <FlexContainer>
      <Form
            handleSubmit={handleSubmit}
            handleTitle={handleTitle}
            handleImage={handleImage}
            title={title}
            image={image}
            imageUrl={imageUrl}
            categories={categories}   
            book={book}
            handleCategory={handleCategory}
            buttonText="Editar Libro"
      />

    </FlexContainer>
  );
}

BookEditView.propTypes = {
  handleSubmit: propTypes.func,
  handleTitle: propTypes.func,
  handleImage: propTypes.func,
  handleCategory: propTypes.func,
  title: propTypes.string,
  image: propTypes.string, 
  imageUrl: propTypes.string,
  categories: propTypes.array,
  selectedCategories: propTypes.array,
  setSelectedCategories: propTypes.func,
  book: propTypes.object,
  buttonText: propTypes.string
};