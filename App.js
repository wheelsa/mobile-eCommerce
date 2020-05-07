import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productsReducer from "./store/reducers/products";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <NavigationContainer>
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
    </NavigationContainer>
  );
}
