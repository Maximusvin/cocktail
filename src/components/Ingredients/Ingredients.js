import { useState } from 'react';
import {
  Wrap,
  CategoryWrap,
  ListItem,
  Title,
  Item,
  Header,
  DeleteWrap,
} from './Ingredients.style';
import DeleteIcon from '@material-ui/icons/Delete';

const ingredientsCategory = [
  'Крепкие алкогольные напитки',
  'Ликеры',
  'Слабоалкогольные напитки',
  'Безалкогольные напитки',
  'Прочее',
];

const Category = ({ category, title }) => {
  const [activeItem, setActiveItem] = useState([]);

  const handleClick = id => {
    activeItem.includes(id)
      ? setActiveItem([...activeItem.filter(item => item !== id)])
      : setActiveItem([...activeItem, id]);
  };

  const clearSelectList = () => {
    setActiveItem([]);
  };

  return (
    <CategoryWrap>
      <Header>
        <Title>{title}</Title>
        {activeItem.length > 0 && (
          <DeleteWrap onClick={clearSelectList}>
            <DeleteIcon fontSize="small" />
            <p>Очистить выбранный список</p>
          </DeleteWrap>
        )}
      </Header>
      <ListItem>
        {category.map(({ id, name }) => (
          <Item
            key={id}
            onClick={() => handleClick(id)}
            active={activeItem.includes(id) ? true : false}
          >
            {name}
          </Item>
        ))}
      </ListItem>
    </CategoryWrap>
  );
};

const Ingredients = ({ ingredients }) => {
  const strongAlcoholic = ingredients.filter(
    item => item.category === ingredientsCategory[0],
  );
  const liqueurs = ingredients.filter(
    item => item.category === ingredientsCategory[1],
  );
  const lowAlcohol = ingredients.filter(
    item => item.category === ingredientsCategory[2],
  );
  const softDrinks = ingredients.filter(
    item => item.category === ingredientsCategory[3],
  );
  const other = ingredients.filter(
    item => item.category === ingredientsCategory[4],
  );

  return (
    <Wrap>
      <Category category={strongAlcoholic} title={ingredientsCategory[0]} />
      <Category category={liqueurs} title={ingredientsCategory[1]} />
      <Category category={lowAlcohol} title={ingredientsCategory[2]} />
      <Category category={softDrinks} title={ingredientsCategory[3]} />
      <Category category={other} title={ingredientsCategory[4]} />
    </Wrap>
  );
};

export default Ingredients;
