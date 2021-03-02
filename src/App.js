import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import { ShoppingCart } from "./Components/ShoppingCart";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";

function App() {
  return (
    <BrowserRouter>
      <Switch>
       
        <Layout>
          <ShoppingCart>
            <Route exact path="/" component={Menu}/>
            <Route exact path="/order" component={Order}/>
          </ShoppingCart>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;