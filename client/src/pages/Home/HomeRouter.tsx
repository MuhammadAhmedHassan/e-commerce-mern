import { Switch, Route, RouteComponentProps } from "react-router-dom";
import { generalRoutes } from "../../const/routes";
import NotFound from "../../shared/components/404NotFound";
import {
  HomePage,
  ShowSingleProduct,
  ShowCategoryProducts,
  ShowSubCategoryProducts,
} from "./components";

function HomeRouter(_: RouteComponentProps) {
  return (
    <Switch>
      <Route exact path={generalRoutes.HOME_PAGE} component={HomePage} />
      <Route
        exact
        path={generalRoutes.PRODUCT_PAGE}
        component={ShowSingleProduct}
      />
      <Route
        exact
        path={generalRoutes.Category}
        component={ShowCategoryProducts}
      />

      <Route
        exact
        path={generalRoutes.SubCategory}
        component={ShowSubCategoryProducts}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

export default HomeRouter;
