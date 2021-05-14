import { Route, Switch } from 'react-router-dom';
import { NavBar } from 'components';
import {
  CocktailDetailsPage,
  BarPage,
  IngredientsPage,
  IngredientsDetailsPage,
} from 'views';
import { Layout } from 'UI/Layout';

function App() {
  return (
    <>
      <NavBar />

      <Layout>
        <Switch>
          <Route path="/cocktail" exact component={BarPage} />
          <Route path="/cocktail/:cocktailId" component={CocktailDetailsPage} />
          <Route
            path="/ingredients/:ingredientsId"
            component={IngredientsDetailsPage}
          />
          <Route exact path="/ingredients" component={IngredientsPage} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
