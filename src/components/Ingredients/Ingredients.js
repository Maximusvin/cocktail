import { useState } from 'react';
import {
  Wrap,
  CategoryWrap,
  ListItem,
  Title,
  Item,
  Header,
  DeleteWrap,
  ModalWrap,
  ContentWrap,
  ContentItem,
} from './Ingredients.style';
import DeleteIcon from '@material-ui/icons/Delete';

const ingredientsCategory = [
  'Крепкие алкогольные напитки',
  'Ликеры',
  'Слабоалкогольные напитки',
  'Безалкогольные напитки',
  'Прочее',
];

const Category = ({ category, title, onClick, activeItems }) => {
  // const [activeItem, setActiveItem] = useState([]);

  // const handleClick = id => {
  //   activeItem.includes(id)
  //     ? setActiveItem([...activeItem.filter(item => item !== id)])
  //     : setActiveItem([...activeItem, id]);
  // };

  // const clearSelectList = () => {
  //   setActiveItem([]);
  // };

  return (
    <CategoryWrap>
      <Header>
        <Title>{title}</Title>
        {/* {activeItem.length > 0 && (
          <DeleteWrap onClick={clearSelectList}>
            <DeleteIcon fontSize="small" />
            <p>Очистить выбранный список</p>
          </DeleteWrap>
        )} */}
      </Header>

      <ListItem>
        {category.map(({ id, name }) => (
          <Item
            key={id}
            onClick={() => onClick(id)}
            active={activeItems.includes(id) ? true : false}
          >
            {name}
          </Item>
        ))}
      </ListItem>
    </CategoryWrap>
  );
};

const Ingredients = ({ ingredients, data }) => {
  const [activeItem, setActiveItem] = useState([]);

  const handleClick = id => {
    activeItem.includes(id)
      ? setActiveItem([...activeItem.filter(item => item !== id)])
      : setActiveItem([...activeItem, id]);
  };

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

  const filterCocktail = data.filter(item =>
    item.ingredientsWithQuantities
      .flatMap(item => item.ingredientId)
      .every(e => activeItem.includes(e)),
  );

  console.log(filterCocktail);

  return (
    <Wrap>
      <ModalWrap>
        <Category
          category={strongAlcoholic}
          title={ingredientsCategory[0]}
          onClick={handleClick}
          activeItems={activeItem}
        />
        <Category
          category={liqueurs}
          title={ingredientsCategory[1]}
          onClick={handleClick}
          activeItems={activeItem}
        />
        <Category
          category={lowAlcohol}
          title={ingredientsCategory[2]}
          onClick={handleClick}
          activeItems={activeItem}
        />
        <Category
          category={softDrinks}
          title={ingredientsCategory[3]}
          onClick={handleClick}
          activeItems={activeItem}
        />
        <Category
          category={other}
          title={ingredientsCategory[4]}
          onClick={handleClick}
          activeItems={activeItem}
        />
      </ModalWrap>

      {filterCocktail.length > 0 && (
        <ContentWrap>
          {filterCocktail.map(
            item =>
              item.thumbnailUrl && (
                <ContentItem key={item.id}>
                  {item.name}
                  <img src={item.thumbnailUrl} alt={item.name} />
                </ContentItem>
              ),
          )}
        </ContentWrap>
      )}
    </Wrap>
  );
};

export default Ingredients;
