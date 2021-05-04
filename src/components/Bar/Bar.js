import { BarWrap, List, ListItem, ImgWrap, Title, Stats } from './Bar.style';

const ListItemBlock = ({ item }) => {
  return (
    <ListItem>
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
    </ListItem>
  );
};

const Bar = ({ data }) => {
  return (
    <BarWrap>
      <List>
        {data.map(
          item =>
            item.thumbnailUrl && <ListItemBlock key={item.id} item={item} />,
        )}
      </List>
    </BarWrap>
  );
};

export default Bar;
