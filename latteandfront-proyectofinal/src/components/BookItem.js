import PropTypes from 'prop-types';
import {generatePath, Link} from 'react-router-dom';
import {BOOKS_ID} from 'config/routes';

export default function BookItem({bookTitle, id, key, categories}){
  return(
    <li key={key}>
      <Link to={generatePath(BOOKS_ID, { id: id })}>
        <div>
          <h1>{bookTitle}</h1>
          <ul>
            {categories.map((categorie, index) => <li key={index}>{categorie.name}</li>)}
          </ul>
        </div>
      </Link>
    </li>
  );

}

BookItem.propTypes = {
  bookTitle: PropTypes.string,
  categories: PropTypes.array,
  key: PropTypes.number,
  id: PropTypes.number,
};