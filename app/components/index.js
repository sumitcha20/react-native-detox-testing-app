import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './Home'
import NewQuoteScreen from './NewQuote'

const AppStack = createStackNavigator({
    Home:{
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Quotes`,
        }),
    },
    NewQuote:{
        screen: NewQuoteScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Add New Quote`,
        }),
    }
});

const RoutesStack = createSwitchNavigator(
    {
        Loading: HomeScreen,
        App: AppStack
    },
    {initialRouteName: 'Loading'}
);

const Router = createAppContainer(RoutesStack);

export default Router;