import { BarWrap, List, ListItem, ImgWrap, Title, Stats } from './Bar.style';
import { Link, useRouteMatch } from 'react-router-dom';

const ListItemBlock = ({ item, url }) => {
  return (
    <ListItem>
      <Link to={`${url}/${item.id}`}>
        <ImgWrap>
          <img src={item.thumbnailUrl} alt={item.originalName} />
          <div>
            <Stats>{item.stats.likes}</Stats>
            <Stats>{item.stats.views}</Stats>
          </div>
        </ImgWrap>
        <div>
          <Title>{item.name}</Title>
        </div>
      </Link>
    </ListItem>
  );
};

const Bar = ({ data }) => {
  const { url } = useRouteMatch();

  return (
    <BarWrap>
      <List>
        {data.map(
          item =>
            item.thumbnailUrl && (
              <ListItemBlock key={item.id} item={item} url={url} />
            ),
        )}
      </List>
    </BarWrap>
  );
};

export default Bar;
