import { Route, Switch } from 'react-router-dom';
// import { Header, Footer, Main, Home, Questions } from 'components';
// import { AuthPage, ContactsPage, UseFulPage } from 'views';
import { Bar, NavBar, Ingredients } from 'components';
import { Layout } from 'UI/Layout';
import data from 'DATA/data.json';
import ingredients from 'DATA/ingredients.json';

function App() {
  return (
    <>
      <NavBar />

      <Layout>
        <Switch>
          <Route path="/" exact>
            <Bar data={data} />
          </Route>
          <Route path="/ingredients">
            <Ingredients ingredients={ingredients} />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
