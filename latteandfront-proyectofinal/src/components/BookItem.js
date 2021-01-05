import Card from 'components/UI/Card/Card';
import PropTypes from 'prop-types';

export default function BookItem({bookTitle, id, categories, image}){
  return(
    <li key={id}>
      <Card
      bookTitle={bookTitle}
      categories={categories}
      image={image}
      id={id}>
      </Card>
    </li>
  );

}

BookItem.propTypes = {
  bookTitle: PropTypes.string,
  categories: PropTypes.array,
  key: PropTypes.number,
  id: PropTypes.number,
  image: PropTypes.string
};
