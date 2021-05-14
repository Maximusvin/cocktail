import { Link, useParams } from 'react-router-dom';
import { IngredientsWrap } from './IngredientsDetailsPage.style';
import data from 'DATA/data.json';
import ingredients from 'DATA/ingredients.json';

const IngredientsDetailsPage = () => {
  const params = useParams();
  const currentIngredients = ingredients.find(
    item => item.id === +params.ingredientsId,
  );

  const onCurrentIngredients = id => {
    return ingredients.find(item => item.id === id);
  };

  const { name, vol, imageUrl, description, category } = currentIngredients;

  const arrDescription = description.split('\n');

  return (
    <IngredientsWrap>
      <h2>{name}</h2>
      <p>Категория: {category}</p>
      <p>Крепость: {vol}%</p>
      <p>{arrDescription}</p>
    </IngredientsWrap>
  );
};

export default IngredientsDetailsPage;
