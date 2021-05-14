import { Link, useParams } from 'react-router-dom';
import { CocktailWrap, IngredientsWrap } from './CocktailDetails.style';
import data from 'DATA/data.json';
import ingredients from 'DATA/ingredients.json';

const CocktailDetailsPage = () => {
  const params = useParams();
  const currentCocktail = data.find(item => item.id === +params.cocktailId);

  const onCurrentIngredients = id => {
    return ingredients.find(item => item.id === id);
  };

  const {
    name,
    originalName,
    imageUrl,
    description,
    ingredientsWithQuantities,
  } = currentCocktail;

  const arrDescription = description.split('\n');

  return (
    <CocktailWrap>
      <img src={imageUrl} alt={name} />

      <div>
        <h2>{name}</h2>
        <h3>{originalName}</h3>

        {arrDescription.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <h3>Состав:</h3>
        {ingredientsWithQuantities.map((item, index) => (
          <IngredientsWrap key={index}>
            <Link to={`/ingredients/${item.ingredientId}`}>
              {onCurrentIngredients(item.ingredientId).name}
            </Link>
            <p>
              {item.quantity} {item.unit}
            </p>
          </IngredientsWrap>
        ))}
      </div>
    </CocktailWrap>
  );
};

export default CocktailDetailsPage;
