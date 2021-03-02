import Card from 'components/UI/Card/Card';
import PropTypes from 'prop-types';

export default function BookItem({book, key}){
  return(
    <li key={key}>
      <Card
        title={book.title}
        authors={book.authors}
        categories={book.categories}
        image={book.image ? book.image : "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"}
        id={book.id}>
      </Card>
    </li>
  );

}

BookItem.propTypes = {
  book: PropTypes.obj,
  title: PropTypes.string,
  categories: PropTypes.array,
  key: PropTypes.number,
  id: PropTypes.number,
  image: PropTypes.string
};
