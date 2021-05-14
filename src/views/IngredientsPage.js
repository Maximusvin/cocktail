import { Ingredients } from 'components';
import ingredients from 'DATA/ingredients.json';
import data from 'DATA/data.json';

export const IngredientsPage = () => (
  <Ingredients ingredients={ingredients} data={data} />
);
