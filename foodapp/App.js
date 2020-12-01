import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./app/screens/SearchScreen";
import RestaurantDetailScreen from "./app/screens/RestaurantDetailScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantDetail: RestaurantDetailScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
