import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import FlatlistScreen from "./src/screens/FlatlistScreen";
import FlatListExerciseScreen from "./src/screens/FlatlistExerciseScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    FlatList: FlatlistScreen,
    FlatlistExercise: FlatListExerciseScreen,
  },
  {
    initialRouteName: "FlatlistExercise",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
